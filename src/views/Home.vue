<template lang="pug">
.home
  h3.p-text-center 🎯 About Me
  hr.p-my-3

  p.description.p-text-center I am a full stack web-developer who has successful 10+ years of experience.
    |  Always passionate to use latest technologies for your projects,
    |  focusing on quality than speed on everything I am doing.
    |  I love to get on challenging projects. Also I can improve your website in all ways,
    |  and analyze databases for further optimization.

  p 📚 [RU] Wrote a simple article on habr.com 😅
  p https://habr.com/post/433178

  hr
  // For portfolio
  p 📦 I created a simple module for Nuxt.js:
  p https://www.npmjs.com/package/nuxt-feed-yandex-market

  p 📦 also a plugin for WordPress:
  p https://wordpress.org/plugins/images-optimize-and-upload-cf7

  Skills
  Contacts

  p.description.p-text-center My top priority is the quality of the final product, that's why I always keep the client posted on project status and discuss all possible issues that may occur in the future.
  hr.p-my-3

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Contacts from '@/components/Contacts.vue'
import Skills from '@/components/Skills.vue'

@Options({
  components: {
    Contacts,
    Skills,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  .description {
    font-size: 20px;
  }
}
</style>
