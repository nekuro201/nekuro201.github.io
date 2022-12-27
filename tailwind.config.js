/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        baumans: 'Baumans, cursive',
      },

      backgroundImage: {
        app: 'url(/bg-default.png)',
      },
      
      colors: {
        black: {
          700: '#161616',
        }
      },
    },
  },
  plugins: [],
}
