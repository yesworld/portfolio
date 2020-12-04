<template lang="pug">
.portfolio.p-mb-6
  h3.p-text-center Portfolio
  hr

  .p-grid
    .p-col-12.p-md-6
      Card
        template(#header)
          img(alt="user header" src="/img/portfolio/d2bet.png")

        template(#title)
          h4 Advanced Card

        template(#content) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt

        template(#footer)
          Button(icon="pi pi-check" label="Save")
          Button(icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em")

    .p-col-12.p-md-6
      Card
        template(#header)
          img(alt="user header" src="https://loremflickr.com/350/150")

        template(#title)
          h4 Advanced Card

        template(#content)
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt

        template(#footer)
          Button(icon="pi pi-check" label="Save")
          Button(icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em")

  p 📦 I created a simple module for Nuxt.js:
  p https://www.npmjs.com/package/nuxt-feed-yandex-market

  p 📦 also a plugin for WordPress:
  p https://wordpress.org/plugins/images-optimize-and-upload-cf7
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Button from 'primevue/button'
import Card from 'primevue/card'

@Options({
  components: {
    Button,
    Card,
  },
})
export default class Portfolio extends Vue {}
</script>

<style lang="scss">
.portfolio {
  > h3:after {
    content: '📦';
    display: inline-block;
    margin-left: 15px;
  }

  .p-card {
    background: var(--color-bg-light);
    overflow: hidden;

    h4 {
      margin: 0;
    }
  }
}
</style>
