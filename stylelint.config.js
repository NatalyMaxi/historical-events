module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'order/properties-alphabetical-order': null,
    'at-rule-no-unknown': null,
    'custom-property-empty-line-before': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
  },
  ignoreFiles: ['node_modules/**', 'build/**', 'dist/**'],
};
