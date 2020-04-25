import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //引入elementui组件
import api from "./api/api";

Vue.use(ElementUI)
Vue.prototype.$api = api;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
