<template>
  <div>
    <div class="topnav">
      <div class="logo">LOGO</div>
        <ul class="menu">
          <li>菜单1</li>
          <li>菜单2</li>
        </ul>
    </div>
    <div class="banner">
      <h1>Tiger-UI</h1>
      <h2>一个简单易用的UI框架</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>


export default {


};
</script>

<style lang='scss' scoped>
.topnav{
  background: pink;
  display: flex;
  padding: 16px;
  > .logo{
    border: 1px solid red;
    max-width:6em;
    margin-right: auto;
  }
  > .menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li{
      margin: 0 1em
    }
  }
}
</style>
