<template lang="pug">
div#avatar.p-grid.p-flex-column.p-jc-center.p-ai-center
  img(v-if="data.avatar" :src="data.avatar" alt="photo yesworld")
  h1 {{data.h1}}
  h2 {{data.title}}
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Avatar extends Vue {
  public data: any = {
    avatar: '/img/avatar.jpeg',
    h1: "Hey! I'm Damir.",
    title: "I'll create a top-notch website for your big project!",
    rotate: ['business!', 'e-shop!', 'big project!'],
  }
}
</script>

<style lang="scss">
#avatar {
  align-items: center;
  height: 100%;
  position: relative;
  color: var(--text-color-h);

  > h1,
  h2 {
    text-shadow: #2d112b 1px 0 10px;
  }

  > h1 {
    margin: 1em 0 0;
  }

  > img {
    border-radius: 100%;
    width: 150px;
  }
}
</style>
