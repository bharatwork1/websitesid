/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a09',
        'brand-dark-2': '#111110',
        'brand-dark-3': '#1a1a18',
        'brand-gold': '#c9a44c',
        'brand-gold-light': '#e8c874',
        'brand-gold-dim': '#8a6f2e',
        'brand-text': '#f2efe9',
        'brand-muted': '#a09e97',
        'brand-border': '#2a2a27',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
};
