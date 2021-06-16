function withOpacity(variableName) {
  return ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgba(${variableName}, ${opacityValue})`
      : `rgba(${variableName})`;
}

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: withOpacity("var(--color-primary)")
        }
      },
      backgroundColor: {
        skin: {
          primary: withOpacity("var(--color-primary)"),
          blue: {
            light: withOpacity('var(--color-blue-light)'),
            dark: withOpacity('var(--color-blue-dark)')
          }
        }
      },
      gradientColorStops: {
        skin: {
          blue: {
            light: withOpacity('var(--color-blue-light)'),
            dark: withOpacity('var(--color-blue-dark)')
          }
        }
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    extend: {}
  },
  plugins: []
};
