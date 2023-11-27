/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(4, 102, 200, 1)",
        primary100: "rgba(202, 221, 241, 1)",
        primaryLight: "rgba(103, 162, 220, 1)",
        secondary: "rgba(112, 116, 128, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
