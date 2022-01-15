<template>
  <div>
    dialog示例
  </div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog  v-model:visible="x" :closeonClickOverlay='true' :ok='f1' :cancel='f2'>
    <template v-slot:title>
      <p>shit</p>
    </template>
  <template v-slot:content>
    <p>hello</p>
    <p>world</p>

  </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">showDialog</Button>
</template>

<script setup lang='ts'>
import {ref} from 'vue';


const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
const f1 = () =>{
  return true
}
const f2 = () =>{
  console.log('fuck your')
  return true
}
const showDialog = ()=>{
  openDialog({
    title: ('strong', {}, '标题'),
    content: '你好',
    ok() {
      console.log('ok')
    },
    cancel() {
      console.log('cancel')
    }
  })
}
import Dialog from '../libs/Dialog.vue';
import Button from '../libs/Button.vue';
import {openDialog} from '../libs/openDialog'
</script>

<style lang='scss' scoped>

</style>
