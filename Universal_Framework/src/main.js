import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //引入elementui组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
