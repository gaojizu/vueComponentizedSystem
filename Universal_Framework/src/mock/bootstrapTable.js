/**
 * 组件表格的源数据
 */
let tabelList = [];
for (let i = 0; i < 1000; ++i) {
  tabelList.push({
    name: "小米" + i,
    sex: i % 2 === 0 ? '男' : '女',
    age: Math.floor(Math.random() * 10) + 20,
    school: "武大",
    company: "alibaba",
    address: "杭州市萧山区",
    remark:'这是一段备注'
  })
}
const bootstrapTable = {
  code: 200,
  data: {
    tabelList: tabelList,
    rowStyle: rowStyle,
    columns: [{
      field: 'name',
      title: '姓名',
      align: 'center',
    }, {
      field: 'sex',
      title: '性别',
      align: 'center'
    }, {
      field: 'age',
      title: '年龄',
      align: 'center'
    }, {
      field: 'school',
      title: '学校',
      align: 'center'
    }, {
      field: 'company',
      title: '公司',
      align: 'center'
    }, {
      field: 'address',
      title: '住址',
      align: 'center'
    },{
      field: 'option',
      title: '操作',
      align: 'center'
    }]
  },
  msg: '请求成功'
}


function rowStyle(row, index) {
  console.info(row,index)
  if (index % 2 === 0) {
    return {
      css: {
        'background': '#58aef7'
      }
    }
  }
  return {};
}


export default bootstrapTable;


