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

  .p-grid
    .p-col-12.p-md-6(v-for="(item, index) in list" :key="index")
      Card(@click="openDialog(item)" :class="{more: isLotOfDescription(item.text)}")
        template(#header)
          div(style="height:160px; overflow: hidden;")
            img(:alt="item.title" :src="item.src" )

        template(#title)
          h4 {{item.title}}

        template(#subtitle)
          p(v-html="item.subtitle")

        template(#content)
          | {{getText(item.text)}}
          a.more(v-if="item.text.length > length" @click="openDialog(item)")   More >

        template(#footer)
          hr
          Tag(v-for="tag in item.tags" :key="tag" :value="tag" rounded)
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PORTFOLIO from '@/data/portfolio'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'

@Options({
  components: {
    Button,
    Dialog,
    Card,
    Tag,
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
    if (!this.isLotOfDescription(text)) {
      return text
    }

    const cutText = text.slice(0, this.length)
    const arrText = cutText.split(' ')

    arrText.splice(arrText.length - 1, 1)

    return arrText.join(' ') + '...'
  }

  openDialog(item: any): void {
    if (!this.isLotOfDescription(item.text)) {
      return
    }

    this.dialogIsOpened = true
    this.dialog = { ...item }
  }

  closeMaximizable() {
    this.dialogIsOpened = false
    this.dialog = { ...this.defaultDialog }
  }

  isLotOfDescription(text: string): boolean {
    return text.length > this.length
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

    .more,
    &.more {
      cursor: pointer;
    }

    h4 {
      color: var(--primary-color-text);
      margin: 0;
    }

    .p-card-header img {
      min-height: 160px;
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

    .p-tag {
      color: var(--primary-color-text);
      background-color: #5d9cec;
      box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
      margin: 3px;
    }
  }
}
</style>
