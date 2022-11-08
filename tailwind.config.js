/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cultured: "#F8F8F8",
        "eerie-black": "#191D1E",
        "kelly-green": "#31BD1A",
      },
    },
  },
  plugins: [],
};
