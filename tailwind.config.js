/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["IBM Plex Mono", "Menlo", "monospace"],
      body: ["IBM Plex Mono", "Menlo", "monospace"],
    },
    colors: {
      primary: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      calipso: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
      },
      red: {
        50: "#fff0f0",
        100: "#ffdddd",
        200: "#ffc1c1",
        300: "#ff9595",
        400: "#ff5959",
        500: "#ff2525",
        600: "#fd0d0d",
        700: "#d50000",
        800: "#b00404",
        900: "#910b0b",
      },
      blue: {
        50: "#f1f4ff",
        100: "#e5eaff",
        200: "#ced6ff",
        300: "#a6b2ff",
        400: "#7480ff",
        500: "#3d43ff",
        600: "#1b16ff",
        700: "#110dfd",
        800: "#0603d4",
        900: "#0805ad",
      },
    },
  },
  plugins: [],
};
