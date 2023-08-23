/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./page/**/*.{js,ts,jsx,tsx}",
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
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
        },
      })
      addComponents({
        // '.card': {
        //   backgroundColor: theme('colors.white'),
        //   borderRadius: theme('borderRadius.lg'),
        //   padding: theme('spacing.6'),
        //   boxShadow: theme('boxShadow.xl'),
        // },
        
        // '.btn': {
        //   padding: '.5rem 1rem',
        //   borderRadius: '.25rem',
        //   fontWeight: '600',
        // },
        // '.btn-blue': {
        //   backgroundColor: '#3490dc',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#2779bd'
        //   },
        // },
        // '.btn-red': {
        //   backgroundColor: '#e3342f',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#cc1f1a'
        //   },
        // },
      })
      // addUtilities({
      //   '.content-auto': {
      //     contentVisibility: 'auto',
      //   }
      // })
    })
  ],
}