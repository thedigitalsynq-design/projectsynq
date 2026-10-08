/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#07080B',
          deep: '#040507',
          card: '#0C0E14',
          subtle: '#121620',
        },
        surface: {
          50: '#1A202C',
          100: '#141822',
          200: '#0E121A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(0, 240, 255, 0.25)',
        },
        accent: {
          cyan: '#00F0FF',
          blue: '#3B82F6',
          lime: '#00F0FF',
          glow: 'rgba(0, 240, 255, 0.15)',
        },
        synq: {
          text: '#F8FAFC',
          muted: '#94A3B8',
          dim: '#64748B',
          dark: '#334155',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-dash': 'flowDash 20s linear infinite',
        'glow-spin': 'spin 30s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        flowDash: {
          to: { strokeDashoffset: '-1000' },
        }
      }
    },
  },
  plugins: [],
}
