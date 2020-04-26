<template>
  <div>
    <common-table
      :tableList="tableList"
      :columnList="columnList"
    >
    </common-table>
  </div>
</template>

<script>
  import commonTable from '../commonComponents/commonTable';

  export default {
    name: "referTable.vue",
    data() {
      return {
        columnList: [{
          prop: 'pro_name',
          label: '项目名',
        }, {
          prop: 'pro_zq',
          label: '项目周期',
        }, {
          prop: 'pro_size',
          label: '项目大小',
        }, {
          prop: 'pro_tz',
          label: '项目投资',
        }, {
          prop: 'pro_tzr',
          label: '投资人',
        }, {
          prop: 'pro_overTime',
          label: '项目结束时间',
        }, {
          minWidth: '300px',
          label: '操作',
          align: 'center',
          render: (h, index) => {
            console.info(index)
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
        tableList: []
      }
    },
    components: {
      'common-table': commonTable
    },
    mounted() {
      this.getTableLists();
    },
    methods: {
      /**
       * @function getTableLists 获取table信息数据
       */
      getTableLists() {
        this.$axios.get('http:0.0.0.0/tableList.do').then((res) => {
          console.info(res);
          if (res.data.code === 200) {
            this.tableList = res.data.data.tableList;
          }
        }).catch((error) => {
          console.error(error)
        })
      },
      /**
       * @function headerStyle 设置头部样式
       * @param row
       * @param column
       * @param rowIndex
       * @param columnIndex
       * @returns {string}
       */
      headerStyle({row, column, rowIndex, columnIndex}) {
        return 'tableHeaderStyle'
      },
    }
  }
</script>

<style>
  .tableHeaderStyle {
    background-color: #58aef7;
    font-size: larger;
    color: darkred;
  }
</style>
