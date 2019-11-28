export default {
  show (store, options) {
    store.commit('snack/set', {
      visible: true,
      text: options.text,
      color: options.color || 'success',
      timeout: options.timeout || 6000
    })
  }
}
