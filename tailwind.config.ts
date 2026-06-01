import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",
        secondary: "#0F172A",
        accent: "#22D3EE",
        ink: "#020617"
      },
      boxShadow: {
        glow: "0 0 60px rgba(6, 182, 212, 0.35)",
        panel: "0 20px 80px rgba(2, 6, 23, 0.45)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(34,211,238,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.08) 1px, transparent 1px)",
        radial: "radial-gradient(circle at 20% 20%, rgba(34,211,238,.24), transparent 32%), radial-gradient(circle at 80% 10%, rgba(6,182,212,.18), transparent 28%)"
      },
      keyframes: {
        trace: { "0%": { strokeDashoffset: "620" }, "100%": { strokeDashoffset: "0" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } }
      },
      animation: {
        trace: "trace 5s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: [forms]
};
export default config;
