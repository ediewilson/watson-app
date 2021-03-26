import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

// realtime firebase
const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPerformingRequest(state, val) {
      state.performingRequest = val
    },
    setDate(state, val) {
      state.sisters = val
    }
  },
})

export default store