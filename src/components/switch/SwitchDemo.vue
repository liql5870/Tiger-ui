<template>
  <h2>Switch组件示例</h2>
  <h3>基础用法</h3>
  <p>使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Switch</span>组件</p>

  <Demo :component="Switch1Demo" />
  <h3>支持disabled属性</h3>
  <p>在<span>Switch</span>组件中添加<span>disabled</span>属性，以此来禁用<span>Switch</span>组件</p>
  <Demo :component="Switch2Demo" />
</template>
<script setup lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from '../Demo.vue';


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
