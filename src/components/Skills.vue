<template lang="pug">
.skills.p-mt-6
  h3.p-text-center My skills
  hr

  .p-grid
    .p-col-12.p-md-6
      h4.p-text-center Frontend
      .item
        label JavaScript
        Rating(v-model="js" :cancel="false")
      .item
        label TypeScript
        Rating(v-model="ts" :cancel="false")
      .item
        label Nuxt.js
        Rating(v-model="nuxt" :cancel="false")
      .item
        label Vue 3
        Rating(v-model="vue" :cancel="false")
      .item
        label Technical SEO
        Rating(v-model="seo" :cancel="false")
      .item
        label Angular
        Rating(v-model="angular" :cancel="false")
      .item
        label React
        Rating(v-model="react" :cancel="false")

    .p-col-12.p-md-6
      h4.p-text-center Backend
      .item
        label PHP*
        Rating(v-model="php" :cancel="false")
      .item
        label MySql
        Rating(v-model="mysql" :cancel="false")
      .item
        label Node.js
        Rating(v-model="nodejs" :cancel="false")
      .item
        label Nest.js
        Rating(v-model="nest" :cancel="false")
      .item
        label MongoDB
        Rating(v-model="mongo" :cancel="false")
      .item
        label DevOps**
        Rating(v-model="linux" :cancel="false")
      .item
        label WordPress
        Rating(v-model="wp" :cancel="false")

    .p-col-12
      .item
        label WebSocket
        Rating(v-model="ws" :cancel="false")
      .item
        label Total score / Average:
        h4.p-my-2 {{score}} / {{average}}

  p * Frameworks: Phalcon, Symfony, Laravel, Yii, Zend
  p ** Linux, Sphinx (search engine), Nginx, Apach, Git, Memcached, Redis
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Rating from 'primevue/rating'

@Options({
  components: {
    Rating,
  },
})
export default class Skills extends Vue {
  php = 4
  nodejs = 5
  mysql = 4
  mongo = 2
  linux = 3
  js = 5
  nest = 3
  ts = 4
  nuxt = 4
  vue = 5
  seo = 4
  ws = 5
  angular = 1
  react = 2
  wp = 4

  get average(): string {
    return (this.score / 15).toFixed(2)
  }

  get score(): number {
    return (
      this.php +
      this.nodejs +
      this.mysql +
      this.mongo +
      this.linux +
      this.js +
      this.nest +
      this.ts +
      this.nuxt +
      this.vue +
      this.seo +
      this.ws +
      this.angular +
      this.react +
      this.wp
    )
  }
}
</script>

<style lang="scss">
.skills {
  .item {
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    display: flex;

    &:nth-child(2n) {
      background: #fedcc857;
    }
    &:nth-child(2n + 1) {
      background: #fedcc833;
    }

    label {
      margin-right: 10px;
    }
  }
}
</style>
