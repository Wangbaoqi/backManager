import Vue from 'vue'
import Vuex from 'vuex'


import limitControl from './modules/limit'

Vue.use(Vuex)


export default new Vuex.Store({
  // modules: {
  //   limitControl
  // }
  state: {
    count: 1,
  },
  // 获取数据
  getters: {
    getCount: state => {
      return  `${state.count}元`
    }
  },
  // 修改数据
  mutations: {
    increase: state => {
      state.count++
    }
  },

  // 异步操作数据
  actions: {
    increaseAynsc: ({commit, state}, payload) => {
      setTimeout(() => {
        commit('increase')
      }, 1000)
    }
  }
})