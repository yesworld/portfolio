<template lang="pug">
Parallax
  nav
    router-link(to="/") Home |
    router-link(to="/about") About
  router-view
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Parallax from '@/components/Parallax.vue'

@Options({
  components: {
    Parallax,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  background-color: #fedcc8;
  margin: 0;
  padding: 0;
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);

  h1,
  h2 {
    color: var(--text-color-h);
  }

  h4 {
    margin: 0;
  }

  hr {
    width: 60%;
    border-color: #ca293e;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: blink;
    color: var(--color-light);
  }
}

nav {
  display: none;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
