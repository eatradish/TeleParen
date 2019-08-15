module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    '@typescript-eslint/camelcase': ['off', {properties: 'always'}],
  }
};
