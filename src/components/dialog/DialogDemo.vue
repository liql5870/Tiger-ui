<template>
  <h1>Dialog示例</h1>
  <h3>基础用法</h3>
  <p>使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Dialog</span>组件</p>
  <Demo :component="Dialog1Demo" />
  <h3>使用TS打开Dialog</h3>
  <p>引入<span>openDialog</span>创建一个<span>Dialog</span>组件</p>
  <Demo :component="Dialog2Demo" />
</template>

<script setup lang='ts'>

import Demo from '../Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'

</script>

<style lang='scss' scoped>
$color:#efabc4;
h3{
  margin: 10px 0;
  &::before{
    content: "#";
    color: $color;
    font-weight: bold;
    margin: 0 2px;
  }
}
span{
  color: $color;
}
</style>
