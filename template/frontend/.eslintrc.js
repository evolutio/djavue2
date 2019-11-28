module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/attributes-order': 0,
    'vue/max-attributes-per-line': 0,
    'vue/require-prop-types': 0,
    'arrow-parens': 0,
    'object-curly-spacing': 0,
    'camelcase': 0
  }
}
