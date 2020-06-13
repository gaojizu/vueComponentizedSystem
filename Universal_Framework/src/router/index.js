import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/components/login') //登录
const main = () => import('@/components/main') //主页面
const table = () => import('@/referenceComponent/table')
const steps = () => import('@/referenceComponent/steps')
const bootStrapTable = () => import('@/referenceComponent/bootStrapTable')
const shoppingCar = () => import('@/referenceComponent/shoppingCar')
const stop = () => import('@/referenceComponent/stop')
const search = () => import('@/referenceComponent/search')
const uploadFile = () => import('@/referenceComponent/uploadFile')
const base = () => import('@/referenceComponent/base')
const fileZip = () => import('@/referenceComponent/fileZip')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/table/:pageFlag',
      name: 'table',
      component: table
    },
    {
      path: '/steps/:pageFlag',
      name: 'steps',
      component: steps
    }, {
      path: '/bootStrapTable/:pageFlag',
      name: 'bootStrapTable',
      component: bootStrapTable
    }, {
      path: '/stop/:pageFlag',
      name: 'stop',
      component: stop
    },
    {
      path: '/search/:pageFlag',
      name: 'search',
      component: search
    }, {
      path: '/shoppingCar/:pageFlag',
      name: 'shoppingCar',
      component: shoppingCar
    }, {
      path: '/uploadFile/:uploadFile',
      name: 'uploadFile',
      component: uploadFile
    },//
    {
      path: '/fileZip/:fileZip',
      name: 'fileZip',
      component: fileZip
    },{
      path: '/fileZip/:fileZip',
      name: 'fileZip',
      component: fileZip
    }
  ]
})
