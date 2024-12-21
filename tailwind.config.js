/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color-maintheme)",
        primaryHover: "var(--primary-color-maintheme-hover)",
        secondary: "var(--secondary-color-light)",
        highlight: "var(--highlight-color)",
        secondaryText: "var(--secondary-color-text)",
        secondaryTheme: "var(--primary-color-secondarytheme)",
        secondaryThemeHover: "var(--primary-color-secondarytheme-hover)",
      },
    },
  },
  plugins: [],
};
