<template>
  <div class="tiger-tabs">
    <div class="tiger-tabs-nav" ref="container">
      <div class="tiger-tabs-nav-item"
           @click='select(t)'
           :class="{selected: t === selected}"
           v-for="(t,index) in title"
           :key="index"
           :ref="el =>{if(el) navItems[index] =el}"

      >{{ t }}
      </div>
      <div class="tiger-tabs-nav-indicator" ref="indicator"></div>
    </div>

    <div class="tiger-tabs-content">
      <component class="tiger-tabs-content-item" :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Tab from './Tab.vue';
import {computed, onMounted, onUpdated, ref, useSlots} from 'vue';
import {types} from 'sass';

const props = defineProps({
  selected: {
    type: String
  }
});
const navItems = ref<HTMLDivElement[]>([]);
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null);
const divs = navItems.value;
const x = ()=>{
  const result = divs.filter(div => div.classList.contains('selected'))[0];
  const {width} = result.getBoundingClientRect();
  indicator.value.style.width = width + 'px';
  const {left: left1} = container.value.getBoundingClientRect();
  const {left: left2} = result.getBoundingClientRect();
  const left = left2 - left1;
  indicator.value.style.left = left + 'px';
}
onMounted(() => {x()});
onUpdated(() => {x()});
const emit = defineEmits({'update:selected': String});
const defaults = useSlots().default();
defaults.forEach((tag) => {
  if (tag.type !== Tab) {
    throw new Error('Tabs 子标签必须是Tab');
  }
});
let title = defaults.map((tag) => {
  return tag.props.title;
});
const current = computed(() => {
  return defaults.find(tag => tag.props.title === props.selected);
});

const select = (title) => {
  emit('update:selected', title);
};

</script>

<style lang='scss' scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.tiger-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition:left 250ms;
    }
  }

}

</style>
