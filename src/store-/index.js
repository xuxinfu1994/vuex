import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getter'
import actions from './action'
import mutations from './mutation'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  // getters,
  state,
  actions,
  mutations
})

export default store
