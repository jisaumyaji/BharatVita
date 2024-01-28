/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: ' 0% { transform: translateY(0)} 100% { transform: translateY(-100vh)}',
      }
    },
  },
  plugins: [],
}