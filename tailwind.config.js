/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowy: "var(--my-yellow)",
        purpley: "var(--my-purple)",
        accenty: "var(--accent-color)",
      },
    },
  },
  plugins: [],
};
