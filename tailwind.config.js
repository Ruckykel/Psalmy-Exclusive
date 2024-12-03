/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        extra: '0.2em',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
      scale: {
        '103': '1.03', 
        '102': '1.02',
        '101': '1.01',
      },
    },
  },
  plugins: [],
}

