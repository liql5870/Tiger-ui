<template>
  <div>
    <div v-for="(t,index) in title" :key="index">{{t}}</div>
    <component v-for='(c,index) in defaults ' :is="c" :key="index"/>
  </div>
</template>

<script setup lang='ts'>
import Tab from './Tab.vue';
import {useSlots} from 'vue';

const defaults = useSlots().default();
defaults.forEach((tag) => {
  if (tag.type !== Tab) {
    throw new Error('Tabs 子标签必须是Tab');
  }
});
let title = defaults.map((tag) => {
  return tag.props.title;
});
</script>

<style lang='scss' scoped>

</style>
