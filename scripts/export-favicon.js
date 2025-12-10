/**
 * Export Favicon Set
 * Generates all favicon sizes from the source SVG
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '..', 'logos', 'favicon-source.svg');
const OUTPUT_DIR = path.join(__dirname, '..', 'exports', 'favicon');

const SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-64x64.png', size: 64 },
  { name: 'favicon-128x128.png', size: 128 },
  { name: 'favicon-256x256.png', size: 256 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function exportFavicons() {
  console.log('Exporting favicon set...\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const { name, size } of SIZES) {
    const outputPath = path.join(OUTPUT_DIR, name);

    try {
      await sharp(SOURCE)
        .resize(size, size)
        .png()
        .toFile(outputPath);

      console.log(`  Exported: ${name} (${size}x${size})`);
    } catch (err) {
      console.error(`  Error exporting ${name}: ${err.message}`);
    }
  }

  console.log('\nDone! Favicons saved to exports/favicon/');
}

exportFavicons().catch(console.error);
