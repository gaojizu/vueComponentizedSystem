import mock from 'mockjs'
import tableLists from "./tableInfos";
import citys from "./citysInfos";
import commponentsLists from './commponentsLists'

mock.mock('http:0.0.0.0/tableList.do', 'get', () => {
  return tableLists.tableList
})
mock.mock('http:0.0.0.0/cityInfos.do','get',()=>{
  return citys
})
mock.mock('http:0.0.0.0/commponentsLists.do','get',()=>{
  return commponentsLists
})

