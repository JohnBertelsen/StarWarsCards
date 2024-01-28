/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['\'Press Start 2P\'', 'system-ui']
      },
      colors: {
        'primary': "#ddc800",
        'on-primary': "#373100",
        'primary-container': '#504700',
        'on-primary-container': '#fbe431',

        'secondary': '#cfc7a2',
        'on-secondary': '#353117',
        'secondary-container': '#4c472b',
        'on-secondary-container': '#ebe3bd',

        'tertiary': '#a7d0b7',
        'on-tertiary': '#113725',
        'tertiary-container': '#294e3b',
        'on-tertiary-container': '#c2ecd2',

        'error': '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',

        'background': '#1d1c16',
        'on-background': '#e7e2d9',

        'surface': '#1d1c16',
        'on-surface': '#e7e2d9',

        'outline': '#959181',

        'surface-variant': '#4a4739',
        'on-surface-variant': '#ccc6b5',
      },
      fontSize: {
        '57': '3.5625rem',
        '45': '2.8125rem',
        '36': '2.25rem',
        '32': '2rem',
        '28': '1.75rem',
        '24': '1.5rem',
        '22': '1.375rem',
        '18': '1.125rem',
        '16': '1rem',
        '14': '.875rem',
        '12': '.75rem',
        '11': '.6875rem',
      },
      lineHeight: {
        '64': '4rem',
        '52': '3.25rem',
        '44': '2.75rem',
        '40': '2.5rem',
        '36': '2.25rem',
        '32': '2rem',
        '28': '1.75rem',
        '24': '1.5rem',
        '20': '1.25rem',
        '16': '1rem',
      }
    },
  },
  plugins: [],
}

