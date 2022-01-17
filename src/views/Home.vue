<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>Tiger UI</h1>
      <h2>一个简单易用的UI框架</h2>
      <p class="actions">
        <a href="">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-lights"></use>
    </svg>
  </div>

</template>

<script lang='ts'>
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>

<style lang='scss' scoped>
$green:#00a7aa;
$color: #38ada7;
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
}
.features{
  >svg{
    width: 64px;
    height: 64px;
  }

}
.banner{
  color:$color;
  padding: 100px 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a{
      background:$green;
      color: white;
      margin:0 8px;
      display: inline-block;
      padding: 8px 24px;
      border-radius:20px;
      text-decoration:none;
     &:hover{
       background: #417270;
     }
    }
  }

}
</style>
