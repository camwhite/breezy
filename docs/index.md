# Breezy

_Vue 3 components based on tailwind inspired by [tails](https://devdojo.com/tailwindcss/components)._

## Installation

```bash
# with yarn
yarn add vue-breezy

# with npm
npm i -S vue-breezy
```

<br />

```js
import { createApp } from 'vue'
import Breezy from 'vue-breezy'
import App from './App'
import './assets/tailwind.css'

createApp(App)
  .use(Breezy)
  .mount('#app')
```

Breezy requires tailwind to be [installed](https://tailwindcss.com/docs/installation) separately.

<style>
.content {
margin: 0 auto;
margin-top: 2rem;
padding: 0.025rem 2.5rem 2rem;
max-width: 100%;
}
header {
z-index: 999;
}
h1,
h2,
h3 {
margin: 2rem 0;
}
p {
margin-top: 1rem;
}
.language-html {
max-height: 40vh;
}
</style>
