/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        rad: '3rem'
      },
      width: {
        wid: '404px'
      },
      colors: {
        Gray: '#D9D9D9',
        Green: '#3A5B22',
        link: '#0F3DDE'
      }
    },
  },
  plugins: [],
}

