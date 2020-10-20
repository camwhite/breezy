## Clean

<browser>
<b-hero-clean background="purple-200">
<template v-slot:headline>
<h1
class="relative capitalize text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl sm:text-center lg:text-left"
>
Lorem Ipsum<br class="md:hidden lg:block" />
<span class="text-gray-800"> dolor sit amet</span>
</h1>
</template>
<template v-slot:content>
<p class="relative block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</template>
<template v-slot:cta>
<button class="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10">Get Started</button>
<button class="relative flex items-center self-start justify-center py-3 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm md:pl-16 md:pr-10 hover:text-purple-500 focus:outline-none md:py-4 md:text-lg xl:text-xl">
<svg class="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
<span class="text-purple-500">How It Works</span>
</button>
</template>
<template v-slot:media>
<div class="absolute flex items-center justify-center w-full h-full">
<span class="flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full shadow-2xl">
<svg class="w-auto h-8 ml-1 text-white fill-current" viewBox="0 0 52 66" xmlns="http://www.w3.org/2000/svg"><path d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z" fill-rule="nonzero"/></svg>
</span>
</div>
<img src="https://i.imgur.com/UkdTrVi.jpg" class="rounded-lg object-cover w-full">
</template>
</b-hero-clean>
</browser>

**Example usage**

```html
<b-hero-clean background="purple-200">
  <template #headline>
    <h1
      class="relative capitalize text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl sm:text-center lg:text-left"
    >
      Lorem ipsum<br class="md:hidden lg:block" />
      <span class="text-gray-800"> dolor sit amet</span>
    </h1>
  </template>
  <template #content>
    <p
      class="relative block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template #cta>
    <button
      class="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10"
    >
      Get Started
    </button>
    <button
      class="relative flex items-center self-start justify-center py-3 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm md:pl-16 md:pr-10 hover:text-purple-500 focus:outline-none md:py-4 md:text-lg xl:text-xl"
    >
      <svg
        class="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="text-purple-500">How It Works</span>
    </button>
  </template>
  <template #media>
    <div
      class="absolute flex items-center justify-center w-full h-full"
    >
      <span
        class="flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full shadow-2xl"
      >
        <svg
          class="w-auto h-8 ml-1 text-white fill-current"
          viewBox="0 0 52 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z"
            fill-rule="nonzero"
          />
        </svg>
      </span>
    </div>
    <img
      src="https://i.imgur.com/UkdTrVi.jpg"
      class="rounded-lg object-cover w-full"
    />
  </template>
</b-hero-clean>
```

**Slots**

| Slot     | Description           |
| -------- | --------------------- |
| headline | The title of the hero |
| content  | The text body         |
| cta      | The call to action    |
| media    | An image or video     |

**Props**

| Prop       | Type   | Description      |
| ---------- | ------ | ---------------- |
| background | string | A tailwind color |

## Culture

<browser>
<b-hero-culture background="https://i.imgur.com/0hRUgjm.jpg">
<template v-slot:headline>
<h2 class="text-5xl capitalize text-white font-extrabold relative z-20 leading-tight">Lorem ipsum<br> dolor sit amet</h2>
</template>
<template v-slot:content>
<p class="relative z-20 block text-xl mt-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</template>
<template v-slot:cta>
<button
class="flex items-center justify-center self-start px-5 py-3 border border-transparent text-base leading-tight font-medium rounded-lg shadow text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8 mt-5"
>Get Started</button
>
<button
class="flex items-center justify-center self-start px-5 py-3 border-transparent text-base leading-tight font-medium rounded-lg shadow text-indigo-500 bg-gray-200 hover:bg-white focus:outline-none focus:border-gray-100 focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8 mt-5 ml-5"
>How It Works</button
>
</template>
<template v-slot:media>
<div
class="absolute w-full h-full flex items-center justify-center bg-opacity-25 bg-black"
>
<span
class="w-20 h-20 bg-white rounded-full bg-opacity-75 flex justify-center items-center"
>
<svg
class="w-auto h-8 ml-1 text-indigo-600 fill-current"
viewBox="0 0 52 66"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z"
fill-rule="nonzero"
/>
</svg>
</span>
</div>
<img
src="https://i.imgur.com/dEPXkyl.jpg"
class="w-full h-full object-cover"
/>
</template>
</b-hero-culture>
</browser>

**Example usage**

```html
<b-hero-culture background="https://i.imgur.com/z8g4mSW.jpg">
  <template #headline>
    <h2
      class="text-5xl text-white font-extrabold relative z-20 leading-tight"
    >
      Lorem ipsum<br />
      dolor sit amet
    </h2>
  </template>
  <template #content>
    <p class="text-xl mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template #cta>
    <button
      class="flex items-center justify-center self-start px-5 py-3 border border-transparent text-base leading-tight font-medium rounded-lg shadow text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8 mt-5"
    >
      Get Started
    </button>
    <button
      class="flex items-center justify-center self-start px-5 py-3 border-transparent text-base leading-tight font-medium rounded-lg shadow text-indigo-500 bg-gray-200 hover:bg-white focus:outline-none focus:border-gray-100 focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8 mt-5 ml-5"
    >
      How It Works
    </button>
  </template>
  <template #media>
    <div
      class="absolute w-full h-full flex items-center justify-center bg-opacity-25 bg-black"
    >
      <span
        class="w-20 h-20 bg-white rounded-full bg-opacity-75 flex justify-center items-center"
      >
        <svg
          class="w-auto h-8 ml-1 text-indigo-600 fill-current"
          viewBox="0 0 52 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z"
            fill-rule="nonzero"
          />
        </svg>
      </span>
    </div>
    <img
      src="https://i.imgur.com/mmmjhw5.jpg"
      class="w-full h-full object-cover"
    />
  </template>
</b-hero-culture>
```

