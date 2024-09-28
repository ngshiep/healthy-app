/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        bg_primary: '#2E2E2E',
        bg_secondary: '#414141',
        text_primary: '#414141',
        border: '#777777',
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00'
        },
        secondary: {
          300: '#8FE9D0'
        }
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
