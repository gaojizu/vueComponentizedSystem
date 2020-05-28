import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //引入elementui组件
import 'element-ui/lib/theme-chalk/index.css'; //引入element样式表
import store from './store/stroe'
import api from "./api/api";
import Axios from 'axios';
import $ from 'jquery'
import commonHeader from "./commonComponents/commonHeader";
import commonBack from "./commonComponents/commonBack";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js'
import './mock/index' //引入mockjs 虚拟数据
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI)
Vue.component("common-back", commonBack)
Vue.component("common-header", commonHeader)
Vue.prototype.$api = api; //真实接口使用 需在api中配置相应的接口文件
Vue.prototype.$axios = Axios; //mockjs使用
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');
