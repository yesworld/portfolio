<template lang="pug">
.aboutme.p-mb-6
  h3.p-text-center About Me
  hr

  p.description.p-text-center I am a full stack web-developer who has successful 10+ years of experience.
    |  Always passionate to use latest technologies for your projects,
    |  focusing on quality than speed on everything I am doing.
    |  I love to get on challenging projects. Also I can improve your website in all ways,
    |  and analyze databases for further optimization.

  p 📚 [RU] Wrote a simple article on habr.com 😅
  a(href="https://habr.com/post/433178" target="_blank" rel="nofollow noindex noopener") https://habr.com/post/433178
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
})
export default class AboutMe extends Vue {}
</script>

<style lang="scss">
.aboutme {
  > h3:after {
    content: '✏️';
    display: inline-block;
    margin-left: 15px;
  }
}
</style>
