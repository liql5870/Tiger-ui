<template>
  <div>
    示例1
  </div>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeonClickOverlay='true' :ok='f1' :cancel='f2'/>
</template>

<script setup lang='ts'>
import {ref} from 'vue';

const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
const f1 = () =>{
  return false
}
const f2 = () =>{
  console.log(2)
}
import Dialog from '../libs/Dialog.vue';
import Button from '../libs/Button.vue';
</script>

<style lang='scss' scoped>

</style>
