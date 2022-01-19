<template>
  <button class="tiger-switch"  @click="toggle" :class="{'tiger-checked':value}">
    <span></span>
  </button>
</template>

<script  setup lang='ts'>

import {defineProps,defineEmits} from 'vue';

const props = defineProps({
  value:{
    type:Boolean
  }
})
const emits = defineEmits({"update:value":String})

const toggle = () =>{
  emits('update:value', !props.value);
}


</script>

<style lang='scss'>
$h: 22px;
$h2: $h - 4px;
.tiger-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;

  &:focus {
    outline: none;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: 50%;
    transition: left 0.25s
  }

  &.tiger-checked {
    background: blue;

    > span {
      left: calc(100% - #{$h2} - 2px)
    }
  }
}


</style>
