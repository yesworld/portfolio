<template lang="pug">
.home
  p.description.p-text-center I am a full stack web-developer who has successful 10+ years of experience.
    |  Always passionate to use latest technologies for your projects,
    |  focusing on quality than speed on everything I am doing.
    |  I love to get on challenging projects. Also I can improve your website in all ways,
    |  and analyze databases for further optimization.

  Skills

  p.description.p-text-center My top priority is the quality of the final product, that's why I always keep the client posted on project status and discuss all possible issues that may occur in the future.
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Skills from '@/components/Skills.vue'

@Options({
  components: {
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
