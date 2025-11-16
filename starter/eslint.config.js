import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.mocha,
        // لدعم cypress بدون plugin
        cy: 'readonly',
        Cypress: 'readonly',
      },
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },
];
