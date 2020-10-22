<template>
  <div :class="[backgroundColor]" class="py-12">
    <div
      class="flex flex-col justify-center items-center container px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8"
    >
      <slot name="title"></slot>
      <slot name="headline"></slot>
      <slot name="link"></slot>
      <div
        class="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none"
      >
        <slot name="cards"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BContentCourse',
  props: {
    background: {
      type: String,
      default: 'gray-100'
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
