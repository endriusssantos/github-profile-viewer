import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: "#005CFF",
        lightGray: "#D9D9D9",
      },
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
