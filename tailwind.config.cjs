/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#04152d",
        black2: "#041226",
        black3: "#020c1b",
        blackLighter: "#1c4b91",
        blackLight: "#173d77",
        pink: "#ef3b16",
        orange: "#c43921",
        gradient: "linear-gradient(98.37deg, #c43921 0.99%, #ef3b16 100%)",
      },
    },
  },
  plugins: [],
};
