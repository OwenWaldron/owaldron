/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-gray': '#919197',
        'header-accent-gray': '#A8A8A8',
        'owaldron-bg': '#78777D',
        'owaldron-blue': '#01569C',
        'card-gray': '#ACACAC',
        'card-border-gray': '#999999'
      }
    },
  },
  plugins: [],
}

