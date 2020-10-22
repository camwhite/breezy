<template>
  <div
    class="px-8 mx-auto flex items-center min-h-screen min-w-screen bg-white"
  >
    <div class="w-1/2">
      <div
        class="flex flex-col overflow-hidden shadow-2xl rounded-lg"
      >
        <div
          class="h-8 bg-gray-900 text-white flex items-center"
        >
          <div
            class="w-3 h-3 rounded-full ml-3 bg-red-400"
          ></div>
          <div
            class="w-3 h-3 rounded-full ml-2 bg-yellow-400"
          ></div>
          <div
            class="w-3 h-3 rounded-full ml-2 bg-green-400"
          ></div>
        </div>
        <img :src="image" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="relative w-1/2 h-full pl-12">
      <slot name="title"></slot>
      <slot name="heading"></slot>
      <slot name="description"></slot>
      <slot name="cta"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BContentBrowser',
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
