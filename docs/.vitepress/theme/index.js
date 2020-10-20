import DefaultTheme from 'vitepress/dist/client/theme-default'
import Breezy from '/@breezy/index.js'
import Browser from '../components/Browser.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(Breezy)
    app.component('browser', Browser)
  }
}
