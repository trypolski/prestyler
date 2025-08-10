module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended', // Adds prettier and turns off conflicting rules
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Show prettier errors as ESLint errors
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off', // for React 17+
    'react/jsx-props-no-spreading': 'off', // Allow prop spreading
    'react/require-default-props': 'off', // Disable default props requirement
    'react/forbid-prop-types': 'off', // Allow prop types like 'any', 'object', 'array', etc.
    'react/destructuring-assignment': 'off',
    'consistent-return': 'off',
  },
  globals: {
    PREFIX: 'readonly',
  },
};
