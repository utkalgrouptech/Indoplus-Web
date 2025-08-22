
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Layouts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          themeColor:"#F07621",
          themeColorTwo:"#fff2c5"
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

