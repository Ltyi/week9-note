import { createStore } from 'vuex'
import _ from 'lodash'

export default createStore({
  state: {
    darkMode: true,
    starMode: false,
    viewMode: 'list-card',
    chunkSize: 6,
    addDialog: false,
    notes: [
      { id: 0, title: '標題1', star: true, cover: 1 },
      { id: 1, title: '標題2', star: true, cover: 2 },
      { id: 2, title: '標題3', star: false, cover: 3 },
      { id: 3, title: '標題4', star: true, cover: 4 },
      { id: 4, title: '標題5', star: true, cover: 5 }
    ]
  },

  mutations: {
    SET_DARK_MODE(state, payload) {
      state.darkMode = payload
    },

    SET_STAR_MODE(state, payload) {
      state.starMode = payload
    },

    SET_VIEW_MODE(state, payload) {
      state.viewMode = payload
    },

    SET_CHUNK_SIZE(state, payload) {
      state.chunkSize = payload
    },

    SET_ADD_DIALOG(state, payload) {
      state.addDialog = payload
    },

    SET_NOTES(state, payload) {
      state.notes = payload
    },

    ADD_NOTES(state, payload) {
      state.notes.push(payload)
    }
  },

  getters: {
    filteredNotes(state) {
      const arr = state.starMode ? state.notes.filter(item => item.star) : state.notes
      const clone = _.cloneDeep(arr)

      clone.unshift({ add: true })

      return state.viewMode === 'list-card' ? _.chunk(clone, state.chunkSize) : clone
    }
  },

  actions: {
    setDarkMode({ commit }, payload) {
      commit('SET_DARK_MODE', payload)
    },

    setStarMode({ commit, state }) {
      commit('SET_STAR_MODE', !state.starMode)
    },

    setViewMode({ commit }, payload) {
      commit('SET_VIEW_MODE', payload)
    },

    setChunkSize({ commit }, payload) {
      commit('SET_CHUNK_SIZE', payload)
    },

    setAddDialog({ commit }, payload) {
      commit('SET_ADD_DIALOG', payload)
    },

    setNoteStar({ commit, state }, id) {
      const clone = _.cloneDeep(state.notes)
      const item = clone.find(item => item.id === id)

      if (item) {
        item.star = !item.star
      }

      commit('SET_NOTES', clone)
    },

    addNote({ commit }, payload) {
      commit('ADD_NOTES', payload)
    }
  },

  modules: {}
})
