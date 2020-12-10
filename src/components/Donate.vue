<template lang="pug">
.donate.p-mb-6
  h3.p-text-center Donate
  hr
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
})
export default class Donate extends Vue {
  created() {
    alert(2)
  }
}
</script>

<style lang="scss">
.donate {
  > h3:after {
    content: '😉';
    display: inline-block;
    margin-left: 15px;
  }
}
</style>
