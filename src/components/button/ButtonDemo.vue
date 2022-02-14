<template>
  <h2>Button 示例</h2>
  <h3>基础用法</h3>
  <Demo :component="Button1Demo" />
  <h3>支持size</h3>
  使用<span>size</span>属性改变<span>Button</span>组件的大小
  <Demo :component="Button2Demo" />
  <h3>支持level</h3>
  使用<span>level</span>属性改变<span>button</span>组件的颜色，以此突显<span>Button</span>
  组件的重要等级。
  <Demo :component="Button3Demo" />
  <h3>支持disabled</h3>
  使用<span>disabled</span>属性改变<span>Button</span>组件的状态，以此禁止点击<span>Button</span>组件
  <Demo :component="Button4Demo" />
  <h3>支持显示加载中</h3>
  使用<span>loading</span>属性标识<span>Button</span>组件正在加载
  <Demo :component="Button5Demo" />

</template>

<script setup lang='ts'>
import Button1Demo from './Button1.demo.vue'
import Button2Demo from './Button2.demo.vue'
import Button3Demo from './Button3.demo.vue'
import Button4Demo from './Button4.demo.vue'
import Button5Demo from './Button5.demo.vue'

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

