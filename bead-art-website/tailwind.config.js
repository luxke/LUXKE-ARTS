 /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ← Required for manual toggling (via `data-theme` or class)
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ← Ensure this matches your file structure
  ],
  theme: {
    extend: {}, // ← Customize colors/fonts here if needed
  },
  plugins: [], // ← Add Tailwind plugins if used (e.g., forms, typography)
};