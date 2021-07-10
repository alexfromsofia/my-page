/* Used by webpack, babel and eslint */

const { resolve } = require('path')

module.exports = {
  styles: resolve(__dirname, `styles/*`),
  types: resolve(__dirname, `@types`),
  components: resolve(__dirname, `components/*`),
  utils: resolve(__dirname, `utils/*`),
  hooks: resolve(__dirname, `hooks/*`),
}
