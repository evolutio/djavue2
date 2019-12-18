import api from '~api'

export const state = () => ({
  settings: null
})

export const mutations = {
  setall (state, settings) {
    state.settings = settings
  }
}

export const actions = {
  load ({ commit }) {
    return api.settings()
      .then(settings => {
        commit('setall', settings)
      })
  }
}

export const getters = {
  loaded (state) {
    return !!state.settings
  }
}
