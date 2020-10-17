<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen bg-cover min-w-screen"
    :class="[backgroundColor, textColor]"
  >
    <div
      class="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0"
    >
      <div
        class="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0"
      >
        <slot name="headline"> </slot>
        <slot name="text"> </slot>
        <div class="relative flex mt-4">
          <slot name="cta"> </slot>
        </div>
      </div>
      <div
        class="relative w-full px-5 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group xl:px-0"
      >
        <slot name="media"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'THeroClean',
  props: {
    background: {
      type: String,
      default: 'white'
    },
    text: {
      type: String,
      default: 'black'
    }
  },
  setup(props) {
    const backgroundColor = computed(
      () => `bg-${props.background}`
    )
    const textColor = computed(() => `text-${props.text}`)

    return {
      backgroundColor,
      textColor
    }
  }
}
</script>

<style scoped lang="scss"></style>
