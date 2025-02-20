module.exports = {
  // ESLint Stylistic rules - https://eslint.style/rules
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': 'error',
  '@stylistic/eol-last': 'error',
  '@stylistic/indent': [
    'error',
    2,
  ],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/quotes': [
    'error',
    'single',
    {
      'avoidEscape': true,
    },
  ],
  '@stylistic/semi': 'error',
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': [
    'error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    },
  ],
};
