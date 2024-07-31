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
    },
  },
  plugins: [],
};
