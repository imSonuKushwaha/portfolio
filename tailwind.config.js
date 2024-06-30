/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        github: "url('../public/github.svg')",
        linkedin: "url('../public/linkedin-circle.svg')",
        instagram: "url('../public/instagram.svg')",
        gmail: "url('../public/gmail.svg')",
      },
    },
    letterSpacing: {
      extreme: "0.75em",
    },
  },
  plugins: [],
};
