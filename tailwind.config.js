/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
