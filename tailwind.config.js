module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "other":{'min': '340px','max':'1280px'},
      },
      colors: {
        darkbg: "#1e293b",
        blue: {
          850: '#1234ds'
        }
      }
    },
  },
  plugins: [],
}