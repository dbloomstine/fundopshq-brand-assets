/**
 * FundOpsHQ Tailwind CSS Configuration Extension
 * Version: 2.0.0
 *
 * Usage: Merge this with your tailwind.config.js
 *
 * Example:
 * const brandConfig = require('./tailwind.brand.js');
 * module.exports = {
 *   ...brandConfig,
 *   // your other config
 * }
 *
 * Or use with spread:
 * module.exports = {
 *   theme: {
 *     extend: {
 *       ...brandConfig.theme.extend,
 *     }
 *   }
 * }
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        // Navy Scale
        navy: {
          dark: '#152d4a',
          DEFAULT: '#1E3A5F',
          light: '#2d4a6f',
          lighter: '#3d5a7f',
        },
        // Gray Scale (extends Tailwind slate)
        slate: {
          450: '#64748B', // Our "slate"
        },
        // Warm Neutrals
        warm: {
          cream: '#FAF9F7',
          beige: '#E8E4DE',
          stone: '#D4CDC4',
          taupe: '#A39E93',
          dark: '#78736A',
        },
        // Semantic aliases
        brand: {
          primary: '#1E3A5F',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
      },

      fontFamily: {
        heading: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      fontSize: {
        // Custom sizes matching brand scale
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        'label': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '600' }],
      },

      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.05em',
        wider: '0.1em',
      },

      borderRadius: {
        'brand': '0.75rem', // 12px - our default card radius
      },

      boxShadow: {
        'card': '0 2px 8px rgba(30, 58, 95, 0.08)',
        'card-hover': '0 8px 24px rgba(30, 58, 95, 0.12)',
      },

      spacing: {
        // Extends default Tailwind spacing
        '18': '4.5rem',
        '22': '5.5rem',
      },

      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
    },
  },

  plugins: [],
};
