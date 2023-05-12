module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Alexandria" /* "Orbitron", */,
      secondary: "Alexandria",
      tertiary: "Alexandria",
    },
    container: {
      padding: {
        DEFAULT: "0px",
      },
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        hero: "url('./assets/_IMG_23811.jpeg')",
      },
    },
  },
  plugins: [],
};
