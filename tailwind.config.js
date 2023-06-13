/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        showContent: {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
            display: "none",
          },
          to: { transform: "translateX(0%)", opacity: "1", display: "flex" },
        },
        hideContent: {
          from: { transform: "translateX(0%)", opacity: "1" },
          to: { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        showContent: "showContent 1s linear forwards",
        hideContent: "hideContent 1s linear forwards",
      },
    },
  },
  plugins: [],
};
