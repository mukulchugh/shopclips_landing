module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "10rem",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    
    boxShadow: {
      xs: "0px 2px 8px -3px rgba(28, 44, 64, 0.16)",
      sm: "0px 4px 12px -3px rgba(28, 44, 64, 0.1)",
      md: "0px 8px 16px -4px rgba(28, 44, 64, 0.08)",
      lg: "0px 10px 20px rgba(28, 44, 64, 0.08)",
      xl: "4px 12px 24px rgba(28, 44, 64, 0.08)",
      "2xl": "8px 16px 48px rgba(28, 44, 64, 0.12)",
    },
    extend: {
      spacing: {
        18: "72px",
        22: "88px",
        30: "120px",
      },
      fontSize: {
      "display-4xl": [
        "80px",
        {
          letterSpacing: "-0.04em",
          lineHeight: "88px",
        },
      ],
      "display-2xl": [
        "64px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "80px",
        },
      ],
      "display-xl": [
        "56px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "72px",
        },
      ],
      "display-lg": [
        "48px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "60px",
        },
      ],
      "display-md": [
        "36px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "48px",
        },
      ],
      "display-sm": [
        "30px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "40px",
        },
      ],
      "display-xs": [
        "24px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "32px",
        },
      ],
      "body-xl": [
        "20px",
        {
          letterSpacing: "0.01em",
          lineHeight: "28px",
        },
      ],
      "body-lg": [
        "18px",
        {
          letterSpacing: "0.01em",
          lineHeight: "28px",
        },
      ],
      "body-md": [
        "16px",
        {
          letterSpacing: "0.01em",
          lineHeight: "24px",
        },
      ],
      "body-sm": [
        "14px",
        {
          letterSpacing: "0.01em",
          lineHeight: "20px",
        },
      ],
      "body-xs": [
        "12px",
        {
          letterSpacing: "0.01em",
          lineHeight: "16px",
        },
      ],
    },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
