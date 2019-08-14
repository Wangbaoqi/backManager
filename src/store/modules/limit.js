const state = {
  count: 1
}

const getters = {
  getCount: state =>  {
    return state.count ++
  }
}

const actions = {

}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}