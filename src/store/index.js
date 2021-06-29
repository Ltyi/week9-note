import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: true
  },

  mutations: {
    SET_DARK_MODE(state, payload) {
      state.darkMode = payload
    }
  },

  actions: {
    setDarkMode({ commit }, payload) {
      commit('SET_DARK_MODE', payload)
    }
  },

  modules: {}
})
