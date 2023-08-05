/** @type {import('tailwindcss').Config} */

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
        "navy": "#35155D",
        "purple": "#512B81",
        "blue": "#4477CE",
        "light-blue": "#8CABFF"
      },
      fontFamily: {
        Reenie: ["Reenie", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        Carter: ["Carter", "sans-serif"]
      },
    },
  },
  plugins: [],
}