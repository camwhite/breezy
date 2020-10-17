const path = require('path')
console.log(path.resolve(__dirname, '../../src'))

module.exports = {
  title: 'Breezy',
  alias: {
    '/@breezy/': path.resolve(__dirname, '../../src')
  },
  themeConfig: {
    docsDir: 'docs'
  }
}
