const state = {
  baseName: '是CLEARLOVE啊' //基础数据 /姓名
}
const getters = {
  GET_BASENAME() {
    return state.baseName
  }
}
const mutations = {
  SET_BASENAME_MUTATIONS(state, currbaseName) {
    state.baseName = currbaseName
  }
}
const actions = {
  SET_BASENAME_ACTIONS(state,data){
    state.commit('SET_BASENAME_MUTATIONS',data)
  }
}
export default{
  namespaced:true, //命名空间 当模块被注册后，它存在的getter actions mutations均会自动根据模块的路径调整命名
  state,
  mutations,
  actions
}
