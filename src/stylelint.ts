import type { Config } from 'stylelint'

const stylelintConfig: Config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-rational-order',
    'stylelint-no-unsupported-browser-features',
    'stylelint-config-prettier'
  ],
  customSyntax: 'postcss-less',
  rules: {
    'block-no-empty': null,
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null
  },
  plugins: ['stylelint-declaration-block-no-ignored-properties']
}

module.exports = stylelintConfig
