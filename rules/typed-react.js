const baseReactRules = require('../rules/react');

module.exports = {
  ...baseReactRules,

  // Overrides
  '@typescript-eslint/no-misused-promises': [
    2,
    {
      'checksVoidReturn': {
        'attributes': false,
      },
    },
  ],
};
