const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lexend: "Lexend Deca, sans-serif",
      shoulders: "Big Shoulders Display, cursive",
      quicksand: "Quicksand, sans-serif",
    },
    extend: {
      spacing: {
        '22': '85px',
      },
      colors: {
        orange: "hsl(31, 77%, 52%)",
        "dark-cayan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "very-light-gray": "hsl(0, 0%, 95%)",
        "white-tarns": "hsla(0, 0%, 100%, 0.75)",
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
