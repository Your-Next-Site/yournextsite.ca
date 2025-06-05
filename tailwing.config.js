module.exports = {
  theme: {
    extend: {
      animation: {
        fadeBorder: 'fadeBorder 1s ease-in-out',
      },
      keyframes: {
        fadeBorder: {
          '0%': { borderBottomColor: 'transparent' },
          '100%': { borderBottomColor: 'var(--secondary)' },
        },
      },
    },
  },
};
