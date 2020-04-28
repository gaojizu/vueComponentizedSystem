import Vue from 'vue'
import Router from 'vue-router'

const main = () => import('@/components/main') //主页面
const referTable = () => import('@/referenceComponent/referTable')
const referSteps = () => import('@/referenceComponent/referSteps')
const bootStrapTable = () => import('@/referenceComponent/bootStrapTable')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/referTable/:pageFlag',
      name: 'referTable',
      component: referTable
    },
    {
      path: '/referSteps/:pageFlag',
      name: 'referSteps',
      component: referSteps
    }, {
      path: '/bootStrapTable/:pageFlag',
      name: 'bootStrapTable',
      component: bootStrapTable
    },
  ]
})
