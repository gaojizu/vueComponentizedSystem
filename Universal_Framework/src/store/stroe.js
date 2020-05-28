import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    headerName: '' || '当前页',
    loginInfos: {
      name : ''
    }

  },
  mutations: {
    headerName(state, val) {
      state.headerName = val;
      console.info(state, val)
    },

    loginName(state, val) {
      state.loginInfos.name = val

    }
  }
})
