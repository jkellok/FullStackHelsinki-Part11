module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'es2020': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  'plugins': [
    'react',
    'react-refresh'
  ],
  'rules': {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn', {
        allowConstantExport: true,
      },
    ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'react/prop-types': 0
  }
}
