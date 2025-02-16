module.exports = {
  customSyntax: 'postcss-html',
  modules: ['@nuxtjs/stylelint-module'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
    'stylelint-stylus/standard',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'rule-empty-line-before': null,
  },
}
