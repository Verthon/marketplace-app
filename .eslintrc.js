module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          ['parent', 'internal'],
          ['index', 'sibling']
        ],
        'newlines-between': 'always'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error'
  }
}
