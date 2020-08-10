import Mock from 'mockjs'
import tableLists from "./tableInfos";
import citys from "./citysInfos";
import commponentsLists from './commponentsLists'
import bootstrapTable from './bootstrapTable'
import loginInfos from "./login";
import outputDatasOfkey from "./outputDatasOfkey.js"
import studentLists from "./students.js"

Mock.mock('api/tableList.do', 'post', (option) => {
  if (option.body) {
    return tableLists.tableList
  }
})
Mock.mock('api/cityInfos.do', 'get', () => {
  return citys
})
Mock.mock('api/commponentsLists.do', 'get', () => {
  return commponentsLists
})
Mock.mock('api/bootstrapTable.do', 'get', (option) => {
  console.info(option)
  return bootstrapTable
})
Mock.mock('api/login.do', 'post', (option) => {
  if (option.body) {
    return loginInfos
  } else {
    return false
  }
})

Mock.mock('api/outputDatasOfkey.do', 'get', () => {
  return outputDatasOfkey
})

Mock.mock('api/getStudents.do', 'get', () => {
  return studentLists
})
