import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, relative } from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');
const QUALITY = 82;
const MAX_WIDTH = 1920;
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const PHOTO_DIRS = [PUBLIC_DIR, join(PUBLIC_DIR, 'images')];

async function collectPhotos(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) continue;
    if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertToWebp(inputPath) {
  const dir = inputPath.replace(/\\/g, '/').includes('/images/')
    ? join(PUBLIC_DIR, 'images')
    : PUBLIC_DIR;
  const file = basename(inputPath);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(dir, outputName);

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const pipeline =
    metadata.width > MAX_WIDTH
      ? image.resize(MAX_WIDTH, null, { withoutEnlargement: true })
      : image;

  await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

  const rel = '/' + relative(PUBLIC_DIR, outputPath).replace(/\\/g, '/');
  console.log(`  ✓ ${relative(PUBLIC_DIR, inputPath)} → ${rel}`);
  return outputPath;
}

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function brandOverlaySvg(title = 'Hennessy Chauffeurs', subtitle = 'Discreet Luxury Travel') {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle.toUpperCase());
  return Buffer.from(`<svg width="${OG_WIDTH}" height="${OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.72"/>
    </linearGradient>
  </defs>
  <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#g)"/>
  <text x="60" y="${OG_HEIGHT - 88}" font-family="Georgia, serif" font-size="52" fill="#e7e5e5">${safeTitle}</text>
  <text x="60" y="${OG_HEIGHT - 38}" font-family="Arial, sans-serif" font-size="22" fill="#c6c6c7" letter-spacing="4">${safeSubtitle}</text>
</svg>`);
}

async function createOgImage(sourcePath, outputRelPath, subtitle) {
  const outputPath = join(PUBLIC_DIR, outputRelPath.replace(/^\//, ''));
  await sharp(sourcePath)
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: 'centre' })
    .composite([{ input: brandOverlaySvg('Hennessy Chauffeurs', subtitle), top: 0, left: 0 }])
    .webp({ quality: QUALITY })
    .toFile(outputPath);
  console.log(`  ✓ OG ${outputRelPath} (${OG_WIDTH}×${OG_HEIGHT})`);
}

async function main() {
  console.log('\nConverting photographic assets to WebP…\n');
  const photos = [];
  for (const dir of PHOTO_DIRS) {
    photos.push(...(await collectPhotos(dir)));
  }

  const webpByBase = new Map();
  for (const photo of photos) {
    const webpPath = await convertToWebp(photo);
    webpByBase.set(basename(photo, extname(photo)), webpPath);
  }

  console.log('\nGenerating branded OG images (1200×630)…\n');

  const hero = webpByBase.get('hero-mercedes');
  const airport = webpByBase.get('service-airport-terminal2');
  const contact = join(PUBLIC_DIR, 'contactMe.webp');

  if (hero) {
    await createOgImage(hero, '/images/og-default.webp', 'Discreet Luxury Travel');
    await createOgImage(hero, '/images/og-home.webp', 'Discreet Luxury Travel');
    await createOgImage(hero, '/images/og-about.webp', 'The Driver & The Fleet');
    await createOgImage(hero, '/images/og-blog.webp', 'Journal');
  }
  if (airport) {
    await createOgImage(airport, '/images/og-services.webp', 'Chauffeur Services');
    await createOgImage(airport, '/images/og-airport.webp', 'Airport Transfers');
  }
  if (await stat(contact).then(() => true).catch(() => false)) {
    await createOgImage(contact, '/images/og-contact.webp', 'Reservation & Inquiry');
  }

  const tour = webpByBase.get('service-tours-countryside');
  if (tour) await createOgImage(tour, '/images/og-tours.webp', 'Private Tours');

  const exec = webpByBase.get('service-executive-docklands');
  if (exec) {
    await createOgImage(exec, '/images/og-business.webp', 'Executive Travel');
    await createOgImage(exec, '/images/og-occasions.webp', 'Special Occasions');
  }

  console.log('\nDone.\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
