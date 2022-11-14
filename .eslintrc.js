module.exports = {
  extends: [
    "next",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "plugin:react-hooks/recommended",
    "plugin:mdx/recommended",
  ],
  plugins: ["unused-imports", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        useTabs: false,
      },
    ],
    "@next/next/no-html-link-for-pages": "off",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "error",
    eqeqeq: ["error", "always"],
    "prefer-const": "error",
    "object-shorthand": ["error", "always"],
    curly: "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],

    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    "mdx/code-blocks": true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    "mdx/language-mapper": {},
  },
};
