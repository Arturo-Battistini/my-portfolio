/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {

        darkblue: '#0A192F',
        skyblue: '#64FFDA',
        titleText: '#CCD6F6',
        pText: '#8892B0',
        leadText: '#ccd6f6'
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '700px' },
        xsm: { max: '450px' }
        // => @media (max-width: 639px) { ... }
      }
    }
  }
  // ...
}
