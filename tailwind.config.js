/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          xs: '1rem',
          md: '2rem',
        },
        screens:{
          'xs': '480px',
          'lg': '1100px',
        }
      },
    },
  },
  plugins: [],
};
