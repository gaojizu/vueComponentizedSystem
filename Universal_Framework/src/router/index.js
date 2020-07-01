/**
 * 配置路由文件
 */
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
const moment = () => import('@/referenceComponent/moment')
const copy = () => import('@/referenceComponent/copy')
const roll = () => import('@/referenceComponent/roll')
const getKeyandValue = () => import('@/referenceComponent/getKeyandValue')
const exportExcel = () => import('@/referenceComponent/exportExcel')
const temporary = () => import('@/referenceComponent/temporary')
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
    },{
      path: '/moment/:moment',
      name: 'moment',
      component: moment
    },{
      path:'/roll/:roll',
      name:'roll',
      commponent:roll
    },{
      path: '/copy/:copy',
      name: 'copy',
      component: copy
    },{
      path: '/base/:base',
      name: 'base',
      component: base
    },{
      path: '/getKeyandValue/:getKeyandValue',
      name: 'getKeyandValue',
      component: getKeyandValue
    },{
      path: '/exportExcel/:exportExcel',
      name: 'exportExcel',
      component: exportExcel
    },{
      path: '/temporary/:temporary',
      name: 'temporary',
      component: temporary
    }
  ]
})
