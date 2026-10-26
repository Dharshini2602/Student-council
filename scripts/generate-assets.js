import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let crc = 0 ^ -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function createChunk(type, data) {
  const typeBuf = Buffer.from(type);
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc, 0);

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function createPNG(width, height, pixelFn) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bits per channel
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdr);

  // Scanlines with filter byte 0
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;
  for (let y = 0; y < height; y++) {
    scanlines[offset++] = 0; // filter byte
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = pixelFn(x, y, width, height);
      scanlines[offset++] = r;
      scanlines[offset++] = g;
      scanlines[offset++] = b;
      scanlines[offset++] = a;
    }
  }

  const idatData = zlib.deflateSync(scanlines);
  const idatChunk = createChunk('IDAT', idatData);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Ensure directories
const dirs = [
  'public/assets/logo',
  'public/assets/campus',
  'public/assets/events',
  'public/assets/members',
];

for (const d of dirs) {
  fs.mkdirSync(path.resolve(process.cwd(), d), { recursive: true });
}

// 1. Generate Logo: PPGIT Crest with Navy Blue, Primary Blue (#173A7A), Green (#4C963B)
const logoBuffer = createPNG(240, 240, (x, y, w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Shield boundary calculation
  const nx = (x - cx) / (w * 0.42);
  const ny = (y - 30) / (h * 0.7);

  const inShield = Math.abs(nx) <= 1 && ny >= 0 && ny <= 1 && (ny <= 0.6 || Math.abs(nx) <= 1 - (ny - 0.6) * 1.8);

  if (!inShield) {
    return [0, 0, 0, 0]; // Transparent outside shield
  }

  // Border check
  const isBorder = Math.abs(nx) > 0.9 || (ny > 0.55 && Math.abs(nx) > 0.9 - (ny - 0.55) * 1.8) || ny < 0.05;
  if (isBorder) {
    return [76, 150, 59, 255]; // Secondary green #4C963B
  }

  // Center emblem cross / torch design
  if (Math.abs(dx) < 6 || Math.abs(dy) < 6) {
    return [255, 255, 255, 255];
  }

  // Shield gradient navy to primary
  const grad = y / h;
  const r = Math.round(11 + (23 - 11) * grad);
  const g = Math.round(23 + (58 - 23) * grad);
  const b = Math.round(48 + (122 - 48) * grad);
  return [r, g, b, 255];
});

fs.writeFileSync(path.resolve(process.cwd(), 'public/assets/logo/ppgit-student-council.png'), logoBuffer);
console.log('Created public/assets/logo/ppgit-student-council.png');

// 2. Event placeholders
const eventImages = [
  'pongal.jpg',
  'symposium.jpg',
  'mass.jpg',
  'moviemania.jpg',
  'teachersday.jpg',
  'sports.jpg',
];

for (let i = 0; i < eventImages.length; i++) {
  const name = eventImages[i];
  const evBuf = createPNG(480, 300, (x, y, w, h) => {
    // Elegant navy to dark blue gradient with subtle diagonal stripe
    const grad = (x + y) / (w + h);
    const stripe = Math.sin((x - y) / 16) > 0.95 ? 20 : 0;
    const r = Math.min(255, Math.round(15 + 15 * grad + stripe));
    const g = Math.min(255, Math.round(30 + 40 * grad + stripe));
    const b = Math.min(255, Math.round(65 + 65 * grad + stripe));
    return [r, g, b, 255];
  });
  fs.writeFileSync(path.resolve(process.cwd(), `public/assets/events/${name}`), evBuf);
}
console.log('Created event images');

// 3. Member placeholders
const memberImages = [
  'president.jpg',
  'vice-president.jpg',
  'general-secretary.jpg',
  'joint-secretary.jpg',
  'treasurer.jpg',
  'cultural-head.jpg',
  'technical-head.jpg',
  'sports-head.jpg',
  'welfare-head.jpg',
];

for (let i = 0; i < memberImages.length; i++) {
  const name = memberImages[i];
  const mBuf = createPNG(320, 360, (x, y, w, h) => {
    // Subtle cool slate background
    const grad = y / h;
    const r = Math.round(235 - 15 * grad);
    const g = Math.round(240 - 15 * grad);
    const b = Math.round(248 - 15 * grad);
    return [r, g, b, 255];
  });
  fs.writeFileSync(path.resolve(process.cwd(), `public/assets/members/${name}`), mBuf);
}
console.log('Created member images');
