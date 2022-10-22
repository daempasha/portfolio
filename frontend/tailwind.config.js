/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-gray-500",
    "bg-gray-300",
    "text-emerald-400",
    "bg-emerald-100",
    "text-blue-500",
    "bg-blue-100",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
  darkMode: "class"
}
