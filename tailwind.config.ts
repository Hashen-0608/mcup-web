import type { Config } from "tailwindcss";

// 品牌色定義成 token：橘黃(primary)×科技藍(secondary)×白(底)。禁止散落 hex。
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F59E0B",
          50: "#FFF8EB",
          100: "#FEEFC7",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        secondary: {
          DEFAULT: "#1E5F9E",
          50: "#EEF4FB",
          100: "#D6E4F5",
          500: "#1E5F9E",
          600: "#184E82",
          700: "#123A61",
        },
        ink: "#1F2A44",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
