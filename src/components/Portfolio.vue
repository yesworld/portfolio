<template lang="pug">
.portfolio
  h3.p-text-center ✏️ Portfolio
  hr.p-my-3

  p 📦 I created a simple module for Nuxt.js:
  p https://www.npmjs.com/package/nuxt-feed-yandex-market

  p 📦 also a plugin for WordPress:
  p https://wordpress.org/plugins/images-optimize-and-upload-cf7
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
})
export default class Portfolio extends Vue {}
</script>

<style lang="scss"></style>
