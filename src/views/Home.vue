<template lang="pug">
.home
  AboutMe
  Skills
  Contacts

  p.description.p-text-center My top priority is the quality of the final product, that's why I always keep the client posted on project status and discuss all possible issues that may occur in the future.
  br

  IntersectedContent(targetScroll=".parallax")
    transition(name="fade")
      AsyncPortfolio

  // div(style="height: 400px")

  IntersectedContent(targetScroll=".parallax")
    transition(name="fade")
      AsyncDonate
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { defineAsyncComponent } from 'vue'

import IntersectedContent from '@/components/IntersectedContent.vue'
import Contacts from '@/components/Contacts.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'

@Options({
  components: {
    AsyncPortfolio: defineAsyncComponent(() => import('@/components/Portfolio.vue')),
    AsyncDonate: defineAsyncComponent(() => import('@/components/Donate.vue' /* webpackChunkName: "donate" */)),
    IntersectedContent,
    Contacts,
    AboutMe,
    Skills,
  },
})
export default class Home extends Vue {
  // created() {}
}
</script>

<style lang="scss">
.home {
  .description {
    font-size: 20px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
