<template>
  <h1>tabs示例</h1>
  <h3>基础用法</h3>
  <p>使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Dialog</span>组件，指定默认的<span>Tab</span></p>
  <Demo :component="Tabs1Demo" />
</template>

<script setup lang='ts'>

import Demo from '../Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue'

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
