import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0f",
        foreground: "#f5f5f5",
        card: "#1e1e1e",
        "card-border": "#333333",
        accent: "#4b5563"
      },
      boxShadow: {
        soft: "0 20px 40px rgba(0,0,0,0.25)"
      },
      animation: {
        "rain-fall": "rainFall 3.2s linear infinite",
        "hero-float": "float 8s ease-in-out infinite",
        "hero-orbit": "orbit 18s linear infinite",
        "hero-fade": "fadeSlide 1s ease-out forwards"
      },
      keyframes: {
        rainFall: {
          "0%": { transform: "translateY(-120vh)", opacity: "0" },
          "20%": { opacity: "0.4" },
          "80%": { opacity: "0.2" },
          "100%": { transform: "translateY(120vh)", opacity: "0" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "100%": { transform: "rotate(360deg) translateX(0)" }
        },
        fadeSlide: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;

