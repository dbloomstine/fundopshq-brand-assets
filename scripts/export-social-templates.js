/**
 * Export Social Media Templates to PNG
 * Converts all SVG templates to PNG at their native dimensions
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates', 'social');
const OUTPUT_DIR = path.join(__dirname, '..', 'exports', 'social', 'templates');

// Template dimensions (width x height)
const DIMENSIONS = {
  'youtube-thumbnail': { width: 1280, height: 720 },
  'youtube-banner': { width: 2560, height: 1440 },
  'linkedin-post': { width: 1200, height: 627 },
  'linkedin-banner': { width: 1584, height: 396 },
  'twitter-post': { width: 1200, height: 675 },
  'instagram-post-square': { width: 1080, height: 1080 },
  'instagram-story': { width: 1080, height: 1920 },
  'podcast-episode': { width: 1200, height: 630 },
  'og-default': { width: 1200, height: 630 },
  'og-article': { width: 1200, height: 630 },
  'profile-square': { width: 800, height: 800 },
};

async function exportTemplate(svgFile) {
  const baseName = path.basename(svgFile, '.svg');
  const dims = DIMENSIONS[baseName];

  if (!dims) {
    console.log(`  Skipping ${baseName} - no dimensions defined`);
    return;
  }

  const svgPath = path.join(TEMPLATES_DIR, svgFile);
  const pngPath = path.join(OUTPUT_DIR, `${baseName}.png`);

  try {
    await sharp(svgPath)
      .resize(dims.width, dims.height)
      .png()
      .toFile(pngPath);

    console.log(`  Exported: ${baseName}.png (${dims.width}x${dims.height})`);
  } catch (err) {
    console.error(`  Error exporting ${baseName}: ${err.message}`);
  }
}

async function main() {
  console.log('Exporting social media templates to PNG...\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Get all SVG files
  const svgFiles = fs.readdirSync(TEMPLATES_DIR).filter(f => f.endsWith('.svg'));

  console.log(`Found ${svgFiles.length} templates:\n`);

  for (const file of svgFiles) {
    await exportTemplate(file);
  }

  console.log('\nDone! PNGs saved to exports/social/templates/');
}

main().catch(console.error);
