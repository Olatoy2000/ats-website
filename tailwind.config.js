/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{jsx,ts,tsx}", "./src/**/*.{jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sm: "0px 4px 12px 1px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        light: {
          antiFlashWhite: "#F2F2F2",
          internationalOrange: "#C81107",
          darkSilver: "#6F6F70",
          completeBlack: "#000000",
        },
        bold: {
          japaneseIndigo: "#2D3748",
          blackOlive: "#3C3C3C",
          maastrichtBlue: "#352B0F",
        },
      },
    },
  },
  plugins: [],
};
