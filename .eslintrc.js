module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    '@vue/prettier',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier/vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extra-semi': 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['prettier']
}
