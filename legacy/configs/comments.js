const rules = require('../../rules/comments');

module.exports = {
  extends: [
    'plugin:@eslint-community/eslint-comments/recommended',
  ],
  rules: rules,
};
