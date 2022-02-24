<template>
  <template v-if="visible">
<!--    当visible 为true时候，整个dialog组件开始显示出来-->
    <teleport to="body">
<!--      这一个属于遮罩层，点击click会触发onclickOverlay事件-->
      <div class="tiger-dialog-overlay" @click="onClickOverlay"></div>
<!--      // 这个属于dialog的整体正常应该是全部显示出来的。-->
      <div class="tiger-dialog-wrapper">
        <div class="tiger-dialog">
<!--          头部标题，接受父组件传递过来值，使用了slot插槽-->
          <header>
<!--            插槽，谁绑定了title，谁就出现再这里-->
            <slot name="title" />
            <span @click="close" class="tiger-dialog-close"></span>
          </header>
<!--          主要内容，也是使用了具名插槽-->
          <main>
            <slot name="content" />
          </main>
<!--          这个是dialog组件结尾时用,可以直接现实的按钮-->
          <footer>
<!--            点击会调用click事件，会触发方法onclickOk-->
            <Button level="main" @click="onClickOk">Ok</Button>

            <Button @click="onClickCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script setup lang="ts">
import Button from "./Button.vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  closeonClickOverlay: {
    type: Boolean,
    default: true,
  },
  ok: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
  title: {
    type: String,
    default: "标题",
  },
});

const emit = defineEmits({
  "update:visible": String,
});
// close方法会向父元素提交事件“update:visible”来更新visible的值为false
const close = () => {
  emit("update:visible", false);
};
// onclickoverlay方法，如果得到的closeonclickoverlys的值为true。则执行close（）方法，
// 关键是这个closeonclickly的值是如何获取的，是通过什么方式传递过来的。
const onClickOverlay = () => {
  if (props.closeonClickOverlay) {
    close();
  }
};
// 这个方法表示的是，如果属性的OK且调用属性OK值不等于false，也就是如果等于true的话，即props.ok 和props.ok()都为true的话，执行close()函数
const onClickOk = () => {
  close();
  // if (props.ok && props.ok() !== false) {
  //
  // };

}

const onClickCancel = () => {
  // props.cancel && props.cancel();
  close();
};
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;

.tiger-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 50;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    //用这种方法去写出了一个叉号，包含下面的方法都是的。
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 2px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    //
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
