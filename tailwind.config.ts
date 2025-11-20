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
        "rain-fall": "rainFall 3.2s linear infinite"
      },
      keyframes: {
        rainFall: {
          "0%": { transform: "translateY(-120vh)", opacity: "0" },
          "20%": { opacity: "0.4" },
          "80%": { opacity: "0.2" },
          "100%": { transform: "translateY(120vh)", opacity: "0" }
        }
      }
    }
  },
  plugins: []
};

export default config;

