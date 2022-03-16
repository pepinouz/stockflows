module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          full: "#22306a",
          light: "#58638f",
        },
        "heading-primary": "#22306a",
        "sidebar-items" : "#22306a"
      },
      fontFamily: {
        main: ['Inter']
      }
    },
  },
  plugins: [],
};
