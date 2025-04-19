// tailwind.config.js

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // 👈 esto es obligatorio
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}