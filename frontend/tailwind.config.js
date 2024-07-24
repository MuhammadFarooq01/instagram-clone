/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-medium": "#7F7F7F",
        "blue-primary-hover": "#1877F2",
        "blue-light": "#4BB4F8",
        "blue-primary": "#0095f6",
        "blue-dark": "#385185",
        "gray-light": "#DBDBDB",
      },
      fontFamily: {
        instagram: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      screens: {
        cbp935: "935px",
      },
    },
  },
  plugins: [],
};
