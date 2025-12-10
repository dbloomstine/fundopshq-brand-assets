const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const EXPORTS_DIR = path.join(ROOT, 'exports');

// Ensure export directories exist
const dirs = [
  'exports',
  'exports/logos',
  'exports/logos/fundopshq',
  'exports/logos/fohq',
  'exports/logos/podcast',
  'exports/favicon',
  'exports/social'
];

dirs.forEach(dir => {
  const fullPath = path.join(ROOT, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

async function exportSvgToPng(svgPath, outputPath, width, height) {
  const svgBuffer = fs.readFileSync(svgPath);
  await sharp(svgBuffer)
    .resize(width, height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(outputPath);
  console.log(`  Created: ${path.basename(outputPath)}`);
}

async function exportLogos() {
  console.log('\n=== Exporting Logos ===\n');

  // FundOpsHQ full wordmark logos
  const fundopsLogos = [
    'fundopshq-primary-light',
    'fundopshq-primary-dark',
    'fundopshq-mono-light',
    'fundopshq-mono-dark'
  ];

  // FOHQ short mark logos
  const fohqLogos = [
    'fohq-primary-light',
    'fohq-primary-dark',
    'fohq-mono-light',
    'fohq-mono-dark'
  ];

  // Export scales
  const scales = [
    { suffix: '', width: 400 },
    { suffix: '@2x', width: 800 },
    { suffix: '@3x', width: 1200 }
  ];

  // Export FundOpsHQ logos
  console.log('FundOpsHQ Wordmarks:');
  for (const logo of fundopsLogos) {
    const svgPath = path.join(ROOT, 'logos', `${logo}.svg`);
    if (fs.existsSync(svgPath)) {
      for (const scale of scales) {
        const outputPath = path.join(EXPORTS_DIR, 'logos/fundopshq', `${logo}${scale.suffix}.png`);
        await exportSvgToPng(svgPath, outputPath, scale.width, null);
      }
    }
  }

  // Export FOHQ logos
  console.log('\nFOHQ Short Marks:');
  for (const logo of fohqLogos) {
    const svgPath = path.join(ROOT, 'logos', `${logo}.svg`);
    if (fs.existsSync(svgPath)) {
      for (const scale of scales) {
        const outputPath = path.join(EXPORTS_DIR, 'logos/fohq', `${logo}${scale.suffix}.png`);
        await exportSvgToPng(svgPath, outputPath, scale.width, null);
      }
    }
  }

  // Export podcast interview wordmark
  console.log('\nPodcast Wordmark:');
  const interviewsPath = path.join(ROOT, 'logos', 'fundopshq-interviews.svg');
  if (fs.existsSync(interviewsPath)) {
    for (const scale of scales) {
      const outputPath = path.join(EXPORTS_DIR, 'logos/podcast', `fundopshq-interviews${scale.suffix}.png`);
      await exportSvgToPng(interviewsPath, outputPath, scale.width, null);
    }
  }
}

async function exportPodcastCover() {
  console.log('\n=== Exporting Podcast Cover ===\n');

  const svgPath = path.join(ROOT, 'podcast', 'cover-3000x3000.svg');
  const outputPath = path.join(EXPORTS_DIR, 'logos/podcast', 'podcast-cover-3000x3000.png');

  await exportSvgToPng(svgPath, outputPath, 3000, 3000);

  // Also create smaller versions for previews
  await exportSvgToPng(svgPath, path.join(EXPORTS_DIR, 'logos/podcast', 'podcast-cover-1400x1400.png'), 1400, 1400);
  await exportSvgToPng(svgPath, path.join(EXPORTS_DIR, 'logos/podcast', 'podcast-cover-500x500.png'), 500, 500);
}

// NOTE: Favicon export moved to dedicated script: export-favicon.js
// Run: node scripts/export-favicon.js

async function exportSocialMedia() {
  console.log('\n=== Exporting Social Media Templates ===\n');

  // For social media, we'll create simple templates using the logo
  // OG Image (1200x630)
  const ogWidth = 1200;
  const ogHeight = 630;

  // Create a navy background with logo
  const navyBg = Buffer.from(
    `<svg width="${ogWidth}" height="${ogHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1E3A5F"/>
    </svg>`
  );

  // Read the dark logo for overlay
  const logoSvg = fs.readFileSync(path.join(ROOT, 'logos', 'fundopshq-primary-dark.svg'));
  const logoBuffer = await sharp(logoSvg).resize(500, null).png().toBuffer();

  await sharp(navyBg)
    .composite([{
      input: logoBuffer,
      gravity: 'center'
    }])
    .png()
    .toFile(path.join(EXPORTS_DIR, 'social', 'og-image-1200x630.png'));
  console.log('  Created: og-image-1200x630.png');

  // Twitter Header (1500x500)
  const twitterBg = Buffer.from(
    `<svg width="1500" height="500" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1E3A5F"/>
    </svg>`
  );

  const twitterLogo = await sharp(logoSvg).resize(600, null).png().toBuffer();

  await sharp(twitterBg)
    .composite([{
      input: twitterLogo,
      gravity: 'center'
    }])
    .png()
    .toFile(path.join(EXPORTS_DIR, 'social', 'twitter-header-1500x500.png'));
  console.log('  Created: twitter-header-1500x500.png');

  // LinkedIn Banner (1584x396)
  const linkedinBg = Buffer.from(
    `<svg width="1584" height="396" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1E3A5F"/>
    </svg>`
  );

  const linkedinLogo = await sharp(logoSvg).resize(500, null).png().toBuffer();

  await sharp(linkedinBg)
    .composite([{
      input: linkedinLogo,
      gravity: 'center'
    }])
    .png()
    .toFile(path.join(EXPORTS_DIR, 'social', 'linkedin-banner-1584x396.png'));
  console.log('  Created: linkedin-banner-1584x396.png');
}

async function main() {
  console.log('FundOpsHQ Brand Asset Export Tool');
  console.log('==================================');

  try {
    await exportLogos();
    await exportPodcastCover();
    // Favicons: run `node scripts/export-favicon.js` separately
    await exportSocialMedia();

    console.log('\n=== Export Complete ===');
    console.log(`\nAll assets exported to: ${EXPORTS_DIR}`);
  } catch (error) {
    console.error('Export failed:', error);
    process.exit(1);
  }
}

main();
