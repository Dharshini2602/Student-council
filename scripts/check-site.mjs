#!/usr/bin/env node
/**
 * Lightweight integrity checks for the static site.
 *
 * The site has no build step, so a missing file or a leftover placeholder only
 * shows up in the browser. This script catches those problems before they ship.
 *
 * Usage: npm run check
 */
import { readFileSync, existsSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];
const note = message => problems.push(message);

const html = readFileSync(resolve(root, "index.html"), "utf8");

const isExternal = reference => /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(reference);
const cleanReference = reference => reference.split(/[?#]/)[0];
const toLocalPath = reference => {
    const clean = decodeURIComponent(cleanReference(reference));
    return clean.startsWith("/") ? clean.slice(1) : clean;
};

// 1. Every local script, stylesheet, font, image and link target must exist.
const attributeReferences = [
    ...html.matchAll(/\b(?:src|href)\s*=\s*(["'])(.*?)\1/gi)
].map(match => match[2]);
const cssReferences = [
    ...html.matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi)
].map(match => match[2]);

const localReferences = [...new Set([...attributeReferences, ...cssReferences])]
    .filter(reference => reference && !isExternal(reference));

for (const reference of localReferences) {
    const localPath = toLocalPath(reference);
    if (!localPath) continue;
    const absolute = resolve(root, localPath);
    if (!existsSync(absolute) || !statSync(absolute).isFile()) {
        note(`missing local file: ${reference}`);
    }
}

// 2. No placeholder tokens left in visible copy or configuration.
const placeholders = [...html.matchAll(/\[[A-Z][A-Z0-9 _/-]*\]/g)].map(match => match[0]);
for (const placeholder of new Set(placeholders)) {
    note(`placeholder left in index.html: ${placeholder}`);
}

// 3. Element IDs must be unique; anchors and aria-controls rely on them.
const ids = [...html.matchAll(/\bid\s*=\s*"([^"]+)"/g)].map(match => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
for (const id of new Set(duplicateIds)) {
    note(`duplicate id: ${id}`);
}

// 4. Images need alternative text, and new-tab links need rel="noopener".
for (const [tag] of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=\s*["'][^"']*["']/i.test(tag)) note(`image without alt text: ${tag.slice(0, 80)}…`);
}
for (const [tag] of html.matchAll(/<a\b[^>]*target\s*=\s*["']_blank["'][^>]*>/gi)) {
    if (!/\brel\s*=\s*["'][^"']*noopener/i.test(tag)) note(`target="_blank" link without rel="noopener": ${tag.slice(0, 80)}…`);
}

// 5. The web app manifest must be valid JSON and point at real icons.
const manifestPath = resolve(root, "site.webmanifest");
if (existsSync(manifestPath)) {
    try {
        const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
        if (!manifest.name || !manifest.start_url) note("site.webmanifest is missing name or start_url");
        for (const icon of manifest.icons ?? []) {
            const iconPath = toLocalPath(icon.src ?? "");
            if (!iconPath || !existsSync(resolve(root, iconPath))) {
                note(`site.webmanifest references a missing icon: ${icon.src}`);
            }
        }
    } catch (error) {
        note(`site.webmanifest is not valid JSON: ${error.message}`);
    }
}

if (problems.length) {
    console.error(`Site checks failed with ${problems.length} problem(s):`);
    for (const problem of problems) console.error(`  - ${problem}`);
    process.exitCode = 1;
} else {
    console.log(`Site checks passed: ${localReferences.length} local references, ${ids.length} unique IDs, no placeholders.`);
}
