/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      brandbg:"var(--color-brandbg)",
        brand:"var(--color-brand)",
          brandtext:"var(--color-brandtext)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    cardbg: "var(--card-background)",
    formText : "var(--color-border)"
  },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
