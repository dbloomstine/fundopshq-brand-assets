# Riverside FM Setup Guide

Quick reference for setting up FundOpsHQ brand styling in Riverside.

## Fonts

### For Captions/Transcripts

**Primary Font (Headings/Names):**
- **Font:** DM Sans
- **Source:** Google Fonts
- **Import URL:** `https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700`
- **Weights to use:**
  - 700 (Bold) - Names, emphasis
  - 600 (Semibold) - Subheadings
  - 500 (Medium) - Secondary text

**Secondary Font (Body/Titles):**
- **Font:** Inter
- **Source:** Google Fonts
- **Import URL:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600`
- **Weights to use:**
  - 400 (Regular) - Body text, descriptions
  - 500 (Medium) - Captions
  - 600 (Semibold) - Emphasis

### If Custom Fonts Not Available

Use these system font fallbacks:
- DM Sans → **system-ui** or **-apple-system**
- Inter → **Arial** or **Helvetica Neue**

## Brand Colors

### Copy-Paste Ready

| Name | Hex | Use For |
|------|-----|---------|
| Deep Navy | `#1E3A5F` | Backgrounds, headers |
| Slate Gray | `#64748B` | Accents, secondary elements |
| White | `#FFFFFF` | Primary text on dark |
| Light Gray | `#F1F5F9` | Alt backgrounds |
| Caption Gray | `#94A3B8` | Secondary text, captions |
| Navy Light | `#2d4a6f` | Hover states, highlights |

### For Riverside Caption Styling

**Recommended Settings:**
- Background: `#1E3A5F` (Deep Navy) at 90% opacity
- Text Color: `#FFFFFF` (White)
- Highlight/Active Word: `#94A3B8` (Light Gray) or bold white
- Font Size: 24-32px depending on video resolution

## Caption Style Options

### Option A: Minimal (Recommended)
- White text
- No background or subtle dark background
- DM Sans Bold for speaker names
- Inter Regular for speech

### Option B: Boxed
- Navy background box (`#1E3A5F`)
- White text
- Rounded corners (4px)
- Light accent for active word

### Option C: Subtitle Style
- Semi-transparent dark bar at bottom
- Centered text
- Standard caption positioning

## Thumbnail/Clip Settings

When exporting clips for social:

**Aspect Ratios:**
- YouTube: 16:9 (1920x1080)
- Instagram/TikTok Reels: 9:16 (1080x1920)
- LinkedIn/Twitter: 1:1 (1080x1080) or 16:9
- Stories: 9:16 (1080x1920)

**Brand Elements to Include:**
- FundOpsHQ logo (use `logos/fundopshq-primary-dark.svg` on navy backgrounds)
- Or FOHQ short mark for small spaces (`logos/fohq-primary-dark.svg`)
- Keep branding subtle and professional

## Recording Background

If using virtual background or studio setup:
- Primary: Solid Deep Navy `#1E3A5F`
- With Pattern: Use `patterns/diagonal-stripes.svg`
- Keep it simple - let the conversation be the focus

## Quick Links

- Brand Kit: https://dbloomstine.github.io/fundopshq-brand-assets/
- Google Fonts DM Sans: https://fonts.google.com/specimen/DM+Sans
- Google Fonts Inter: https://fonts.google.com/specimen/Inter
