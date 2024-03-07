const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      yellow: "hsl(47, 88%, 63%)",
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 50%)",
      black: "hsl(0, 0%, 7%)",
    },
    fontFamily: {
      figtree: ["Figtree", ...defaultTheme.fontFamily.sans],
    },
    boxShadow: {
      card: "7px 7px black",
    },
  },
};
