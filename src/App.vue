<template>

  <router-view>
  </router-view>

</template>

<script  setup lang="ts">
    import {provide, ref} from 'vue';
    const width= document.documentElement.clientWidth
    const menuVisible =ref(width > 500)
    provide('menuVisible',menuVisible)

</script>

