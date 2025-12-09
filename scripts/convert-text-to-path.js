const fontkit = require('fontkit');
const fs = require('fs');
const path = require('path');

const fontPath = path.join(__dirname, '../fonts/Inter-500.woff2');
const font = fontkit.openSync(fontPath);

function textToPath(text, fontSize, letterSpacing) {
  const scale = fontSize / font.unitsPerEm;
  let x = 0;
  let pathData = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const glyph = font.glyphForCodePoint(char.charCodeAt(0));

    if (glyph && glyph.path) {
      // Get path commands and translate them
      const glyphPath = glyph.path.toSVG();
      if (glyphPath) {
        // Parse and translate the path
        const translatedPath = translatePath(glyphPath, x, 0, scale);
        pathData += translatedPath + ' ';
      }
    }

    // Move to next character position
    const advanceWidth = (glyph ? glyph.advanceWidth : 0) * scale;
    x += advanceWidth + letterSpacing;
  }

  return pathData.trim();
}

function translatePath(svgPath, tx, ty, scale) {
  // Parse SVG path and apply transform
  let result = '';
  const commands = svgPath.match(/[MLQCZHV][^MLQCZHV]*/gi) || [];

  for (const cmd of commands) {
    const type = cmd[0];
    const coords = cmd.slice(1).trim().split(/[\s,]+/).map(Number);

    switch (type.toUpperCase()) {
      case 'M':
      case 'L':
        result += `${type}${(coords[0] * scale + tx).toFixed(2)} ${(-coords[1] * scale + ty).toFixed(2)} `;
        break;
      case 'Q':
        result += `${type}${(coords[0] * scale + tx).toFixed(2)} ${(-coords[1] * scale + ty).toFixed(2)} ${(coords[2] * scale + tx).toFixed(2)} ${(-coords[3] * scale + ty).toFixed(2)} `;
        break;
      case 'C':
        result += `${type}${(coords[0] * scale + tx).toFixed(2)} ${(-coords[1] * scale + ty).toFixed(2)} ${(coords[2] * scale + tx).toFixed(2)} ${(-coords[3] * scale + ty).toFixed(2)} ${(coords[4] * scale + tx).toFixed(2)} ${(-coords[5] * scale + ty).toFixed(2)} `;
        break;
      case 'Z':
        result += 'Z ';
        break;
      case 'H':
        result += `H${(coords[0] * scale + tx).toFixed(2)} `;
        break;
      case 'V':
        result += `V${(-coords[0] * scale + ty).toFixed(2)} `;
        break;
    }
  }

  return result.trim();
}

// Generate path for podcast cover (72px, letter-spacing 12)
console.log('Font units per em:', font.unitsPerEm);
console.log('Font ascent:', font.ascent);

const coverPath = textToPath('INTERVIEWS', 72, 12);
const wordmarkPath = textToPath('INTERVIEWS', 18, 4);

// Calculate width for centering
const coverWidth = calculateWidth('INTERVIEWS', 72, 12);
const wordmarkWidth = calculateWidth('INTERVIEWS', 18, 4);

function calculateWidth(text, fontSize, letterSpacing) {
  const scale = fontSize / font.unitsPerEm;
  let width = 0;

  for (let i = 0; i < text.length; i++) {
    const glyph = font.glyphForCodePoint(text.charCodeAt(i));
    width += (glyph ? glyph.advanceWidth : 0) * scale;
    if (i < text.length - 1) width += letterSpacing;
  }

  return width;
}

console.log('\n=== PODCAST COVER (3000x3000) ===');
console.log('Text width:', coverWidth.toFixed(2), 'px');
console.log('Center offset:', (coverWidth / 2).toFixed(2), 'px');
console.log('\nPath (positioned at origin, need to translate to 1500-width/2, 1620):');
console.log(`<path d="${coverPath}" fill="#94A3B8" transform="translate(${(1500 - coverWidth/2).toFixed(0)}, 1620)"/>`);

console.log('\n=== WORDMARK (279x70) ===');
console.log('Text width:', wordmarkWidth.toFixed(2), 'px');
console.log('\nPath at x=0, y=62:');
console.log(`<path d="${wordmarkPath}" fill="#94A3B8" transform="translate(0, 62)"/>`);

// Write the full paths to files
fs.writeFileSync(
  path.join(__dirname, '../podcast/interviews-path.txt'),
  `<!-- INTERVIEWS as path for podcast cover (3000x3000) -->\n<!-- Centered at x=1500, y=1620 -->\n<path d="${coverPath}" fill="#94A3B8" transform="translate(${(1500 - coverWidth/2).toFixed(0)}, 1620)"/>`
);

fs.writeFileSync(
  path.join(__dirname, '../logos/interviews-wordmark-path.txt'),
  `<!-- INTERVIEWS as path for wordmark -->\n<path d="${wordmarkPath}" fill="#94A3B8" transform="translate(0, 62)"/>`
);

console.log('\n\nPath data saved to files.');
