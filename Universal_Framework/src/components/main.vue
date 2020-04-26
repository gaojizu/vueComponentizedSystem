<template>
  <div id="global-main">
    <h1>欢迎来到VUE组件化系统</h1>
    <ul>
      <li @click="toComponents('table')">表格</li>
    </ul>
    <el-table
      :data="tableData"
      style="width: 100%">
      <template v-for="(item , index) in columnList">
        <el-table-column
          :prop=item.prop
          :label=item.label
          :align="item.align || 'center'"
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "main.vue",
    data() {
      return {
        columnList: [{
          prop: 'date',
          label: '日期',
        }, {
          prop: 'name',
          label: '姓名',
        }, {
          prop: 'address',
          label: '地址',
        }, {
          minWidth: '300px',
          label: '操作',
          align: 'center',
          render: (h, index) => {
            let event = null;
            let odd = null;
            if (index % 2 === 0) {
              event = (<el-button type="primary" size='mini'> 偶数 </el-button>)
            } else {
              odd = (<el-button type="primary" size='mini'> 奇数 </el-button>)
            }
            return (
              <span>
                  {event}
                  {odd}
              </span>
            )
          }
        }],
        city: '杭州市',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          opt : '操作'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          opt : '操作'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          opt : '操作'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          opt : '操作'
        }]
      }
    },
    mounted() {
      this.testFunInterface(this.city)
    },
    methods: {
      /**
       * @function toComponents 跳转组件相应位置
       * @param anchor 锚点 指向组件地址
       */
      toComponents(anchor) {
        switch (anchor) {
          case 'table' :
            this.$router.push({path: '/referTable'});
            break;
          default:
            ''
            break
        }
      },
      /**
       * @function testFunInterface 请求示范
       * @param city 请求参数
       */
      async testFunInterface(city) {
        let params = {
          city: city
        }
        let res = await this.$api.weather(params)
        console.info(res);
      },
    }
  }
</script>

<style>
  #global-main {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }

  #global-main a {
    text-decoration: none;
  }

  #global-main ul li {
    list-style: none;
    cursor: pointer;
  }
</style>