**Slots**

| Slot     | Description           |
| -------- | --------------------- |
| headline | The title of the hero |
| content  | The text body         |
| cta      | The call to action    |
| media    | An image or video     |

**Props**

| Prop       | Type   | Description   |
| ---------- | ------ | ------------- |
| background | string | An image link |

## Learn

<browser>
<b-hero-learn background="indigo-200">
<template v-slot:headline>
<h1 class="relative z-20 font-sans text-4xl font-extrabold leading-none capitalize text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left">
<span class="relative">
<span class="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-yellow-200"></span>
<span class="relative">Lorem Ipsum,</span>
</span>
<span class="relative block text-yellow-400">Dolor Sit.</span>
</h1>
</template>
<template v-slot:content>
<p class="relative z-20 block mt-6 text-base text-gray-700 xl:text-lg sm:text-center lg:text-left">
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</template>
<template v-slot:cta>
<button class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:border-yellow-600 focus:shadow-outline-yellow md:py-4 md:text-lg xl:text-xl md:px-10">Get Started</button>
<button class="relative flex inline-block h-full ml-5 text-base text-lg font-medium leading-tight text-gray-600 underline transition duration-150 ease-in-out border-transparent">
Try Our Service for Free
</button>
</template>
<template v-slot:media>
<div class="relative rounded-md">
<img src="https://i.imgur.com/fcziAdf.png" class="z-10 object-cover w-full">
</div>
</template>
</b-hero-learn>
</browser>

**Example usage**

```html
<b-hero-learn background="gray-200">
  <template #headline>
    <h1
      class="relative z-20 font-sans text-4xl font-extrabold leading-none capitalize text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left"
    >
      <span class="relative">
        <span
          class="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-yellow-200"
        ></span>
        <span class="relative">Lorem Ipsum,</span>
      </span>
      <span class="relative block text-yellow-400"
        >Dolor Sit.</span
      >
    </h1>
  </template>
  <template #content>
    <p
      class="relative z-20 block mt-6 text-base text-gray-500 xl:text-lg sm:text-center lg:text-left"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template #cta>
    <button
      class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:border-yellow-600 focus:shadow-outline-yellow md:py-4 md:text-lg xl:text-xl md:px-10"
    >
      Get Started
    </button>
    <button
      class="relative flex inline-block h-full ml-5 text-base text-lg font-medium leading-tight text-gray-600 underline transition duration-150 ease-in-out border-transparent"
    >
      Try Our Service for Free
    </button>
  </template>
  <template #media>
    <div class="relative rounded-md">
      <img
        src="https://i.imgur.com/sGkQOeb.png"
        class="z-10 object-cover w-full"
      />
    </div>
  </template>
</b-hero-learn>
```

**Slots**

| Slot     | Description           |
| -------- | --------------------- |
| headline | The title of the hero |
| content  | The text body         |
| cta      | The call to action    |
| media    | An image or video     |

**Props**

| Prop       | Type   | Description      |
| ---------- | ------ | ---------------- |
| background | string | A tailwind color |

## Minimal

<browser>
<b-hero-minimal background="teal-700">
<template v-slot:headline>
<h1 class="relative z-20 font-sans text-4xl capitalize font-extrabold leading-none text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left">
<span class="relative">
<span class="relative text-gray-800">Lorem Ipsum</span>
</span>
<span class="relative block text-blue-400">dolor sit amet</span>
</h1>
</template>
<template v-slot:content>
<p class="relative mt-6 text-base text-gray-900 xl:text-lg">
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</template>
<template v-slot:cta>
<button class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white bg-blue-400 border border-transparent rounded-lg shadow md:py-4 md:text-lg xl:text-xl md:px-10">Come with us</button>
</template>
<template v-slot:media>
<div class="relative rounded-md">
<img src="https://i.imgur.com/T2SW6Jc.png" class="z-10 object-cover w-full">
</div>
</template>
</b-hero-minimal>
</browser>

**Example usage**

```html
<b-hero-minimal background="red-200">
  <template v-slot:headline>
    <h1
      class="relative z-20 font-sans text-4xl capitalize font-extrabold leading-none text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left"
    >
      <span class="relative">
        <span class="relative text-gray-800">Lorem Ipsum</span>
      </span>
      <span class="relative block text-blue-400"
        >dolor sit amet</span
      >
    </h1>
  </template>
  <template v-slot:content>
    <p class="relative mt-6 text-base text-gray-600 xl:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template v-slot:cta>
    <button
      class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white bg-blue-800 border border-transparent rounded-lg shadow md:py-4 md:text-lg xl:text-xl md:px-10"
    >
      Come with us
    </button>
  </template>
  <template v-slot:media>
    <div class="relative rounded-md">
      <img
        src="https://i.imgur.com/yydyGmG.jpg"
        class="z-10 object-cover w-full h-50"
      />
    </div>
  </template>
</b-hero-minimal>
```

**Slots**

| Slot     | Description           |
| -------- | --------------------- |
| headline | The title of the hero |
| content  | The text body         |
| cta      | The call to action    |
| media    | An image or video     |

**Props**

| Prop       | Type   | Description      |
| ---------- | ------ | ---------------- |
| background | string | A tailwind color |

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
