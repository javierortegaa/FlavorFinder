/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FEF3E2",
        accent: "#FAB12F",
        primary: "#FA812F",
        danger: "#FA4032",
      },
    },
  },
  plugins: [],
};
