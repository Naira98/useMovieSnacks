// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class', // or 'media'
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--bg': '#FAF3E0',
          '--text': '#222222',
          '--primary': '#E74C3C',
          '--accent': '#9B59B6',
        },
        '.dark': {
          '--bg': '#121212',
          '--text': '#FFFFFF',
          '--primary': '#C0392B',
          '--accent': '#6C3483',
        },
      });
    }),
  ],
};
