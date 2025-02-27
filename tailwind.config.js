module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1a3a5f',
        'neon-green': '#4ded94',
        'deep-red': '#c41e3a',
        'gold': '#d4af37',
      },
      inset: {
        '1/10': '10%',
      },
      fontFamily: {
        'cyber': ['Major Mono Display', 'monospace'],
        'futuristic': ['Orbitron', 'sans-serif'],
        'terminal': ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}
