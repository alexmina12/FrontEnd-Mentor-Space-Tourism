/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#d0d6f9",
        tertiary: "#ffffff",
        half_white: "rgba(255, 255, 255, 0.5)",
        shadow_white: "rgba(255,255,255, 0.1)",
      },
      backgroundImage: {
        "home-desktop": "url('./assets/home/background-home-desktop.jpg')",
        "destination-desktop":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "crew-desktop": "url('./assets/crew/background-crew-desktop.jpg')",
        "technology-desktop":
          "url('./assets/technology/background-technology-desktop.jpg')",
        "home-mobile": "url('./assets/home/background-home-mobile.jpg')",
        "destination-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "technology-mobile":
          "url('./assets/technology/background-technology-mobile.jpg')",
        "home-tablet": "url('./assets/home/background-home-tablet.jpg')",
        "destination-tablet":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "crew-tablet": "url('./assets/crew/background-crew-tablet.jpg')",
        "technology-tablet":
          "url('./assets/technology/background-technology-tablet.jpg')",
      },
      screens: {
        mobile: { max: "767px" },
        tablet: { min: "768px", max: "1366px" },
        lg: "1024px",
      },
      keyframes: {
        "crew-slider": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
