const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          mainlight: {
            main: "#64748B",
          },

          favColor: {
            main: "rgb(247, 247, 247)",
          },
        }
      : {
          // palette values for dark mode
          maindark: {
            main: "teal",
          },

          favColor: {
            main: "null",
          },
        }),
  },
});

export default getDesignTokens;
