const path = require('path')

module.exports = {
  title: 'Breezy',
  head: [
    [
      'link',
      {
        rel: 'preload',
        as: 'style',
        onload: 'this.rel="stylesheet"',
        href:
          'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
      }
    ]
  ],
  alias: {
    '/@breezy/': path.resolve(__dirname, '../../src')
  },
  themeConfig: {
    docsDir: 'docs',
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
