/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "gray-blue": "#9BABB8",
        "oatmeal": "#EEE3CB",
        "brown": "#D7C0AE",
        "dark-brown": "#967E76"
      },
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}