export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // disable a default plugin
          removeViewBox: false,
        },
      },
    },
    "removeDimensions",
    "convertStyleToAttrs",
  ],
};
