/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    "./pages/**/*.html",
    "./**/*.html",
    "./src/**/*.{js,css}"
  ],
  eslint:{
    ignoreDuringBuilds: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

