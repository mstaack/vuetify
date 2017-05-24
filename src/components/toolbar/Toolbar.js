export default {
  name: 'toolbar',

  data: () => ({
    marginTop: 0
  }),

  props: {
    fixed: Boolean,
    tools: Boolean
  },

  computed: {
    styles () {
      return {
        marginTop: `${this.marginTop}px`
      }
    }
  },

  watch: {
    tools () {
      this.onScroll()
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.onScroll()
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll, { passive: true })
  },

  methods: {
    onScroll () {
      if (!this.tools) return

      const marginTop = 56 - window.pageYOffset
      this.marginTop = marginTop >= 0 ? marginTop : 0
    }
  },

  render (h) {
    const data = {
      'class': {
        'toolbar': true,
        'toolbar--fixed': this.fixed,
        'toolbar--tools': this.tools
      }
    }

    const pad = h('div', {
      'class': 'toolbar__pad'
    }, [this.$slots.icon])

    const tools = h('div', {
      'class': 'toolbar__tools',
      style: this.styles
    }, [this.$slots.default])

    return h('nav', data, [pad, tools])
  }
}
