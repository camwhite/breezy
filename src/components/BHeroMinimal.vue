<template>
  <div
    :class="[backgroundColor]"
    class="relative flex flex-col items-center justify-center min-h-screen bg-white bg-cover min-w-screen"
  >
    <div
      class="flex flex-col flex-col-reverse items-center justify-center mx-auto lg:flex-row lg:max-w-4xl lg:p-0"
    >
      <div
        class="container relative z-20 flex flex-col w-full px-5 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0"
      >
        <slot name="headline"> </slot>
        <slot name="content"> </slot>
        <div
          class="relative flex items-center justify-center m-10"
        >
          <slot name="cta"> </slot>
        </div>
      </div>
      <div
        class="relative w-full pr-10 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group"
      >
        <slot name="media"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BHeroMinimal',
  props: {
    background: {
      type: String,
      default: 'white'
    }
  },
  setup(props) {
    const backgroundColor = computed(
      () => `bg-${props.background}`
    )

    return {
      backgroundColor
    }
  }
}
</script>

<style scoped lang="scss"></style>
