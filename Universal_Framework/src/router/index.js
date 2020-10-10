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
const sort = () => import('@/referenceComponent/sort')
const cutscreen = () => import('@/referenceComponent/cutscreen')
const depthResponse = () => import('@/referenceComponent/depthResponse')
const baseAssembly = () => import('@/referenceComponent/baseAssembly')
const tree = () => import('@/referenceComponent/tree')
const Unbound = () => import('@/referenceComponent/Unbound')
const vueModules = () => import('@/referenceComponent/vueModules')
const vantDropdownMenu = () => import('@/referenceComponent/vant-dropdown-menu')
const use_promise = () => import('@/referenceComponent/use_promise')
const drag = () => import('@/referenceComponent/drag')
const el_tree = () => import('@/referenceComponent/el_tree')
const echart = () => import('@/referenceComponent/echart')
const temporary = () => import('@/referenceComponent/temporary')
Vue.use(Router)

export default new Router({
  routes: [{
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
    }, //
    {
      path: '/fileZip/:fileZip',
      name: 'fileZip',
      component: fileZip
    }, {
      path: '/fileZip/:fileZip',
      name: 'fileZip',
      component: fileZip
    }, {
      path: '/moment/:moment',
      name: 'moment',
      component: moment
    }, {
      path: '/roll/:roll',
      name: 'roll',
      commponent: roll
    }, {
      path: '/copy/:copy',
      name: 'copy',
      component: copy
    }, {
      path: '/base/:base',
      name: 'base',
      component: base
    }, {
      path: '/getKeyandValue/:getKeyandValue',
      name: 'getKeyandValue',
      component: getKeyandValue
    }, {
      path: '/exportExcel/:exportExcel',
      name: 'exportExcel',
      component: exportExcel
    }, {
      path: '/sort/:sort',
      name: 'sort',
      component: sort
    }, {
      path: '/cutscreen/:cutscreen',
      name: 'cutscreen',
      component: cutscreen
    }, {
      path: '/depthResponse/:depthResponse',
      name: 'depthResponse',
      component: depthResponse
    }, {
      path: '/baseAssembly/:baseAssembly',
      name: 'baseAssembly',
      component: baseAssembly
    }, {
      path: '/tree/:tree',
      name: 'tree',
      component: tree
    }, {
      path: '/Unbound/:Unbound',
      name: 'Unbound',
      component: Unbound
    }, {
      path: '/vueModules/:vueModules',
      name: 'vueModules',
      component: vueModules
    }, {
      path: '/vantDropdownMenu/:vantDropdownMenu',
      name: 'vantDropdownMenu',
      component: vantDropdownMenu
    }, {
      path: '/use_promise/:use_promise',
      name: 'use_promise',
      component: use_promise
    }, {
      path: '/drag/:drag',
      name: 'drag',
      component: drag
    }, {
      path: '/el_tree/:el_tree',
      name: 'el_tree',
      component: el_tree
    }, {
      path: '/echart/:echart',
      name: 'echart',
      component: echart
    }, {
      path: '/temporary/:temporary',
      name: 'temporary',
      component: temporary
    }
  ]
})
