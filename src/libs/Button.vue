<template>
  <button class="tiger-button" :class=" `theme-${theme}` ">
    <slot />
  </button>

</template>

<script setup lang='ts'>

import {defineProps} from 'vue';

const props = defineProps({
  theme:{
    type: String,
    default:'button'
  }
})
</script>

<style lang='scss' scoped>

.box{
  width: 300px;
  height: 300px;
  background: #bfc;
  padding: 20px;
}
</style>
