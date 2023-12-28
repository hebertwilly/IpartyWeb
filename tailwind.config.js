/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-principal': '#090808',
      },
      backgroundImage: {
        'banner-backgroud': "url('./src/assets/backgroundBanner.png')"
      }
    }
  },
  plugins: [],
}

