<template lang="pug">
.home
  AboutMe
  Skills
  Contacts

  p.description.p-text-center My top priority is the quality of the final product, that's why I always keep the client posted on project status and discuss all possible issues that may occur in the future.
  br
  Portfolio
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Portfolio from '@/components/Portfolio.vue'
import Contacts from '@/components/Contacts.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'

@Options({
  components: {
    Portfolio,
    Contacts,
    AboutMe,
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
