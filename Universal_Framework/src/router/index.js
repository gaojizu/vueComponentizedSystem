import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('@/components/main') //主页面
const referTable = () => import('@/referenceComponent/referTable')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/referTable',
      name: 'referTable',
      component: referTable
    },
  ]
})
