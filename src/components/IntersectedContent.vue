<template>
  <div class="placeholder">
    <slot v-if="loaded"></slot>
  </div>
</template>

<script>
export default {
  emits: ['onloaded'],
  props: {
    targetScroll: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      loaded: false,
      root: window,
      observer: null,
    }
  },
  mounted() {
    if (this.loaded) {
      return
    }

    if (this.targetScroll != null) {
      const target = document.querySelector(this.targetScroll)
      if (this.targetScroll != null) {
        this.root = target
      }
    }

    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.root,
      threshold: 0.25,
      // threshold: [0, 0.25, 0.5, 0.75, 1],
    })

    this.observer.observe(this.$el)
  },
  unmounted() {
    this.observer.disconnect()
  },
  methods: {
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) {
          return
        }

        this.observer.unobserve(target)
        // target.classList.add('testToSee')
        this.loaded = true
      })
    },
  },
}
</script>
<style lang="scss">
.placeholder {
  min-height: 300px;
}
</style>
