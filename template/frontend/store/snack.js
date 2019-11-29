export const state = () => ({
  snack: {}
})

export const mutations = {
  set (state, newstate) {
    state.snack = newstate
  },
  hide (state) {
    state.snack.visible = false
  }
}

export const getters = {
}

export const actions = {
}
