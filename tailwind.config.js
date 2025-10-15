/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode
        lightBg: "#f9fafb",
        lightText: "#1e293b",

        // Dark mode
        darkBg: "#0f172a",
        darkText: "#e2e8f0",

        // Primary blue
        primary: "#2563eb",
        primaryHover: "#1d4ed8",

        // Accent green
        accentColor: "#10b981",
        accentColorHover: "#059669",

        // Neutral / secondary
        grayText: "#64748b",
        grayTextDark: "#94a3b8",
      },
      boxShadow: {
        navbar: "0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        navbarDark:
          "0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)",
      },
      transitionProperty: {
        "navbar-opacity": "opacity, transform",
      },
      transitionDuration: {
        navbar: "300ms",
      },
    },
  },
  plugins: [],
};
