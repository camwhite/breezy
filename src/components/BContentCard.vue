<template>
  <div
    class="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
  >
    <div
      class="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row sm:mx-auto"
    >
      <div class="relative lg:w-1/2">
        <img
          :src="image"
          alt=""
          class="object-cover w-full lg:absolute h-80 lg:h-full"
        />
        <svg
          class="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
          viewBox="0 0 20 104"
          fill="currentColor"
        >
          <polygon
            points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"
          ></polygon>
        </svg>
      </div>
      <div
        class="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2"
      >
        <div>
          <slot name="title"></slot>
        </div>
        <slot name="heading"></slot>
        <slot name="description"></slot>
        <div class="flex items-center">
          <slot name="cta"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BContentCard',
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
