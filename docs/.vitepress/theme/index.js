import DefaultTheme from 'vitepress/dist/client/theme-default'
import Breezy from '/@breezy/index.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(Breezy)
    console.log(app)
  }
}
