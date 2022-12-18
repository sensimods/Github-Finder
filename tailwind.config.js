/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['halloween', 'valentine', 'cupcake', 'cmyk'],
  },
  plugins: [require('daisyui')],
}

