import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.938rem",
      },
    },
    extend: {
      fontSize: {
        none: ["0", "0"],
        hero: ["3.5rem", { lineHeight: "4rem", letterSpacing: "0" }],
        h1: ["4rem", { lineHeight: "5rem", letterSpacing: "0" }], //64/80
        h2: ["3rem", { lineHeight: "3.5rem", letterSpacing: "0" }], //48/56
        h3: ["2.25rem", { lineHeight: "3rem", letterSpacing: "0" }], //36/48
        h4: ["1.875rem", { lineHeight: "2.5rem", letterSpacing: "0" }], //30/40
        h5: ["1.5rem", { lineHeight: "2rem", letterSpacing: "0" }], //24/32
        h6: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0" }], //20/28
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0" }], // 16/24
        base2: ["0.875rem", { lineHeight: "1.375rem", letterSpacing: "0" }], // 14/22
        caption: ["0.625rem", { lineHeight: "1rem", letterSpacing: "0" }], // 10/16
      },
      letterSpacing: {
        4: "0.04em", // -4%
        3: "0.03em", // -3%
        2: "0.02em", // -2%
        1: "0.01em", // -1%
      },
      lineHeight: {
        0: "0",
      },
      colors: {
        // https://uicolors.app/create
        primary: {
          50: "#eff5ff",
          100: "#dbe8fe",
          200: "#bfd7fe",
          300: "#93bbfd",
          400: "#609afa",
          500: "#3b82f6",
          600: "#2570eb",
          700: "#1d64d8",
          800: "#1e55af",
          900: "#1e478a",
          950: "#172e54",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "#fdfbf6",
          100: "#fbf7ed",
          200: "#f5ead3",
          300: "#eedeb8",
          400: "#e2c583",
          500: "#d5ac4e",
          600: "#c09b46",
          700: "#a0813b",
          800: "#80672f",
          900: "#685426",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
    plugins: [],
  },
};
export default config;
