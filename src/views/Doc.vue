<template>
  <div>
   <Topnav />
    <div class="content">
      <aside>边栏</aside>
      <aside>主内容</aside>
    </div>
  </div>
</template>

<script lang='ts'>


import Topnav from '../components/Topnav.vue';
export default {
  components: {Topnav}
};
</script>

<style lang='scss' scoped>

</style>
