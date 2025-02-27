/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./MainNav.css",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      rotate: {
        'x-180': 'rotateX(180deg)',
      },
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
}