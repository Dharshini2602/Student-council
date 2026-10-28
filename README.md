# PPGIT Student Council Website

The official website of the Student Council at **PPG Institute of Technology, Coimbatore**. It is a
single-page site where students can learn about the council, see completed events, read the FAQ,
contact the team and sign in with their college email.

## What is in the site

- A fully static single-page layout built with hand-written HTML, CSS and JavaScript.
- Scroll-driven motion using locally vendored [GSAP](https://gsap.com/), ScrollTrigger and
  [Lenis](https://github.com/darkroomengineering/lenis).
- Sections for what the council does, how it works, completed events, the members, student login,
  FAQ and contact details.
- Student login with Firebase Authentication, restricted to `@ppg.edu.in` addresses. Both
  email/password and Google sign-in are supported, along with password reset.
- A contact form that opens the visitor's mail client with a pre-filled message.

## Tech stack

| Layer | Tool |
| --- | --- |
| Markup and styles | `index.html` (scoped CSS in `<style data-part="…">` blocks) |
| Motion | GSAP + ScrollTrigger + Lenis, vendored in `js/` |
| Authentication | Firebase JS SDK 10.14.1 (ES modules loaded from the Firebase CDN) |
| Tooling | Node.js 18+ for the optional dev server and integrity checks |

There is **no build step**. The repository root is the deployable site.

## Run it locally

```bash
# Option 1: project script (npx fetches live-server on first run)
npm run dev

# Option 2: any static file server
python3 -m http.server 3000
```

Then open <http://localhost:3000>.

`npm install` is only needed if you want to use the Firebase dependency for local tooling; the
site itself loads the Firebase SDK from a CDN.

> Firebase Authentication only allows requests from authorized domains. `localhost` is authorized by
> default; add the production domain in the Firebase console under **Authentication → Settings →
> Authorized domains** before going live.

## Project structure

```text
.
├── index.html              # The whole site: markup, CSS and inline scripts
├── js/                     # Vendored motion libraries
├── fonts/                  # Self-hosted Gabarito and Instrument Sans files
├── images/                 # Council member photos
├── img/                    # Vector illustrations
├── favicon.svg
├── site.webmanifest        # Web app manifest
├── robots.txt
├── scripts/check-site.mjs  # Local integrity checks
├── .env.example            # Reference values for deployment configuration
└── dist/                   # Legacy React build, untracked and not served
```

## Configuration

The Firebase web configuration lives at the bottom of `index.html`. Firebase web API keys are
public identifiers, so they are safe to keep in source; access is controlled by Firebase security
rules and the authorized-domains list.

`.env.example` documents the college's public contact details and the optional feedback API URL.
This is a static site and does not load `.env` files at runtime, so change any live values directly
in `index.html` (and keep `.env.example` in sync).

## Checks

```bash
npm run check
```

The checker validates that every local script, stylesheet, font and image referenced by
`index.html` exists, that no placeholder tokens such as `[COUNCIL EMAIL]` remain, and that element
IDs are unique. It runs automatically in CI on pushes and pull requests.

## Deployment

Upload the repository root to any static host (GitHub Pages, Netlify, Firebase Hosting, an Apache
document root, and so on). The entry point is `index.html`. No build or server-side runtime is
required. The legacy `dist/` directory is ignored by Git and should not be deployed.

## Contributing

1. Create a branch from `main`.
2. Keep each commit focused on one change.
3. Run `npm run check` before opening a pull request.
4. Describe the change and attach a screenshot for visual updates.

Content that still needs a decision from the council should be raised as an issue instead of being
invented, especially event dates, venues and contact details.
