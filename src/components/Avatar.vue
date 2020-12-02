<template lang="pug">
div#avatar.p-flex-column.p-jc-center.p-ai-center
  img(:src="data.avatar" alt="photo yesworld" width=150 height=150)
  h1.p-text-center {{data.h1}}
  h2.p-text-center {{data.title}}
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
  display: flex;
  flex-wrap: wrap;

  > h1,
  h2 {
    text-shadow: #2d112b 1px 0 10px;
  }

  > h1 {
    margin: 1em 0 0;
  }

  > img {
    border-radius: 100%;
  }
}
</style>
