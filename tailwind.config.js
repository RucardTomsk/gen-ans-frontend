/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loginBg: "rgb(2, 88, 150)"
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

