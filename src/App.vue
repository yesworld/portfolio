<template lang="pug">
Parallax
  #nav
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
:root {
  --text-color-h: #ffeade;
}
body {
  background-color: #fedcc8;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
