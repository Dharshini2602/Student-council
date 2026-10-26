/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#173A7A',
          dark: '#0f2753',
          light: '#2352a8',
        },
        secondary: {
          DEFAULT: '#4C963B',
          dark: '#3c792e',
          light: '#5cb347',
        },
        navy: {
          DEFAULT: '#0B1730',
          dark: '#060d1b',
          light: '#132448',
        },
        'light-bg': '#F7F9FC',
        'light-blue': '#EAF0FA',
        'body-text': '#1F2937',
        'muted-text': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
      },
      backgroundImage: {
        'dot-texture': 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
        'dot-texture-dark': 'radial-gradient(circle, rgba(23, 58, 122, 0.15) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-size': '24px 24px',
      },
    },
  },
  plugins: [],
}
