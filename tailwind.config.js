/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // fontFamily: {
      //   Poppins: ['Montserrat', 'sans-serif'],
      // },
      backgroundColor: {
        'bodybcg': 'rgb(233, 227, 227',
      },
      boxShadow: {
        'bs': '0px 8px 16px rgba(0, 0, 0, 0.2)'
      },
    },
  },
  plugins: [],
}

