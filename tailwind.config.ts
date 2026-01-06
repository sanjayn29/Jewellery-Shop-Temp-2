import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
        },
        amber: "hsl(var(--amber))",
        orange: "hsl(var(--orange))",
        yellow: "hsl(var(--yellow))",
        ruby: {
          DEFAULT: "hsl(var(--ruby))",
          light: "hsl(var(--ruby-light))",
          dark: "hsl(var(--ruby-dark))",
        },
        crimson: "hsl(var(--crimson))",
        burgundy: "hsl(var(--burgundy))",
        platinum: "hsl(var(--platinum))",
        silver: "hsl(var(--silver))",
        diamond: "hsl(var(--diamond))",
        emerald: "hsl(var(--emerald))",
        sapphire: "hsl(var(--sapphire))",
        ruby: "hsl(var(--ruby))",
        ivory: "hsl(var(--ivory))",
        cream: "hsl(var(--cream))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "diamond-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--gold) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--gold) / 0.5)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        "liquid-gold": {
          "0%, 100%": { transform: "translateX(-50%) scaleX(1)" },
          "50%": { transform: "translateX(-50%) scaleX(1.2)" },
        },
        "shine": {
          "0%": { left: "-100%" },
          "100%": { left: "200%" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "gold-wave": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-slow": "fade-in-slow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 3s linear infinite",
        "sparkle": "sparkle 2s ease-in-out infinite",
        "diamond-rotate": "diamond-rotate 8s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "draw-line": "draw-line 2s ease-out forwards",
        "liquid-gold": "liquid-gold 4s ease-in-out infinite",
        "shine": "shine 3s ease-in-out infinite",
        "twinkle": "twinkle 1.5s ease-in-out infinite",
        "gold-wave": "gold-wave 8s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
        "gradient-ruby": "linear-gradient(135deg, hsl(var(--ruby)), hsl(var(--ruby-light)))",
        "gradient-amber": "linear-gradient(135deg, hsl(var(--amber)), hsl(var(--gold)))",
        "gradient-festive": "linear-gradient(135deg, hsl(var(--yellow)), hsl(var(--gold)), hsl(var(--amber)))",
        "gradient-shimmer": "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.4), transparent)",
        "gradient-glass": "linear-gradient(135deg, hsl(0, 0%, 95% / 0.4), hsl(0, 0%, 90% / 0.3))",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-white-gold": "linear-gradient(135deg, hsl(30, 10%, 92%), hsl(30, 15%, 88%))",
        "gradient-elegant": "linear-gradient(135deg, hsl(30, 10%, 92%), hsl(30, 15%, 88%))",
        "gradient-silver": "linear-gradient(135deg, hsl(210, 10%, 80%), hsl(210, 10%, 88%))",
      },
      boxShadow: {
        "gold": "0 8px 40px hsl(var(--gold) / 0.25)",
        "gold-lg": "0 12px 60px hsl(var(--gold) / 0.3)",
        "amber": "0 8px 40px hsl(var(--amber) / 0.25)",
        "amber-lg": "0 12px 60px hsl(var(--amber) / 0.3)",
        "ruby": "0 8px 40px hsl(var(--ruby) / 0.15)",
        "ruby-lg": "0 12px 60px hsl(var(--ruby) / 0.2)",
        "elegant": "0 12px 60px hsl(30, 5%, 15% / 0.12)",
        "glow": "0 0 50px hsl(var(--gold) / 0.3)",
        "inner-gold": "inset 0 1px 0 hsl(var(--gold) / 0.2)",
        "soft": "0 2px 20px hsl(30, 5%, 15% / 0.06)",
      },
      letterSpacing: {
        "luxury": "0.25em",
        "wide-luxury": "0.35em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
