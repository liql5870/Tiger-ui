<template>
  <article class="markdown-body" v-html="md">

  </article>
  <Markdown path="../markdown/install.md"/>
</template>

<script>
import Markdown from './Markdown.vue'
export default {
  components: {Markdown}
}
</script>

<style lang='scss' scoped>

</style>
