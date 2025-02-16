module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['plugin:prettier/recommended', 'plugin:vue/base'],
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    'valid-typeof': 'off',
    'vue/multi-word-component-names': 'off',
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
  },
}
