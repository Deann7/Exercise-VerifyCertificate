/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white_1: "#FAFAFA",
				white_2: "#F5F5F5",
				gray_1: "#D9D9D9",
				gray_2: "#BFC8CE",
				gray_3: "#889DA8",
				blue_1: "#2B7696",
				blue_2: "#1C465C",
				blue_3: "#15394A",
				blue_4: "#0D2734",
				purple_1: "#E2E0E8",
				purple_2: "#9D98B3",
				purple_3: "#645B87",
				purple_4: "#55457E",
				purple_5: "#383F96",
				green_yellow: "#D9E05A",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in",
        slideUp: "slideUp 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        fadeOut: "fadeOut 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
