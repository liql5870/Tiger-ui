<template>
  <div>
    <div class="topnav">
      <div class="logo" @click="toggleMenu">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {inject, Ref} from 'vue';

const menuVisible = inject<Ref<boolean>>('menuVisible');
console.log(menuVisible);
console.log('Doc aside 获取的menuVisible 为：' + menuVisible.value);
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

</script>

<style lang='scss' scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    border: 1px solid red;
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em
    }
  }
}
</style>
