<template lang="pug">
.portfolio.p-mb-6
  h3.p-text-center Portfolio
  hr

  teleport(to="body")
    Dialog(:header="dialog.title" v-model:visible="dialogIsOpened" :modal="true")
      img(v-if="dialog.src" :alt="dialog.title" :src="dialog.src")
      p.p-m-0 {{dialog.text}}

      hr
      .p-tag.p-tag-rounded.p-m-1(v-for="tag in dialog.tags" :key="tag") {{tag}}

      // template(#footer)
        Button(label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text")
        Button(label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus)

  .p-grid
    .p-col-12.p-md-6(v-for="(item, index) in list" :key="index")
      Card
        template(#header)
          img(:alt="item.title" :src="item.src")

        template(#title)
          h4 {{item.title}}

        template(#subtitle)
          | {{item.subtitle}}

        template(#content)
          | {{getText(item.text)}}
          a.more(v-if="item.text.length > length" @click="openDialog(item)")   More >

        template(#footer)
          hr
          .p-tag.p-tag-rounded(v-for="tag in item.tags" :key="tag") {{tag}}

  p 📦 also a plugin for WordPress:
  p https://wordpress.org/plugins/images-optimize-and-upload-cf7
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PORTFOLIO from '@/data/portfolio'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Card from 'primevue/card'

@Options({
  components: {
    Button,
    Dialog,
    Card,
  },
})
export default class Portfolio extends Vue {
  dialogIsOpened = false
  length = 200
  dialog = {}
  defaultDialog = {
    src: '',
    title: '',
    subtitle: '',
    text: '',
    tags: [],
  }

  getText(text: string): string {
    const cutText = text.slice(0, this.length)
    const arrText = cutText.split(' ')

    arrText.splice(arrText.length - 1, 1)

    return arrText.join(' ') + '...'
  }

  openDialog(item: any): void {
    this.dialogIsOpened = true
    this.dialog = { ...item }
  }

  closeMaximizable() {
    this.dialogIsOpened = false
    this.dialog = { ...this.defaultDialog }
  }

  get list() {
    return PORTFOLIO
  }
}
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
      color: var(--primary-color-text);
      margin: 0;
    }

    .p-card-subtitle {
      font-size: 14px;
      margin-bottom: 15px;
      font-weight: 100;
    }

    .p-card-footer,
    .p-card-content {
      padding: 0;
    }
    .more {
      cursor: pointer;
    }

    .p-tag {
      color: var(--primary-color-text);
      background-color: #5d9cec;
      box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
      margin: 3px;
    }
  }
}
</style>
