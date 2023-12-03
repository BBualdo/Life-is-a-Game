/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./shadcn/**/*.{ts,tsx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", ,],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "cp-cyan": "#00f0ff",
        "cp-red": "#ef4444",
        "cp-red-hover": "#eb5e5e",
        "cp-yellow": "#fcee0a",
        "cp-pink": "#d600ff",
        "light-silver": "#ccdaf0",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
