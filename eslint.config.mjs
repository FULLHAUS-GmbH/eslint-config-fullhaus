import fhEslint from './index.mjs';
import globals from 'globals';

/** @type { import('eslint').Linter.Config[] } */
export default [
  ...fhEslint.configs.baseConfig,
  ...fhEslint.configs.stylisticConfig,
  ...fhEslint.configs.commentsConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
