const { urlObjectKeys } = require("next/dist/next-server/lib/utils");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          'Very-Light-Grayish-Blue': 'hsl(240, 78%, 98%)',
          'Light Grayish Blue': 'hsl(234, 14%, 74%)',
          'Grayish Blue': 'hsl(233, 13%, 49%)',
          'Dark Grayish Blue': 'hsl(232, 13%, 33%)',
           'test':'hsl(236, 72%, 79%)',
           'test2': 'hsl(237, 63%, 64%)'
        }
      },
      fontFamily: {
        'Mont': [
          'Montserrat',
        ]
      },
      backgroundImage: (theme) => ({
        "top-pattern": "url('/images/bg-top.svg')",
        "bottom-pattern": "url('/images/bg-bottom.svg')"
      })
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
