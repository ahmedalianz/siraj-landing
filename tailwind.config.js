/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#f8f9fa",
        "surface-container-high": "#e7e8e9",
        "inverse-on-surface": "#f0f1f2",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-secondary-container": "#516960",
        "surface-container": "#edeeef",
        "on-tertiary": "#ffffff",
        "on-surface": "#191c1d",
        "surface-dim": "#d9dadb",
        "surface-container-low": "#f3f4f5",
        "primary-fixed": "#8ef6d0",
        "secondary-container": "#cee9dd",
        background: "#f8f9fa",
        "surface-bright": "#f8f9fa",
        "secondary-fixed": "#cee9dd",
        "surface-tint": "#006c52",
        "inverse-surface": "#2e3132",
        "on-primary-container": "#ffffff",
        error: "#ba1a1a",
        tertiary: "#98443b",
        "surface-container-lowest": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed-variant": "#7a2e26",
        "primary-fixed-dim": "#71d9b4",
        "inverse-primary": "#71d9b4",
        "on-error-container": "#93000a",
        "secondary-fixed-dim": "#b2ccc1",
        "outline-variant": "#bdc9c2",
        "on-secondary-fixed": "#082019",
        "primary-container": "#008767",
        secondary: "#4b635a",
        "on-tertiary-fixed": "#3f0302",
        "tertiary-container": "#b75c51",
        "on-primary-fixed-variant": "#00513d",
        primary: "#006b51",
        "tertiary-fixed-dim": "#ffb4aa",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e1e3e4",
        "on-tertiary-container": "#ffffff",
        "on-primary-fixed": "#002117",
        "tertiary-fixed": "#ffdad5",
        "surface-variant": "#e1e3e4",
        "on-background": "#191c1d",
        "on-secondary-fixed-variant": "#344b43",
        outline: "#6e7a73",
        "on-surface-variant": "#3e4944",
      },

      fontFamily: {
        arabic: ["Alexandria", "sans-serif"],
        headline: ["Manrope", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },

      boxShadow: {
        soft: "0px 20px 40px rgba(0,107,81,0.06)",
        glow: "0 0 8px #8ef6d0",
        card: "0 10px 30px rgba(0,0,0,0.05)",
      },

      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #006b51 0%, #008767 100%)",
      },

      backdropBlur: {
        xs: "2px",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        scaleUp: "scaleUp 0.4s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
