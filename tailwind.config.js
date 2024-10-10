/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'cs': '1400px',
        'xs': '576px'
      },
    },
  },
  plugins: [],
}
