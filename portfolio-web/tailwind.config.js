const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-main": "#1A1A1A",
        "dark-sub": "#37474F",
        "light-main": "#E0E0E0",
        "light-sub": "#DEE4E7",
        "orange-dark": "#BC210F",
        "orange-mid": "#EC4913",
        "orange-light": "#E9560C",
        "green-dark": "#41DC80",
        "green-light": "#77FAB4",
        "blue-dark": "#0061A6",
        "blue-mid": "#0880CC",
        "blue-light": "#10A7FA",
        "pink-dark": "#FF1260",
      },
      height: {
        nav: "95.8%",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ["hover"],
    },
  },
  plugins: [],
};
