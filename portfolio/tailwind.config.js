/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        yellowBrand: "#facc15",
        darkBg: "#0b0b0b"
      }
    }
  },
  plugins: []
}