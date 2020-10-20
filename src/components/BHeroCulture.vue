<template>
  <div
    class="min-w-screen min-h-screen flex items-center justify-center bg-cover relative flex flex-col"
    :style="backgroundImage"
  >
    <div
      class="w-full h-full absolute inset-0 bg-black bg-opacity-75"
    ></div>
    <div
      class="flex flex-col-reverse md:flex-row max-w-6xl mx-auto"
    >
      <div
        class="w-full container text-white text-2xl font-hairline relative pb-1 px-10 flex flex-col pr-12 md:w-1/2"
      >
        <slot name="headline"></slot>
        <slot name="content"></slot>
        <div class="flex mt-4">
          <slot name="cta"></slot>
        </div>
      </div>
      <div
        class="w-full h-64 relative px-8 rounded-lg overflow-hidden shadow-2xl cursor-pointer group md:w-1/2 md:h-auto md:p-0"
      >
        <slot name="media"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BHeroCulture',
  props: {
    background: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
    }
  },
  setup(props) {
    const backgroundImage = computed(
      () => `background-image: url('${props.background}')`
    )

    return {
      backgroundImage
    }
  }
}
</script>

<style scoped lang="scss"></style>
