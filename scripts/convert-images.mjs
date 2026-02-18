import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');
const QUALITY = 80; // Good balance of quality vs size
const MAX_WIDTH = 1920; // Max width for any image

async function convertImages() {
  const files = await readdir(PUBLIC_DIR);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`\nFound ${imageFiles.length} images to convert:\n`);

  for (const file of imageFiles) {
    const inputPath = join(PUBLIC_DIR, file);
    const outputName = basename(file, extname(file)) + '.webp';
    const outputPath = join(PUBLIC_DIR, outputName);

    const originalStat = await stat(inputPath);
    const originalKB = (originalStat.size / 1024).toFixed(1);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Resize if wider than MAX_WIDTH, maintaining aspect ratio
      const pipeline = metadata.width > MAX_WIDTH
        ? image.resize(MAX_WIDTH, null, { withoutEnlargement: true })
        : image;

      await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

      const newStat = await stat(outputPath);
      const newKB = (newStat.size / 1024).toFixed(1);
      const savings = ((1 - newStat.size / originalStat.size) * 100).toFixed(0);

      console.log(`✓ ${file} (${originalKB} KB) → ${outputName} (${newKB} KB) — ${savings}% smaller`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  console.log('\nDone! You can now delete the original JPG/PNG files if desired.');
}

convertImages();
