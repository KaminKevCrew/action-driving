/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main background colors
        background: {
          DEFAULT: 'var(--background)', // #36393f
          secondary: 'var(--secondary-bg)', // #2f3136
          tertiary: 'var(--tertiary-bg)', // #202225
        },
        // Text colors
        text: {
          DEFAULT: 'var(--foreground)', // #ffffff
          muted: 'var(--text-muted)', // #b9bbbe
          normal: 'var(--text-normal)', // #dcddde
        },
        // Accent color
        accent: {
          DEFAULT: 'var(--accent)', // #5865F2
          hover: '#4752c4', // Darker shade for hover states
        },
        // Additional UI colors
        ui: {
          hover: '#40444b', // Used for hover states on dark backgrounds
          border: '#40444b', // Used for borders
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'default': '150ms',
        'fast': '100ms',
        'slow': '300ms',
      },
    },
  },
  plugins: [],
}
