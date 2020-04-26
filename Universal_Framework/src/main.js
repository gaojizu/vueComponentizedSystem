import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //引入elementui组件
import 'element-ui/lib/theme-chalk/index.css'; //引入element样式表
import api from "./api/api";
import Axios from 'axios';
import './mock/index' //引入mockjs 虚拟数据

Vue.use(ElementUI)
Vue.prototype.$api = api; //真实接口使用 需在api中配置相应的接口文件
Vue.prototype.$axios = Axios; //mockjs使用
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');
