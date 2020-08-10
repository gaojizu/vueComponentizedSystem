const state = {
  systemName: '是系统啊' //基础数据 /姓名
}
const getters = {
  GET_BASENAME() {
    return state.baseName
  }
}
const mutations = {
  SET_SYSTEMNAME_MUTATIONS(state, currsystemName) {
    state.systemName = currsystemName
  }
}
const actions = {
  SET_SYSTEMNAME_ACTIONS(state,data){
    state.commit('SET_SYSTEMNAME_MUTATIONS',data)
  }
}
export default{
  namespaced:true,
  state,
  mutations,
  actions
}
