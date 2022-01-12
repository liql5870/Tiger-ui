<template>
  <div>示例</div>
  <h1>示例1</h1>
  <div>
    <button>你好</button>
    <Button theme = 'button'>你好么，老哥</Button>
    <Button theme = 'link'>你好么，老哥</Button>
    <Button theme = 'text'>你好么，老哥</Button>
  </div>
</template>

<script setup lang='ts'>
import Button from '../libs/Button.vue';
const onClick =()=>{
  console.log('fuck');
}
</script>

<style lang='scss' scoped>

</style>
