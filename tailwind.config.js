/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4C6E93", // lighter
          200: "#3D5D7E", // lighter
          300: "#355567", // moderate
          400: "#2F4D77", // base color (you provided this)
          500: "#2A4567", // slightly darker
          600: "#253C5C", // darker
          700: "#1E3351", // darker
          800: "#172C46", // very dark
          900: "#10243B", // darkest
        },
      },
      lineHeight: {
        // relaxed: "1.5",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "emerald", "winter"],
  },
};
