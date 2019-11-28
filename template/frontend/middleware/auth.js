export default (ctx) => {
  if (ctx.store.state.auth.currentUser === undefined) {
    return ctx.store.dispatch('auth/whoami').then(() => {})
  }
}
