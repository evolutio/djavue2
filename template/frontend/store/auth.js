import api from '~api'

export const state = () => ({
  currentUser: undefined
})

export const mutations = {
  setCurrentUser (state, user) {
    state.currentUser = user
  }
}

export const getters = {
  loggedIn (state) {
    return !!(state.currentUser && state.currentUser.permissions)
  }
}

export const actions = {
  async whoami ({ commit }) {
    const data = await api.whoami()
    if (data.authenticated) {
      commit('setCurrentUser', data.user)
    } else {
      commit('setCurrentUser', null)
    }
  }
}
