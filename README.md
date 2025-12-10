# FundOpsHQ Brand Assets

Official brand assets for FundOpsHQ - the trusted resource for fund operations professionals.

## Quick Start

### Using Pre-exported Assets

All production-ready assets are in the `/exports` directory:

```
exports/
├── logos/           # PNG logos at multiple resolutions
│   ├── fundopshq/   # Full wordmark (FundOpsHQ)
│   ├── fohq/        # Short mark (FOHQ)
│   └── podcast/     # Podcast branding
├── favicon/         # Favicon set for web
└── social/          # Social media templates
```

### Using Source Files

Vector source files (SVG) are in the root directories:
- `/logos` - All logo variants
- `/podcast` - Podcast cover and specs
- `/patterns` - Background patterns

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#1E3A5F` | Primary brand color, headers, buttons |
| White | `#FFFFFF` | Primary background, clean space |
| Slate Gray | `#64748B` | Body text, secondary elements, HQ accent |
| Light Gray | `#F1F5F9` | Alt backgrounds, cards, sections |
| Caption Gray | `#94A3B8` | Captions, secondary text |
| Navy Light | `#2d4a6f` | Hover states, subtle variations |

### CSS Variables

```css
:root {
  --color-deep-navy: #1E3A5F;
  --color-white: #FFFFFF;
  --color-slate-gray: #64748B;
  --color-light-gray: #F1F5F9;
  --color-caption-gray: #94A3B8;
  --color-navy-light: #2d4a6f;
}
```

## Typography

### Headings: DM Sans
- Weights: 500, 600, 700
- Import: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&display=swap`

### Body: Inter
- Weights: 400, 500, 600
- Import: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

## Logo System

### Full Wordmark (FundOpsHQ)

| Variant | File | Use Case |
|---------|------|----------|
| Primary Light | `fundopshq-primary-light.svg` | Light backgrounds |
| Primary Dark | `fundopshq-primary-dark.svg` | Dark backgrounds |
| Mono Light | `fundopshq-mono-light.svg` | Single-color on light |
| Mono Dark | `fundopshq-mono-dark.svg` | Single-color on dark |

### Short Mark (FOHQ)

| Variant | File | Use Case |
|---------|------|----------|
| Primary Light | `fohq-primary-light.svg` | Favicons, small spaces, light bg |
| Primary Dark | `fohq-primary-dark.svg` | Small spaces, dark bg |
| Mono Light | `fohq-mono-light.svg` | Single-color, light bg |
| Mono Dark | `fohq-mono-dark.svg` | Single-color, dark bg |

### Podcast Wordmark

- `fundopshq-interviews.svg` - FundOpsHQ Interviews logo

## Logo Usage Guidelines

### Clear Space
Minimum clear space around logo: height of the "F" in FundOps

### Minimum Sizes
- Full wordmark: 120px wide
- Short mark: 32px wide

### Do's
- Use on solid backgrounds (navy, white, light gray)
- Maintain aspect ratio when scaling
- Use appropriate variant for background color

### Don'ts
- Don't rotate or skew the logo
- Don't change the colors
- Don't add effects (shadows, gradients, outlines)
- Don't place on busy backgrounds

## Favicon Implementation

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#1E3A5F">
```

## Podcast Assets

### Cover Art
- Source: `podcast/cover-3000x3000.svg`
- Export: `exports/logos/podcast/podcast-cover-3000x3000.png`
- All major platforms require 3000x3000 PNG

### Platform Requirements
| Platform | Size | Format |
|----------|------|--------|
| Apple Podcasts | 3000x3000 | PNG/JPEG |
| Spotify | 3000x3000 | PNG/JPEG |
| Google Podcasts | 3000x3000 | PNG/JPEG |
| YouTube | 3000x3000 | PNG/JPEG |

## Regenerating Assets

If you modify source SVG files, regenerate exports:

```bash
npm install
node scripts/export-assets.js
```

## File Structure

```
fundopshq-brand-assets/
├── README.md
├── index.html              # Interactive brand kit
├── logos/                  # SVG source files
│   ├── fundopshq-*.svg
│   ├── fohq-*.svg
│   └── fundopshq-interviews.svg
├── podcast/
│   ├── cover-3000x3000.svg
│   ├── EXPORT-INSTRUCTIONS.md
│   ├── lower-thirds-specs.md
│   └── riverside-setup.md
├── patterns/
│   └── diagonal-stripes.svg
├── exports/                # Pre-generated assets
│   ├── logos/
│   ├── favicon/
│   └── social/
├── fonts/                  # Font files (for build tools)
└── scripts/                # Build scripts
```

## License

These brand assets are proprietary to FundOpsHQ. Do not use without permission.
