# FundOpsHQ Brand Reference

Use this reference when implementing FundOpsHQ brand elements in any project.

## Authoritative Sources

- **Brand Assets Repository**: https://github.com/dbloomstine/fundopshq-brand-assets
- **Interactive Brand Guide**: Open `index.html` in the repository root
- **Design Tokens**: `brand-tokens.json` in the repository root (v2.0.0 - monochrome palette)
- **This File**: Primary AI reference for brand implementation

## Color Palette

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Deep Navy | `#1E3A5F` | `--color-deep-navy` | Primary brand, headers, buttons, dark backgrounds |
| White | `#FFFFFF` | `--color-white` | Primary backgrounds, text on dark |
| Slate Gray | `#64748B` | `--color-slate-gray` | Body text, secondary elements, "HQ" accent (light bg) |
| Light Gray | `#F1F5F9` | `--color-light-gray` | Alt backgrounds, cards, sections |
| Caption Gray | `#94A3B8` | `--color-caption-gray` | Captions, metadata, secondary text |
| Navy Light | `#2d4a6f` | `--color-navy-light` | Hover states, subtle variations |

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

### Tailwind Config

```javascript
colors: {
  'deep-navy': '#1E3A5F',
  'slate-gray': '#64748B',
  'light-gray': '#F1F5F9',
  'caption-gray': '#94A3B8',
  'navy-light': '#2d4a6f',
}
```

## Typography

### Headings: DM Sans
- **Import:** `https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&display=swap`
- **Weights:** 500 (subheadings), 600 (section titles), 700 (main headings)

### Body: Inter
- **Import:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`
- **Weights:** 400 (body), 500 (emphasis), 600 (labels)

### Type Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 | DM Sans | 48px (3rem) | 700 | 1.1 |
| H2 | DM Sans | 36px (2.25rem) | 600 | 1.2 |
| H3 | DM Sans | 24px (1.5rem) | 600 | 1.3 |
| H4 | DM Sans | 20px (1.25rem) | 500 | 1.4 |
| Body | Inter | 16px (1rem) | 400 | 1.6 |
| Small | Inter | 14px (0.875rem) | 400 | 1.5 |
| Caption | Inter | 12px (0.75rem) | 400 | 1.4 |

### CSS Font Stack

```css
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
}
```

## Logo Files

### Full Wordmark (FundOpsHQ)
- `fundopshq-primary-light.svg` - Light backgrounds (navy FundOps + slate HQ)
- `fundopshq-primary-dark.svg` - Dark backgrounds (all white, monochrome)
- `fundopshq-mono-light.svg` - Single color, light backgrounds (all navy)
- `fundopshq-mono-dark.svg` - Single color, dark backgrounds (all white)

### Short Mark (FOHQ)
- `fohq-primary-light.svg` - Light backgrounds
- `fohq-primary-dark.svg` - Dark backgrounds
- `fohq-mono-light.svg` - Monochrome, light backgrounds
- `fohq-mono-dark.svg` - Monochrome, dark backgrounds

### Podcast
- `fundopshq-interviews.svg` - Podcast wordmark
- `podcast/cover-3000x3000.svg` - Podcast cover art

## Logo Usage Rules

1. **Minimum sizes:** Full wordmark 120px wide, short mark 32px wide
2. **Clear space:** Height of "F" in FundOps around all sides
3. **Light backgrounds:** Use `-light` variants
4. **Dark backgrounds:** Use `-dark` variants
5. **Never:** Rotate, skew, add shadows, change colors, place on busy backgrounds

## Component Styling

### Buttons

```css
.btn-primary {
  background: #1E3A5F;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
}

.btn-primary:hover {
  background: #152d4a;
}

.btn-accent {
  background: #64748B;
  color: white;
}
```

### Cards

```css
.card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
}

.card-alt {
  background: #F1F5F9;
}
```

### Links

```css
a {
  color: #1E3A5F;
}

a:hover {
  color: #2d4a6f;
}
```

## Favicon Implementation

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#1E3A5F">
```

## Social Media Dimensions

| Platform | Asset | Size |
|----------|-------|------|
| Open Graph | og:image | 1200 x 630 |
| Twitter/X | Header | 1500 x 500 |
| LinkedIn | Banner | 1584 x 396 |
| Podcast | Cover | 3000 x 3000 |

## Brand Voice

- Professional and knowledgeable
- Clear and concise
- Trustworthy and authoritative
- Educational without being condescending
- No emojis in formal content
