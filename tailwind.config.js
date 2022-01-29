const defaultColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Mono", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    colors: {
      ...defaultColors,
      primary: "hsl(172, 67%, 45%)",
      veryDark: "hsl(183, 100%, 15%)",
      darkGrayish: "hsl(186, 14%, 43%)",
      darkGrayish2: "hsl(184, 14%, 56%)",
      lightGrayish: "hsl(185, 41%, 84%)",
      lightGrayish2: "hsl(189, 41%, 97%)",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
