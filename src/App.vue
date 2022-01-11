<template>

  <router-view>
  </router-view>

</template>

<script  setup lang="ts">
    import {provide, ref} from 'vue';
    const menuVisible =ref(true)
    provide('menuVisible',menuVisible)

</script>

