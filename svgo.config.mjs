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
    {
      name: "removeClass",
      description: "Remove class attributes",
      fn: () => {
        return {
          element: {
            enter: (node) => {
              delete node.attributes.class;
            },
          },
        };
      },
    },
  ],
};
