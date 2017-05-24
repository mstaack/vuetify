export default {
  functional: true,

  props: {
    fixed: Boolean
  },

  render (h, { data, children, props }) {
    data.staticClass = data.staticClass ? `toolbar ${data.staticClass}` : 'toolbar'
    if (props.fixed) data.staticClass += ' toolbar--fixed'

    const pad = h('div', {
      'class': 'toolbar__pad'
    })

    const tools = h('div', {
      'class': 'toolbar__tools'
    }, children)

    return h('nav', data, [pad, tools])
  }
}
