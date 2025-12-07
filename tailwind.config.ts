import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff200',
        secondary: '#6a6a6a',
      },
      spacing: {
        'safe-padding': '1rem',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-down': 'fadeDown 0.5s ease-out',
        'fade-right': 'fadeRight 0.5s ease-out',
        'appear': 'appear 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px) scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)',
          },
        },
        fadeDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px) scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)',
          },
        },
        fadeRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px) scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px) scale(1)',
          },
        },
        appear: {
          'from': {
            opacity: '0',
            scale: '0.5',
            transform: 'translateY(-100px)',
          },
          'to': {
            opacity: '1',
            scale: '1',
            transform: 'translateY(0px)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        pulseRing: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
