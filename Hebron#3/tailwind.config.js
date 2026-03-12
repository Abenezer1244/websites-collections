/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        sand: "#F5F2EB",
        stone: "#E6E2DA",
        rock: "#2D2A26",
        clay: "#A67C52",
      },
      fontFamily: {
        serif: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [],
};
