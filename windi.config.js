export default {
  theme: {
    extend: {
      fontFamily: {
        sanstc: ['Noto Sans TC', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#AA0601',
        primaryDark: '#650300',
        bgPink: '#FBF2F2',
        white: '#fff',
        black: '#000',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '36px',
        lg: '12px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1320px',
      '2xl': '1320px',
    },
  },
};
