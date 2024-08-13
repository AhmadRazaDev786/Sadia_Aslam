/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          backgroundImage: {
            // 'custom-gradient': 'linear-gradient(65deg, rgba(78,75,77,1) 0%, rgba(0,0,0,1) 100%);'
            // 'custom-gradient':  'linear-gradient(180deg, rgba(78,75,77,1) 0%, rgba(0,0,0,1) 100%);'
            'custom-gradient': 'linear-gradient(180deg, rgba(64,63,63,1) 0%, rgba(0,0,0,1) 100%);'

          }
    },
  },
  plugins: [],
}

