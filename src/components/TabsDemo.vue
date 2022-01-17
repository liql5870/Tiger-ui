<template>
  <div>tabs 示例 </div>
  <h1>示例1</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22222222">内容2</Tab>
  </Tabs>
</template>

<script setup lang='ts'>
import {ref} from 'vue';
import Tabs from '../libs/Tabs.vue';
import Tab from '../libs/Tab.vue';

const x = ref("导航1")
</script>

<style lang='scss' scoped>

</style>
