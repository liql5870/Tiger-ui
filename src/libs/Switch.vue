<template>
  <button class="tiger-switch" @click="toggle" :class="{'tiger-checked':value}">
    <span></span>
  </button>
</template>

<script lang='ts'>

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang='scss'>
$h: 22px;
$h2: $h - 4px;
.tiger-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;

  tiger-dialog:focus {
    outline: none;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: 50%;
    transition: left 0.25s
  }

  tiger-dialog.tiger-checked {
    background: blue;

    > span {
      left: calc(100% - #{$h2} - 2px)
    }
  }
}


</style>
