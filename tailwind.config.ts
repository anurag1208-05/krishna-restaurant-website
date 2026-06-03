import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        warm: 'var(--warm)',
        'warm-foreground': 'var(--warm-foreground)',
        gold: 'var(--gold)',
        'gold-foreground': 'var(--gold-foreground)',
      },
    },
  },
  plugins: [],
}

export default config
