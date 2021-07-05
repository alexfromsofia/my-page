/* Used by webpack, babel and eslint */

const { resolve } = require('path')

module.exports = {
  styles: resolve(__dirname, `styles/*`),
  types: resolve(__dirname, `@types`),
}
