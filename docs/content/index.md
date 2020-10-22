## Card

<browser>
<b-content-card image="https://i.imgur.com/Xh0Qjjq.jpg">
<template v-slot:title>
<p class="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase rounded-full bg-purple-200">
Lorem Ipsum
</p>
</template>
<template v-slot:heading>
<h5 class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
Dolor Sit Amet
</h5>
</template>
<template v-slot:description>
<p class="mb-5 text-gray-800 py-5">
<span class="font-bold">Lorem ipsum </span>
dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</template>
<template v-slot:cta>
<button
class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
>
Get started
</button>
<button class="inline-flex text-lg underline items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
Learn More
<svg class="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
</svg>
</button>
</template>
</b-content-card>
</browser>

**Example usage**

```html
<b-content-card image="https://i.imgur.com/Xh0Qjjq.jpg">
  <template v-slot:title>
    <p
      class="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase rounded-full bg-purple-200"
    >
      Lorem Ipsum
    </p>
  </template>
  <template v-slot:heading>
    <h5
      class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl"
    >
      Dolor Sit Amet
    </h5>
  </template>
  <template v-slot:description>
    <p class="mb-5 text-gray-800 py-5">
      <span class="font-bold">Lorem ipsum </span>
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template v-slot:cta>
    <button
      class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
    >
      Get started
    </button>
    <button
      class="inline-flex text-lg underline items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    >
      Learn More
      <svg
        class="inline-block w-2 ml-2"
        fill="currentColor"
        viewBox="0 0 12 12"
      >
        <path
          d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
        ></path>
      </svg>
    </button>
  </template>
</b-content-card>
```

**Slots**

| Slot        | Description           |
| ----------- | --------------------- |
| title       | The title of the card |
| heading     | The heading           |
| description | The text body         |
| cta         | The call to action    |

**Props**

| Prop  | Type   | Description   |
| ----- | ------ | ------------- |
| image | string | An image link |

## Browser

<browser>
<b-content-browser image="https://i.imgur.com/kwXO5Z3.jpg">
<template v-slot:title>
<p class="text-sm uppercase font-bold text-indigo-500 tracking-wide">
Lorem Ipsum
</p>
</template>
<template v-slot:heading>
<h2 class="text-4xl font-bold text-gray-900 mt-5 leading-tight">
Dolor Sit Amet
</h2>
</template>
<template v-slot:description>
<p class="text-gray-600 text-base mt-3">
Lorem ipsum 
dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</template>
<template v-slot:cta>
<button class="underline font-medium flex items-center inline-block text-indigo-500 mt-8">
<span>View All Features</span>
<svg class="w-4 h-4 ml-1 mt-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
</svg>
</button>
</template>
</b-content-browser>
</browser>

**Example usage**

```html
<b-content-browser image="https://i.imgur.com/kwXO5Z3.jpg">
  <template v-slot:title>
    <p
      class="text-sm uppercase font-bold text-indigo-500 tracking-wide"
    >
      Lorem Ipsum
    </p>
  </template>
  <template v-slot:heading>
    <h2
      class="text-4xl font-bold text-gray-900 mt-5 leading-tight"
    >
      Dolor Sit Amet
    </h2>
  </template>
  <template v-slot:description>
    <p class="text-gray-600 text-base mt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template v-slot:cta>
    <button
      class="underline font-medium flex items-center inline-block text-indigo-500 mt-8"
    >
      <span>View All Features</span>
      <svg
        class="w-4 h-4 ml-1 mt-1 transform -rotate-45"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  </template>
</b-content-browser>
```

**Slots**

| Slot        | Description              |
| ----------- | ------------------------ |
| title       | The title of the content |
| heading     | The heading              |
| description | The text body            |
| cta         | The call to action       |

**Props**

| Prop  | Type   | Description   |
| ----- | ------ | ------------- |
| image | string | An image link |

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
