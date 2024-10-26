/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0070f3',
        'secondary': '#00f',
        'blackBG': '#F3F3F3',
        'favorite': 'green',
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Nunito Sans', 'serif'],
      },
    },
  },
  plugins: [],
}

