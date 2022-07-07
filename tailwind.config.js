/** @type {import('tailwindcss').Config} */
module.exports = {

  daisyui: {
    themes: ["lemonade"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
