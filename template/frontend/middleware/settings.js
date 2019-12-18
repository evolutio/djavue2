export default ({req, store, redirect}) => {
  if (!store.getters['settings/loaded'] && !req.url.startsWith('/erro')) {
    return store.dispatch('settings/load').catch(e => {
      if (process.server) {
        console.error(`settings middleware error on ${req.url}`)  // eslint-disable-line
      }
    })
  }
}
