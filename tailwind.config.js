/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#F7F1EC',      // Warm Cream - main background
          blush: '#EBC9C9',      // Blush Pink
          rose: '#C35D7E',       // Dusty Rose - primary CTA
          gold: '#B88B80',       // Rose Gold - subtle borders & accents
          charcoal: '#292426',   // Dark Charcoal - primary text/headings
          white: '#FFFCF9',      // Soft White - cards & surfaces
          muted: '#756D70',      // Muted Text - secondary text
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(41, 36, 38, 0.05)',
        'card': '0 10px 30px -4px rgba(41, 36, 38, 0.07)',
        'modal': '0 20px 40px -6px rgba(41, 36, 38, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
