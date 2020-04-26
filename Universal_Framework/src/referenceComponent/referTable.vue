<template>
  <div>
    <common-header :currPage='currPage'>
    </common-header>
    <common-table
      :tableList="tableList"
      :columnList="columnList"
    >
    </common-table>
    <operation-area
      :header="header"
    >
      <span>斑马纹：</span>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </operation-area>
  </div>
</template>

<script>
  import commonTable from '../commonComponents/commonTable';
  import operationArea from "../commonComponents/operationArea";
  import commonHeader from "../commonComponents/commonHeader";

  export default {
    name: "referTable.vue",
    data() {
      return {
        currPage: this.$route.params.pageFlag,
        value: false,
        header: '表格操作',
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
      'common-table': commonTable,
      'operation-area': operationArea,
      'common-header': commonHeader
    },
    created() {
      console.info(this.$route)
    },
    mounted() {
      this.$store.commit('headerName', '表格')
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
