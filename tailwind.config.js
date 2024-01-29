/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
         propel: {
          '100%': { transform: 'translateY(0)',opacity:'1' },
          '80%': { transform: 'translateY(25%)',opacity:'0.9' },
          '50%': { transform: 'translateY(35%)',opacity:'0.6' },
          '20%': { transform: 'translateY(55%)',opacity:'0.3' },
          '0%': { transform: 'translateY(105%)',opacity:'0' },
        },
      },
    },
  },
  plugins: [],
}