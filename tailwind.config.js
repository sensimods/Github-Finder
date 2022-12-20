/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['halloween', 'dracula', 'forest', 'valentine', 'cupcake', 'cmyk'],
  },
  plugins: [require('daisyui')],
}

