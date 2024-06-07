import daisyui from 'daisyui'
import * as tailwindcss_animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [daisyui, tailwindcss_animate]
}
