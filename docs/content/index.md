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

## Course

<browser>
<b-content-course background="green-100">
<template v-slot:title>
<p class="inline-block px-3 py-1 leading-tight mb-4 text-xs font-semibold tracking-widest text-indigo-700 uppercase rounded-full bg-indigo-200">
Lorem Ipsum
</p>
</template>
<template v-slot:headline>
<h2 class="text-center b-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto flex justify-center">
<svg class="w-8 h-8 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
<span class="relative">Dolor Sit Amet</span>
</h2>
</template>
<template v-slot:link>
<p class="text-sm font-semibold text-indigo-600 underline mt-3">
Lorem ipsum dolor sit amet
</p>
</template>
<template v-slot:cards>
<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
<div class="relative flex-shrink-0">
<img class="object-cover w-full h-56" src="https://cdn.devdojo.com/episode/images/August2020/laravel-livewire-introduction1.jpg" alt="" />
<span class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full">12 reviews</span>
</div>
<div class="flex flex-col justify-between flex-1">
<div class="flex flex-col justify-between flex-1 p-6 bg-white">
<div>
<p class="block text-xl font-semibold leading-7 text-gray-900">Mastering Livewire</p>
<p class="mt-3 text-base leading-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<p class="mt-3 text-sm font-medium leading-5">
<p class="inline-block">
<span class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full">Livewire</span>
</p>
</p>
</div>
<div class="flex items-center p-6 bg-gray-100">
<div class="flex-shrink-0">
<p>
<img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
</p>
</div>
<div class="ml-3">
<p class="text-sm font-medium leading-5 text-gray-900">
<p class="hover:underline">Tom Cook</p>
</p>
<div class="text-xs leading-5 text-gray-600">
<time>Mid Summer, 2020</time>
</div>
</div>
</div>
</div>
</div>
<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
<div class="relative flex-shrink-0">
<img class="object-cover w-full h-56" src="https://cdn.devdojo.com/images/September2017/creating-a-laravel-package-sd.jpg" alt="" />
<span class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full">16 reviews</span>
</div>
<div class="flex flex-col justify-between flex-1">
<div class="flex flex-col justify-between flex-1 p-6 bg-white">
<div>
<p class="block text-xl font-semibold leading-7 text-gray-900">Create a Laravel Package</p>
<p class="mt-3 text-base leading-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<p class="mt-3 text-sm font-medium leading-5">
<span class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-red-800 bg-red-100 rounded-full">Laravel</span>
</p>
</div>
<div class="flex items-center p-6 bg-gray-100">
<div class="flex-shrink-0">
<img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
</div>
<div class="ml-3">
<p class="text-sm font-medium leading-5 text-gray-900">
<p class="hover:underline">Margot Foster</p>
</p>
<div class="text-xs leading-5 text-gray-600">
<time>Jun 4, 2020</time>
</div>
</div>
</div>
</div>
</div>
<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
<div class="relative flex-shrink-0">
<img class="object-cover w-full h-56" src="https://cdn.devdojo.com//images/March2017/laravel-dusk-sd.jpg" alt="" />
<span class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full">22 reviews</span>
</div>
<div class="flex flex-col justify-between flex-1">
<div class="flex flex-col justify-between flex-1 p-6 bg-white">
<div>
<p class="text-xl font-semibold leading-7 text-gray-900">Laravel Dusk</p>
<p class="mt-3 text-base leading-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<p class="mt-3 text-sm font-medium leading-5">
<span class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-orange-800 bg-orange-100 rounded-full">Eloquent</span>
</p>
</div>
<div class="flex items-center p-6 bg-gray-100">
<div class="flex-shrink-0">
<img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
</div>
<div class="ml-3">
<p class="text-sm font-medium leading-5 text-gray-900">
<p class="hover:underline">John Cooper</p>
</p>
<div class="text-xs leading-5 text-gray-600">
<time>Jun 3, 2020</time>
</div>
</div>
</div>
</div>
</div>
</template>
</b-content-course>
</browser>

**Example usage**

```html
<b-content-course background="green-100">
  <template #title>
    <p
      class="inline-block px-3 py-1 leading-tight mb-4 text-xs font-semibold tracking-widest text-indigo-700 uppercase rounded-full bg-indigo-200"
    >
      Lorem Ipsum
    </p>
  </template>
  <template #headline>
    <h2
      class="text-center b-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto flex justify-center"
    >
      <svg
        class="w-8 h-8 mr-3 mt-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
        ></path>
      </svg>
      <span class="relative">Dolor Sit Amet</span>
    </h2>
  </template>
  <template #link>
    <a
      class="text-sm font-semibold text-indigo-600 underline mt-3"
    >
      Lorem ipsum dolor sit amet
    </a>
  </template>
  <template #cards>
    <div
      v-for="course of courses"
      class="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div class="relative flex-shrink-0">
        <img
          class="object-cover w-full h-56"
          :src="course.image"
        />
        <span
          class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full"
          >{{ course.reviews }}</span
        >
      </div>
      <div class="flex flex-col justify-between flex-1">
        <p
          class="block text-xl font-semibold leading-7 text-gray-900"
        >
          {{ course.title }}
        </p>
        <p class="mt-3 text-base leading-6 text-gray-500">
          {{ course.description }}
        </p>
        <p class="mt-3 text-sm font-medium leading-5">
          <span
            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full"
            >{{ course.tag }}</span
          >
        </p>
      </div>
      <div class="flex items-center p-6 bg-gray-100">
        <div class="flex-shrink-0">
          <img
            class="w-10 h-10 rounded-full"
            :src="course.user.avatar"
          />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium leading-5 text-gray-900">
            <a class="hover:underline">{{ course.user.name }}</a>
          </p>
          <div class="text-xs leading-5 text-gray-600">
            <time>{{ course.created_at }}</time>
          </div>
        </div>
      </div>
    </div>
  </template>
</b-content-course>
```

::: tip Suggestion
Cards can be slotted in for loops
:::

**Slots**

| Slot     | Description              |
| -------- | ------------------------ |
| title    | The title of the content |
| headline | The heading              |
| link     | A link element           |
| cards    | Grid elements            |

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
