/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        padding: '1rem',
        center: true,
      },
    },
    colors: {
      black: '#000',
      grey: '#aaa',
      'grey-2': '#EDEDED',
      'grey-3': '#A6A6A6',
    },
  },
  plugins: [],
};
