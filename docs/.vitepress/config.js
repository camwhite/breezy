const path = require('path')

module.exports = {
  title: 'Breezy',
  description:
    'Vue 3 components based on tailwind inspired by tails',
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
        text: 'Heroes',
        link: '/heroes/'
      },
      {
        text: 'Content',
        link: '/content/'
      }
    ]
  }
}
