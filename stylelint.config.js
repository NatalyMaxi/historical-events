module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'order/properties-alphabetical-order': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': null,
  },
  ignoreFiles: ['node_modules/**', 'build/**', 'dist/**'],
};
