# Lower Thirds Template Specs

Design specifications for name/title overlays in FundOpsHQ Interviews podcast videos.

## Dimensions & Positioning

| Property | Value |
|----------|-------|
| Video Resolution | 1920 x 1080 (16:9) |
| Lower Third Width | 500-600px (flexible based on name length) |
| Lower Third Height | 80-100px |
| Position from Bottom | 80-100px |
| Position from Left | 80-100px |

## Design Elements

### Background Bar
- **Color:** Deep Navy `#1E3A5F`
- **Opacity:** 95%
- **Corner Radius:** 4px
- **Padding:** 20px horizontal, 16px vertical

### Accent Line
- **Color:** Navy Light `#2d4a6f`
- **Width:** 4px
- **Position:** Left edge of the bar (full height)

### Typography

**Name (Line 1)**
- Font: **DM Sans**
- Weight: **700 (Bold)**
- Size: **28px**
- Color: **White `#FFFFFF`**
- Letter Spacing: Normal

**Title (Line 2)**
- Font: **Inter**
- Weight: **400 (Regular)**
- Size: **18px**
- Color: **Slate Gray `#94A3B8`**
- Letter Spacing: Normal

### Line Spacing
- Gap between name and title: **4-6px**

## Example Layout

```
┌────────────────────────────────────┐
│ ▌ John Smith                       │  ← DM Sans Bold 28px White
│ ▌ CFO, ABC Capital Partners        │  ← Inter Regular 18px Gray
└────────────────────────────────────┘
  ↑
  Navy accent bar (#2d4a6f)
```

## Animation Suggestions

**Entrance:**
- Slide in from left (300-400ms ease-out)
- Or fade in with slight upward motion

**Exit:**
- Slide out to left (200-300ms ease-in)
- Or simple fade out

**Duration on Screen:**
- 4-6 seconds for first appearance
- 2-3 seconds for subsequent appearances

## Safe Zones

Keep lower thirds within these safe areas:
- **Action Safe:** 5% margin from edges (96px from sides, 54px from top/bottom)
- **Title Safe:** 10% margin from edges (192px from sides, 108px from top/bottom)

## Color Reference

| Element | Hex | RGB |
|---------|-----|-----|
| Background | `#1E3A5F` | 30, 58, 95 |
| Accent | `#2d4a6f` | 45, 74, 111 |
| Name Text | `#FFFFFF` | 255, 255, 255 |
| Title Text | `#94A3B8` | 148, 163, 184 |

## Notes

- Always use high contrast text on the navy background
- If guest's company has a logo, consider adding it to the right side (optional)
- Keep text concise - truncate long titles if needed
- Test readability at different video sizes (mobile, desktop, TV)
