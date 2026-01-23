/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ef6400",
        text: "#fffafa66",
        darkMode: "#0A0101",
        primaryLightSideBar: "#ef6400",
        primary542: "#ef6400",
        primaryLightMedium: '#F5F5FF',
        done: '#03D858',
        textGrey: "#4F5E71",
        text727: "#727A8B",
        success: "#4CAF50",
        dark0b: "#0B0B0B",
        danger: "#F13E3F",
        label: '#4F5E71CC',
        input: '#4F5E71',
        warning: '#F56565',
        alarm: '#EA4335',
        primaryLight: '#F5FFFC',
        otp: '#FBFBFB',
        greyLight: '#F7F7F7',
        inputBorder: '#CCCCCC66',
        borderGrey: '#CCCCCC4D',
        greyDeep: '#0B0B0BCC',
        pending: '#FFA800',
        rating: '#41A48A',
        greyLightSuper: '#CCCCCC',
        greyFade: '#F6F5F5',
        glossGrey: '#FAFAFB',
        commentBG: '#FCFCFF',
        activityBG: '#120844',
        callModal: '#202124'
      },
      backgroundImage: {
        joinTheFamilyLight: "linear-gradient(to bottom, #FFF5F5 46%,#FFF5F5 46%,#F2F2F2 47%)",
        joinTheFamilyDark: "linear-gradient(to bottom, #191C1F 46%,#191C1F 46%,#282524 47%)",
        joinTheFamilyLandingLight: "linear-gradient(to bottom, #FFF5F5 46%,#FFF5F5 46%,#F2F2F2 47%)",
        joinTheFamilyLandingDark: "linear-gradient(to bottom, #130A0A 46%,#130A0A 46%,#150E0E 47%)",
      },
      fontSize: {
        base: '15px',
        sm: '13px',
        lg: "16px",
        xs: "12px",
        "2xl": "20px"
      },
      fontFamily: {
        gilda: 'Gilda Display',
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'zoom-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
      animation: {
        fade: 'fade 3s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'slide-in-top': 'slide-in-top 0.5s ease-out forwards',
        'slide-in-bottom': 'slide-in-bottom 0.5s ease-out forwards',
        'zoom-in': 'zoom-in 0.5s ease-in-out',
        'zoom-out': 'zoom-out 0.5s ease-in-out forwards',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ addUtilities, theme }) {
      const gaps = theme('gap');
      const spaceUtilities = Object.keys(gaps).reduce((acc, key) => {
        acc[`.space-x-${key}`] = { '> * + *': { marginLeft: gaps[key] } };
        acc[`.space-y-${key}`] = { '> * + *': { marginTop: gaps[key] } };
        return acc;
      }, {});

      addUtilities(spaceUtilities, { variants: ['responsive'] });
    },
  ],
}