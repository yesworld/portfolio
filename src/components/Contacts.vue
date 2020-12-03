<template lang="pug">
.contacts.p-mt-6
  h3.p-text-center I'm here because I love to work with interesting people. 😉
  hr.p-my-3

  Tree(:value="nodes" @click="clickTree" :expandedKeys="expandedKeys" :loading="loading" @node-expand="onNodeExpand")
    template(#url="slotProps")
      a(:href="slotProps.node.data" target="_blank" rel="nofollow noindex noopener") {{slotProps.node.label}}
    template(#default="slotProps")
      b {{slotProps.node.label}}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CONTACTS from '@/data/contact'
import Tree from 'primevue/tree'

@Options({
  components: {
    Tree,
  },
})
export default class Contacts extends Vue {
  expandedKeys: any = {}
  loading = false

  nodes = [
    {
      key: 0,
      label: '📫 Contacts. Click to see!',
      // leaf: false,
      children: [],
    },
  ]

  onNodeExpand() {
    // this.fetch()
  }

  clickTree() {
    this.fetch()
    if (this.expandedKeys[this.nodes[0].key] === false) {
      this.expandedKeys = {}
    } else {
      this.expandedKeys[this.nodes[0].key] = true
    }
  }

  fetch() {
    if (this.nodes[0].children.length > 0) {
      return
    }

    console.log(1)
    this.loading = true

    setTimeout(() => {
      // @ts-ignore
      this.nodes[0].children = CONTACTS
      this.loading = false
    }, 1000)
  }
}
</script>

<style lang="scss">
.contacts {
  .p-tree {
    border: 1px solid #fedcc8;
    background: #573a4a;
  }

  .p-treenode-children {
    .p-treenode:nth-child(2n + 1) {
      background: #fedcc857;
      border-radius: 6px;
    }

    .p-treenode-content {
      margin: 0;
      padding: 0 !important;

      > .p-treenode-icon,
      > button {
        display: none;
      }

      .p-treenode-label {
        width: 100%;

        > a {
          padding: 10px;
          width: 100%;
          display: inline-block;
          font-weight: 800;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
