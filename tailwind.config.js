/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "linear-gradient(138.2deg, rgba(255, 255, 255, 0.15) 15.11%, rgba(86, 227, 159, 0.15) 35.12%, rgba(218, 134, 115, 0.15) 47.59%, rgba(249, 112, 104, 0.15) 55.78%, rgba(242, 154, 94, 0.15) 66.63%, rgba(237, 180, 88, 0.15) 75.17%, rgba(214, 172, 100, 0.15) 83.12%, rgba(39, 111, 191, 0.15) 99.7%), #FFFFFF",
      },
      colors: {
        'purple': "#9747FF",
        'green': "#56E39F",
        'dark': "#545454",
        'hover-purple': "#C599FF",
        'gray': "#ECECEC",
        'red': "#FF6363"
      },
      boxShadow: {
        'motivaa-shadow': "0px 100px 80px rgba(0, 0, 0, 0.0209047), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.03), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.0390953), 0px 4.5288px 3.62304px rgba(0, 0, 0, 0.06)"
      }
    },
  },
  plugins: [],
}

