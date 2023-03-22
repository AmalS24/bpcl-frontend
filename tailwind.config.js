/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // darkMode: 'none',
  theme: {
    extend: {
      colors: {
        "light-blue": "#02E5FF",
        blue: "#53BCDF",
        sphere: "#0BDBFE",
        primary: "#0E0D46"
      },
    },
  },
  plugins: [],
};
