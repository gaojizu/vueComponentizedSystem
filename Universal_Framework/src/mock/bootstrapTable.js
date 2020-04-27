let tabelList = [];
for (let i = 0; i < 1000; ++i) {
  tabelList.push({
    name: "小米" + i,
    sex: i % 2 === 0 ? '男' : '女',
    age: Math.floor(Math.random() * 10) + 20,
    school: "武大",
    company: "alibaba",
    address: "杭州市萧山区"
  })
}
const bootstrapTable = {
  code: 200,
  data: {
    tabelList: tabelList,
    columns: [{
      field: 'name',
      title: '姓名',
      align: 'center',
      cellStyle: cellSty(),
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
    }]
  },
  msg: '请求成功'
}

function cellSty() {
  return {
    css: {
      'background': '#58aef7'
    }
  }
}

export default bootstrapTable;


