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

## Examples

Check the [docs](https://breezy.vercel.app) to see example components.
