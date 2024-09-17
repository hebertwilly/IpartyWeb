/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-principal': '#0B0A0A',
      },
      backgroundImage: {
        'banner-backgroud': "url('./src/assets/backgroundBanner.png')"
      }
    }
  },
  plugins: [],
}

