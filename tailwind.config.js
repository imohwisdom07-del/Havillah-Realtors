/** @type {import('tailwindcss').Config} */

/*
 * HAVILLAH REALTORS — BRAND SYSTEM
 * ─────────────────────────────────────────────────────────────────────────────
 * PALETTE RATIONALE: "Old Growth / Lagos Prestige"
 *
 * We deliberately rejected Navy/Gold (overused in Nigerian real estate).
 * Instead: Deep Forest Green (#1C3B2A) reads as established wealth — the
 * colour of old money, private clubs, and premium banking. Paired with
 * Warm Stone (#E8E0D5) it creates the Sotheby's / Christie's feel the
 * client needs. Terracotta (#C4714A) is the Lagos accent — warm, confident,
 * African modern. It replaces gold without looking cheap.
 *
 * TYPOGRAPHY: Playfair Display (editorial, architectural) + DM Sans (clean,
 * legible at 3G speeds). This pairing is used by Savills, JLL, and Knight Frank.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary — Deep Forest Green
        forest: {
          50:  '#EDF4EF',
          100: '#C8DDD0',
          200: '#A3C5B0',
          300: '#7DAD90',
          400: '#569670',
          500: '#2E7E50',
          600: '#1C5C36',
          700: '#1C3B2A',   // ← main brand
          800: '#122718',
          900: '#091408',
        },
        // Accent — Terracotta (Lagos warmth, replaces gold)
        terra: {
          50:  '#FBF2EC',
          100: '#F3D9C8',
          200: '#E9BEA2',
          300: '#DEA27B',
          400: '#D48656',
          500: '#C4714A',   // ← main accent
          600: '#A55A37',
          700: '#844528',
          800: '#63301B',
          900: '#421C0E',
        },
        // Neutral — Warm Stone
        stone: {
          50:  '#FAFAF8',
          100: '#F5F2EE',
          200: '#EDE8E0',
          300: '#E0D8CC',
          400: '#C8BFB0',
          500: '#ADA399',
          DEFAULT: '#E8E0D5', // canvas / section backgrounds
          600: '#8A8178',
          700: '#6B6460',
          800: '#3D3A36',
          900: '#1F1D1A',
        },
        // Charcoal — ink
        ink:     '#18160F',
        parchment: '#F7F3EC',
      },

      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'hero':    ['clamp(2.6rem, 7vw, 5.2rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.8rem, 4vw, 3rem)',   { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'card-h':  ['clamp(1.1rem, 2vw, 1.35rem)',{ lineHeight: '1.25' }],
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },

      borderRadius: {
        'xl2': '1rem',
        'xl3': '1.5rem',
      },

      boxShadow: {
        'luxury':    '0 6px 32px rgba(28, 59, 42, 0.10)',
        'luxury-lg': '0 20px 60px rgba(28, 59, 42, 0.15)',
        'card':      '0 4px 20px rgba(28, 59, 42, 0.08)',
        'card-hover':'0 16px 48px rgba(28, 59, 42, 0.16)',
        'terra':     '0 6px 24px rgba(196, 113, 74, 0.25)',
      },

      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #1C3B2A 0%, #2E7E50 100%)',
        'hero-overlay':    'linear-gradient(90deg, rgba(28,59,42,0.94) 0%, rgba(28,59,42,0.75) 55%, rgba(28,59,42,0.2) 100%)',
        'terra-gradient':  'linear-gradient(135deg, #C4714A 0%, #D48656 100%)',
        'parchment-fade':  'linear-gradient(180deg, #F7F3EC 0%, #EDE8E0 100%)',
      },

      keyframes: {
        pulsePrice: {
          '0%, 100%': { color: '#C4714A', textShadow: '0 0 0px transparent' },
          '50%':      { color: '#D48656', textShadow: '0 0 24px rgba(196,113,74,0.6)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-800px 0' },
          '100%': { backgroundPosition: '800px 0' },
        },
      },

      animation: {
        'pulse-price': 'pulsePrice 1.8s ease-in-out infinite',
        'slide-up':    'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee':     'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
