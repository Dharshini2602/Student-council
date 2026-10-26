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
          900: 'var(--color-primary-900)',
          800: 'var(--color-primary-800)',
          700: 'var(--color-primary-700)',
          600: 'var(--color-primary-600)',
          100: 'var(--color-primary-100)',
          50:  'var(--color-primary-50)',
          DEFAULT: 'var(--color-primary-700)',
        },
        accent: {
          700: 'var(--color-accent-700)',
          600: 'var(--color-accent-600)',
          100: 'var(--color-accent-100)',
          DEFAULT: 'var(--color-accent-600)',
        },
        surface: 'var(--color-surface)',
        border: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
        },
        'text-base': 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-on-dark': 'var(--color-text-on-dark)',
        'text-on-dark-muted': 'var(--color-text-on-dark-muted)',
        feedback: {
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
          info: 'var(--color-info)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        '1': 'var(--shadow-1)',
        '2': 'var(--shadow-2)',
      },
      spacing: {
        '4.5': '1.125rem',
      },
      maxWidth: {
        'reading': '720px',
        '7xl': '1280px',
      },
    },
  },
  plugins: [],
}
