/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#001219",
        secondary: "#B3D7FF"
      }
    },
    fontFamily: {
      Roboto : ["Roboto","san-serif"],
      Lato: ["Lato","san-serif"]
    }
  
  },
  plugins: [],
}