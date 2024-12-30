import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF1B6B',
          dark: '#D1004F',
        },
        secondary: {
          DEFAULT: '#FFA07A',
          dark: '#E67E5C',
        },
        tertiary: {
          DEFAULT: '#40E0D0',
          dark: '#2CB3A5',
        },
        foreground: {
          DEFAULT: 'var(--foreground)'
        },
        'brand-blue': {
          100: 'var(--brand-blue-100)',
          200: 'var(--brand-blue-200)',
          300: 'var(--brand-blue-300)',
          400: 'var(--brand-blue-400)',
          500: 'var(--brand-blue-500)',
          600: 'var(--brand-blue-600)',
          700: 'var(--brand-blue-700)',
          800: 'var(--brand-blue-800)',
          900: 'var(--brand-blue-900)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(3deg)',
          },
          '75%': {
            transform: 'rotate(-3deg)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config

