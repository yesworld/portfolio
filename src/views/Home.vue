<template lang="pug">
.home
  p.description.p-text-center I am a full stack web-developer who has successful 10+ years of experience.
    |  Always passionate to use latest technologies for your projects,
    |  focusing on quality than speed on everything I am doing.
    |  I love to get on challenging projects. Also I can improve your website in all ways,
    |  and analyze databases for further optimization.
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
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
