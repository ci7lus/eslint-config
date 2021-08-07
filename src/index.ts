import { Linter } from "eslint"

const config: Linter.BaseConfig = {
  env: { es2020: true, node: true /*, jest/globals: true*/ },
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  plugins: [/*"jest",*/ "@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    /*"plugin:jest/recommended",*/
    "prettier",
    "plugin:import/errors",
  ],
  rules: {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "sort-imports": "off",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        alphabetize: { order: "asc" },
      },
    ],
    "@typescript-eslint/no-misused-new": "off",
    "no-empty": "off",
    "no-console": ["warn", { allow: ["error", "warn", "info", "debug"] }],
  },
  settings: {
    "import/resolver": { node: { extensions: [".js", ".ts", ".tsx"] } },
  },
}

module.exports = config
