/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFF8F8',
        primary1: '#FF5777',
        primary2: '#13CDC0',
        blue1: "#5794C8",
        blue2: '#E6F4FF',
        yellow1: "#FFB14A",
        yellow2: '#FFF1E1',
        light: '#F8FAFB',
        black1: '#1B1B1D',
        black2: '#414244',
        gray1: '#A9ABAE'

      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

