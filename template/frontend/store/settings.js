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
  async load ({ commit }) {
    const settings = await api.settings()
    commit('setall', settings)
  }
}

export const getters = {
  loaded (state) {
    return !!state.settings
  }
}
