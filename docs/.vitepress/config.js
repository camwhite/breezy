const path = require('path')

module.exports = {
  title: 'Breezy',
  alias: {
    '/@breezy/': path.resolve(__dirname, '../../src')
  },
  themeConfig: {
    docsDir: 'docs',
    repo: 'https://github.com/camwhite/breezy',
    sidebar: [
      {
        text: 'Getting Started',
        link: '/'
      },
      {
        text: 'Components',
        link: '/components/',
        children: [
          {
            text: 'Heroes',
            link: '/components/heroes'
          }
        ]
      }
    ]
  }
}
