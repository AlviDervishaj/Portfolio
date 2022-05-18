module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        screen: "100vw",
      },
      width: {
        github: "64px",
      },
      height: {
        github: "64px",
      },
      colors: {
        'body-dark': 'var(--body-background-dark)',
      },
      fontFamily: {
        'wotfard': ['Wotfard']
    },
      animation:{
        'spin-slow': 'spin 1.2s linear infinite'

    }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
