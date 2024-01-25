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
      },
      screens: {
        mobile: { max: "767px" },
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
