/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        actions: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
      },
      fontFamily: {
        NunitoSans: ["NunitoSans", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background)/<alpha-value>)",
        card: "hsl(var(--card)/<alpha-value>)",
        disabled: "hsl(var(--disabled)/<alpha-value>)",
        border: "hsl(var(--border)/<alpha-value>)",
        "border-active": "hsl(var(--border-active)/<alpha-value>)",
        "destructive-fg": "hsl(var(--destructive-fg)/<alpha-value>)",
        destructive: "hsl(var(--destructive)/<alpha-value>)",
        primary: "hsl(var(--primary)/<alpha-value>)",
        "primary-fg": "hsl(var(--primary-fg)/<alpha-value>)",
        accent: "hsl(var(--accent)/<alpha-value>)",
      },
      animation: {
        "pulse-slower": "pulse-slower 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        levitate: "levitate 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-variation":
          "pulse-variation 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-slower": {
          "50%": { opacity: 0.5, transform: "translateY(30px)" },
        },
        "pulse-variation": {
          "0%, 100%": { opacity: 0, transform: "translateY(-10px)" },
          "50%": { opacity: 0.5, transform: "translateY(30px)" },
        },
        levitate: {
          "50%": { opacity: 0.2, transform: "translateY(-30px)" },
        },
      },
    },
  },
  plugins: [],
};
