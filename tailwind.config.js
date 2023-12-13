/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(100%)' },
        '70%': { transform: 'translateX(-25%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideTop: {
        '0%': { transform: 'translateY(-100%)' },
        '70%': { transform: 'translateY(25%)' },
        '100%': { transform: 'translateY(100%)' },
      },
    },
    animation: {
      'slide-left': 'slideLeft 3s ease-in-out infinite',
      'slide-top': 'slideTop 3s ease-in-out infinite',
    },
  },
  plugins: [],
}
