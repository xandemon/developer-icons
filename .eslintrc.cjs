module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", "showcase/dist", "lib/icons", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ["*.config.*", "lib/scripts/**/*.ts", "showcase/astro.config.mjs"],
      env: { node: true },
    },
    {
      files: ["showcase/src/components/ui/**/*.{ts,tsx}"],
      rules: { "react-refresh/only-export-components": "off" },
    },
    {
      files: ["**/env.d.ts"],
      rules: { "@typescript-eslint/triple-slash-reference": "off" },
    },
  ],
};
