<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-show="menuVisible">
        <h2 class="topsize">文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
let width;
onMounted(() => {
  window.onresize = () => {
    width = ref(document.documentElement.clientWidth);
  };
});
watch(width, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

import Topnav from "../components/Topnav.vue";
import { computed, inject, onMounted, onUpdated, ref, Ref, watch } from "vue";

const menuVisible = inject<Ref<boolean>>("menuVisible");
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 30;
  ::v-deep .topnav {
    background: #ffffff;
    box-shadow: 0 0 1px rgb(0 0 0 / 25%);
  }
  > .nav {
    flex-shrink: 0;
  }

  > .content {
    display: flex;
    flex-grow: 1;
    padding-left: 256px;
    margin: 30px 0 0 0;
    @media(max-width:1200px){
      margin: 0 ;
    }
    @media (min-width: 600px) {
      aside {
        display: inline-block;
      }
    }
    @media(max-width: 500px) {
      padding-left: 0;
    }

    > aside {
      flex-shrink: 0;
      background: #ffffff;
      //background: linear-gradient(135deg, rgba(2, 0, 36, 1) 0%, rgba(167, 211, 253, 1) 0%, rgba(186, 190, 248, 1) 100%);
      width: 250px;
      padding: 80px 0 16px 0;
      position: fixed;
      box-shadow: 0 5px 5px RGB(51 51 51 / 10%);
      top: 0;
      left: 0;
      height: 100%;
      z-index: 30;
      > h2 {
        margin: 4px 0;
        padding: 0 26px;
        font-weight: 700;
        font-size: 18px;
      }

      > ol {
        > li {
          &:hover {
            background: RGBA(244, 192, 212, 0.8);
          }
          > a {
            padding: 4px 36px;
            display: block;
            color: #333;
            font-size: 14px;
          }

          .router-link-active {
            //background: #f4c0d4;
            background: RGBA(244, 192, 212, 0.7);
            border-right: 4px solid #efabc4;
          }
        }
      }
    }
    > main {
      margin-top: 70px;
      flex-grow: 1;
      padding: 16px;
      background: #fff;
      overflow: auto;
      transition: all 250ms;
    }
  }
}
</style>
