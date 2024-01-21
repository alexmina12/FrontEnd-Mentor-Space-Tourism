/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#d0d6f9",
        tertiary: "#ffffff",
      },
      backgroundImage: {
        "home-desktop": "url('./src/assets/home/background-home-desktop.jpg')",
        "destination-desktop":
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        "crew-desktop": "url('./src/assets/crew/background-crew-desktop.jpg')",
        "technology-desktop":
          "url('./src/assets/technology/background-technology-desktop.jpg')",
      },
      // fontFamily: {
      //   belle: ["Bellefair Regular", "serif"],
      //   barl: ["Barlow Condensed Regular", "serif"],
      // },
      // fontSize: {
      //   h1: "150px",
      //   h2: "100px",
      //   h3: "56px",
      //   h4: "32px",
      //   h5: "28px",
      // },
    },
  },
  plugins: [],
};
