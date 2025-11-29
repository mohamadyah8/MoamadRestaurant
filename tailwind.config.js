/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        restaurant: {
          bg: "#0b0b10", // dunkler Hintergrund
          accent: "#eab308", // warmes Gelb (wie Licht)
          card: "#18181b", // dunkles Grau für Karten
        },
      },
    },
  },
  plugins: [],
};
