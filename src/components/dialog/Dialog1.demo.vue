<demo>
常规使用
</demo>
<template>
  <div>
<!--    点击toggle会修改x值为相反，-->
    <Button @click="toggle">打开对话框</Button>
<!--  引用了子组件dialog,双向绑定了x的值并传给子组件，x会影响到子组件的展示，使用了v-show, 它会把元素设置为display：none-->
<!--    并且把属性closeonClickOverlay传递给了dialog 为false 传递了OK变量，值为一个函数 绑定了cancle 变量，值为一个函数-->
<!--    ok的返回值是一个false,cancale 的返回值是一个空-->
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
<!--      这里使用了具名插槽的title-->
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
<!--      这里也是用了具名插槽写入内容-->
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>

    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from '../../libs/Dialog.vue';
import Button from '../../libs/Button.vue';
import {ref} from 'vue';


const x = ref(false);
const toggle = () => {
  // 点击toggle时，x由负数变为正数，并传递给dialog子组件
  x.value = !x.value;
};
const f1 = () => {
  return false;
};
const f2 = () => {
};
</script>
