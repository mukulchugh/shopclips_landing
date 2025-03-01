module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: ["react"],
    rules: {
      "react/prop-types": 0,
      "no-unused-vars": ["warn", { args: "all", argsIgnorePattern: "^_" }]
    }
  };
  