/** @type {import('tailwindcss').Config} */

const MyTheme = {
  colors: {
    primary: "#fff",
    secondary: "#F34A08",
    background: "#060E20",
  },
  fonts: {
    primary: "Cairo"
  }
};
export default {
  content: [
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: MyTheme.colors.primary,
        secondary: MyTheme.colors.secondary,
        background: MyTheme.colors.background,
      },
      fontFamily: {
        cairo: MyTheme.fonts.primary,
      }
    },
  },
  plugins: [],
}

