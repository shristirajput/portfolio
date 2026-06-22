module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0A0E17",
          section: "#0F141E",
          card: "#171D2D",
          border: "#2A3143",
        },
        neon: {
          purple: "#6D28D9",
          blue: "#3B82F6",
          green: "#10B981",
          glow: "rgba(109, 40, 217, 0.2)",
        },
        text: {
          primary: "#F3F4F6",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(109, 40, 217, 0.3), 0 0 30px rgba(109, 40, 217, 0.1)" },
          "50%": { boxShadow: "0 0 25px rgba(109, 40, 217, 0.5), 0 0 50px rgba(109, 40, 217, 0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": { opacity: "0" },
          "0.1%": { opacity: "1" },
          "50%": { opacity: "1" },
          "50.1%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        pulseGreen: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        }
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        typewriter: "typewriter 2s steps(40) forwards",
        blink: "blink 1s step-end infinite",
        pulseGreen: "pulseGreen 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
