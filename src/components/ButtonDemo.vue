<template>
  <div>示例</div>
  <h1>示例1</h1>
  <div >
    <Button >你好</Button>
    <Button theme = 'button'>你好</Button>
    <Button theme = 'link'>你好</Button>
    <Button theme = 'text'>你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size = 'big'>你好</Button>
    <Button >你好</Button>
    <Button size = 'small'>你好</Button>
  </div>
  <div>
    <Button theme ='link' size = 'big'>你好</Button>
    <Button theme ='link'  >你好</Button>
    <Button theme ='link' size = 'small'>你好</Button>
  </div>
  <div>
    <Button theme ='text' size = 'big'>你好</Button>
    <Button theme ='text' >你好</Button>
    <Button theme ='text' size = 'small'>你好</Button>
  </div>
</template>

<script setup lang='ts'>
import Button from '../libs/Button.vue';

const onClick =()=>{
  console.log('fuck');
}
</script>
<script>

</script>
<style lang='scss' scoped>


</style>
