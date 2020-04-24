import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('@/components/main') //主页面
const commonTable = () => import('@/commonComponents/commonTable')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/commonTable',
      name: 'commonTable',
      component: commonTable
    },
  ]
})
