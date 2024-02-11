/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      primary : "Poppins"
    },
    extend: {
      colors : {
        main : "#151515",
      }
    },
  },
  plugins: [],
}