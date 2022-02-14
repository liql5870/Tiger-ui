<template>
  <div>
    <div class="topnav">
      <router-link to="/" class="logo" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cat"></use>
        </svg>
      </router-link>
      <ul class="menu">
       <li>
         <router-link to="/doc/intro">文档</router-link>
       </li>
      </ul>
      <svg v-if='toggleMenuButtonVisible' class="toggleAside" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {inject, Ref} from 'vue';

const menuVisible = inject<Ref<boolean>>('menuVisible');
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};
defineProps({
  toggleMenuButtonVisible:{
    type:String,
    default:false
  }
})

</script>

<style lang='scss' scoped>
$color:#f792b5;
$hover-color: #f4f4f4;
.topnav {
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(167,211,253,1) 0%, rgba(186,190,248,1) 100%);
  box-shadow:0 0 1px #00000040;
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    &:hover{
      //color: $hover-color;
      border-bottom: 2px solid $color;
    }
    > svg{
      width: 32px;
      height: 32px;
    }

  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
      &:hover{
        border-bottom: 2px solid $color;
      }
    }
  }
  >.toggleAside{
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media(max-width: 500px) {
    > .menu {
      display: none
    }
    >.logo{
      margin: 0 auto;
    }
    > .toggleAside{
      display: inline-block;
    }
  }
}
</style>
