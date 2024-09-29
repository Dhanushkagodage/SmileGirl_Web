/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ReggaeOne: ['Reggae One', 'cursive'],
      },
      colors: {
        'custom-pink': '#FF018D',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '5rem',
          xs: '1rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}