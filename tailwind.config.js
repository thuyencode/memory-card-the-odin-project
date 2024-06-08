import daisyui from 'daisyui'
import * as tailwindcss_animated from 'tailwindcss-animated'
import * as defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [daisyui, tailwindcss_animated]
}
