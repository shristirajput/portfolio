module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#1a1525",
          section: "#211930",
          card: "#2b1f3e",
          border: "#3d2d55",
        },
        rose: {
          accent: "#c4728a",
          light: "#e8a4b8",
          soft: "#f5d0de",
          glow: "rgba(196,114,138,0.25)",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Playfair Display'", "serif"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(196,114,138,0.4), 0 0 40px rgba(196,114,138,0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(196,114,138,0.6), 0 0 60px rgba(196,114,138,0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        blob: "blob 8s infinite",
      },
    },
  },
  plugins: [],
};
