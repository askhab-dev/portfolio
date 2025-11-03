/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        ring: "var(--color-ring)",
        card: "var(--color-card)",
        'card-foreground': "var(--color-card-foreground)",
        popover: "var(--color-popover)",
        'popover-foreground': "var(--color-popover-foreground)",
        primary: "var(--color-primary)",
        'primary-foreground': "var(--color-primary-foreground)",
        secondary: "var(--color-secondary)",
        'secondary-foreground': "var(--color-secondary-foreground)",
        muted: "var(--color-muted)",
        'muted-foreground': "var(--color-muted-foreground)",
        accent: "var(--color-accent)",
        'accent-foreground': "var(--color-accent-foreground)",
        destructive: "var(--color-destructive)",
        'destructive-foreground': "var(--color-destructive-foreground)",
        input: "var(--color-input)",
        'input-background': "var(--color-input-background)",
        'switch-background': "var(--color-switch-background)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      outlineColor: {
        ring: "var(--color-ring)",
      }
    },
  },
  plugins: [],
}