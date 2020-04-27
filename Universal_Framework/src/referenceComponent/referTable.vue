<template>
  <div>
    <common-header :currPage='currPage'>
    </common-header>
    <common-table
      :tableList="tableList"
      :columnList="columnList"
      :headerStyle="headerStyle"
      :headerObjSty="headerObjSty"
      :attribute='attribute'
    >
    </common-table>
    <div class="global-option">
      <span>斑马纹：</span>
      <el-switch
        v-model="attribute.stripe"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
      <span>边框：</span>
      <el-switch
        v-model="attribute.border"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
      <span>序号：</span>
      <el-switch
        v-model="attribute.serialNumber"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
      <span>复选框：</span>
      <el-switch
        v-model="attribute.isShowSelection"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
      <span>显示表头：</span>
      <el-switch
        v-model="attribute.show_header"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
      <span>表格高度：</span>
      <el-input style="width: 200px" v-model="attribute.height"></el-input>
      <span>规格：</span>
      <el-select v-model="attribute.size" placeholder="请选择">
        <el-option
          v-for="item in table_sizes"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span>表头颜色：</span>
      <el-color-picker v-model="color"></el-color-picker>
    </div>
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
        color: '#534673',
        currPage: this.$route.params.pageFlag,
        value: false,
        header: '表格操作',
        table_sizes: [{value: 'mini', label: '小型'}, {value: 'small', label: '中型'}, {value: 'medium', label: '大型'}],
        headerObjSty: {},
        attribute: {
          stripe: true,
          border: true,
          size: 'mini',
          height: '250px',
          fit: true, //是否自动撑开宽度
          show_header: true, //是否显示表头
          highlight_current_row: false,//是否高亮当前行
          isShowSelection: false, //是否显示复选框
          serialNumber: false,//是否显示序号
        },
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
      'common-header': commonHeader,
    },
    created() {
      console.info(this.$route)
    },
    mounted() {
      this.$store.commit('headerName', '表格')
      this.getTableLists();
    },
    watch: {
      color(n, o) {
        this.headerObjSty.background = n + '!important'
        //this.headerStyle(n)
        console.info(n)
      }
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
       * @param color
       * @returns {string}
       */
      headerStyle(color) {
        return 'tableHeaderStyle'
      },
    }
  }
</script>

<style>
  .tableHeaderStyle {
    background-color: #58aef7 !important;
    font-size: larger;
    color: darkred;
  }
</style>
