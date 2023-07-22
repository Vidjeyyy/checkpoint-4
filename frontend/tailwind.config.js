/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "system-ui", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
      dropShadow: {
        top: "0px -8px 16px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        primary: {
          50: "#CF2E79",
          70: "#454545",
          100: "#A5C444",
          800: "#FAF4FB",
          900: "#EBEBEB",
        },
        secondary: {
          600: "#439BCD",
        },
      },
    },
  },
  plugins: [],
};
