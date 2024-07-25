import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light", "dark", "retro",
      {
        mommy: {
          "primary": "#8c1e04",
          "secondary": "#fe9811",
          "accent": "#ffe39c",
          "neutral": "#fef0c1",
          "base-100": "#fff2e0",
          "info": "#fe9811",
          "success": "#a6ffbf",
          "warning": "#ffe38d",
          "error": "#ffc5b3",
        },
      },
    ],
  }
}
