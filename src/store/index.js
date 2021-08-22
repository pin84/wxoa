import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const v1 = {
  state: {
    isShowNav: true
  },
  mutations: {
    isShowNav(state, params) {
      state.isShowNav = params
    },
  },
  actions: {
  },
  modules: {
  }
}
export default new Vuex.Store({
  modules: {
    v1
  }
})
