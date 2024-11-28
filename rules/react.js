module.exports = {
  // eslint react rules https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
  'react/boolean-prop-naming': ['error'],
  'react/button-has-type': 'error',
  'react/function-component-definition': [
    'error',
    { namedComponents: 'function-declaration' },
  ],
  'react/hook-use-state': ['error'],
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-closing-bracket-location': 'error',
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never' },
  ],
  'react/jsx-curly-newline': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-leaked-render': 'error',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-pascal-case': 'error',
  'react/jsx-props-no-spread-multi': 'error',
  'react/jsx-tag-spacing': [
    'error',
    {
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }
  ],
  'react/jsx-wrap-multilines': 'error',
  'react/no-danger': 'error',
  'react/no-namespace': 'error',
  'react/no-unstable-nested-components': 'error',
  'react/react-in-jsx-scope': 'off',
  'react/self-closing-comp': 'error',
  'react/void-dom-elements-no-children': 'error',
};
