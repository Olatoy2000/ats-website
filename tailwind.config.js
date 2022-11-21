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
          eerieBlack: "#1B1B1B",
          metallicGreen: "#3D7500",
          gray: "#7C827D",
          butBag: "linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
          quickSilver: "#A29F9F",
          dimGray: "#656C6C",
        },
        semiBold: {
          chineseSilver: "#C9C8C6",
        },
        bold: {
          japaneseIndigo: "#2D3748",
          blackOlive: "#3C3C3C",
          maastrichtBlue: "#352B0F",
          eerieBlack: "#1B1B1B",
          jet: "#343434",
          malachite: "#00FF38",
          darkCharcoal: "#313131",
        },
        semiBold: {
          gostWhite: "#F9FAFB",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
