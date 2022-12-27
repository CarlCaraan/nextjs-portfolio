/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        grayDark: "#101010",
        grayLight: "#333333",
        grayLighter: "#515151",
        grayLightest: "#cccccc",
        violet: "#7456AF",
        panel: "#f1f1f1",
      },
    },
    // All Fonts
    fontFamily: {
      sans: ["Graphik Regular", "sans-serif"],
      sansSB: ["Graphik Semibold", "sans-serif"],
      sansB: ["Graphik Bold", "sans-serif"],
      serif: ["Amiri", "sans-serif"],
      linksR: ["Poppins Regular", "sans-serif"],
      linksL: ["Poppins Light", "sans-serif"],
      linksSB: ["Poppins SemiBold", "sans-serif"],
      linksB: ["Poppins ExtraBold", "sans-serif"],
    },
  },
  plugins: [],
};
