import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, "cypress": "plugin-cypress" },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-var": "error",
      "prefer-const": "warn",
      "react/react-in-jsx-scope": "off",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
  },
  pluginReact.configs.flat.recommended,
]);
