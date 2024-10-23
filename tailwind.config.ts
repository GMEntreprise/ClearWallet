import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(241, 61%, 55%)",
          foreground: "hsl(0, 0%, 100%)", // Texte blanc pour contraste
        },
        secondary: {
          DEFAULT: "hsl(210, 50%, 30%)", // Un bleu légèrement plus foncé pour les accents
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(210, 50%, 60%)", // Un bleu plus clair pour les éléments secondaires
          foreground: "hsl(0, 0%, 20%)", // Texte foncé
        },
        border: "hsl(210, 20%, 80%)", // Gris bleuâtre pour les bordures subtiles
        input: "hsl(210, 20%, 95%)", // Bleu très clair pour les arrière-plans
        ring: "hsl(210, 50%, 40%)", // Utiliser la couleur principale pour les anneaux
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
