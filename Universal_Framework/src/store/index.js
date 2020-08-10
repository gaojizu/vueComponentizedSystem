import Vue from 'vue'
import Vuex from 'vuex'
import baseinfo from './modules/baseInfo.js'
import systemInfo from './modules/systemInfo.js'

Vue.use(vuex)
const store = new Vuex.Store({
  modules: {
    baseInfo,
    systemInfo
  }
})
export default store
