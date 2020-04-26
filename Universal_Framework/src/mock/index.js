import mock from 'mockjs'
import tableLists from "./tableInfos";

mock.mock('http:0.0.0.0/tableList.do', 'get', () => {
  return tableLists.tableList
})

