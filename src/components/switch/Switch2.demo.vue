<demo>
支持 disabled
</demo>

<template>
  <Switch v-model:value="bool"  disabled/>
</template>

<script setup lang='ts'>
import {ref} from 'vue';

const bool = ref(false);


import Switch from '../../libs/Switch.vue';
</script>

<style lang='scss' scoped>

</style>
