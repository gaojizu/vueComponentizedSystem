<template>
  <div>
    <el-table
      :data='tableList'
      :stripe='attribute.stripe'
      :border='attribute.border'
      :size='attribute.size'
      :height='attribute.height'
      :fit='attribute.fit'
      :show-header='attribute.show_header'
      :highlight-current-row='attribute.highlight_current_row'
      :header-cell-class-name='headerStyle'
      :header-cell-style="headerObjSty"
      :row-class-name='rowStyle'
    >
      <el-table-column
        v-if="attribute.isShowSelection"
        type="selection"
        :selectable="selection"
        width="55">
      </el-table-column>
      <el-table-column
        v-if="attribute.serialNumber"
        label="序号"
        type="index"
        width="70"
        align="center">
      </el-table-column>
      <template v-for="(item , index) in columnList">
        <el-table-column
          :prop=item.prop
          :label=item.label
          :align="item.align || 'center'"
        >
        </el-table-column>
      </template>
      <el-table-column
        v-if="optBtn"
      >

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  /**
   * @function ownHeaderStyle 用户不传任何样式的时候 设置table的表头样式
   * @param row
   * @param column
   * @param rowIndex
   * @param columnIndex
   * @returns {string}
   */
  function ownHeaderStyle({row, column, rowIndex, columnIndex}) {
    return 'commonHeaderStyle';
  }

  /**
   * @function ownRowStyle 用户不传任何样式的时候  设置table的表格样式
   * @param row
   * @param rowIndex
   * @returns {string}
   */
  function ownRowStyle({row, rowIndex}) {
    if (rowIndex % 2 === 0) {
      return 'rowEven'
    } else {
      return 'rowOdd'
    }
  }

  export default {
    name: "commonTable.vue",
    props: {
      tableList: {
        type: Array,
        default: () => []
      },
      columnList: {
        type: Array,
        default: () => []
      },
      headerStyle: {
        type: Function,
        default:
        ownHeaderStyle
      },
      headerObjSty: {
        type: Object,
        default: () => {
          return {
            'color': '#FFFFFF'
          }
        }
      },
      rowStyle: {
        type: Function,
        default:
        ownRowStyle
      },
      optBtn: {
        type: Object,
        default: () => {
        }
      },
      attribute: {
        type: Object,
        default: () => {
          return {
            stripe: true,
            border: true,
            size: 'mini',
            height: '250px',
            fit: true, //是否自动撑开宽度
            show_header: true, //是否显示表头
            highlight_current_row: false,//是否高亮当前行
            isShowSelection: false, //是否显示复选框
            serialNumber: false,//是否显示序号
          }
        }
      },
    },
    data() {
      return {
        stripe: true
      }
    },
    methods: {
      /**
       * @function selection 复选框是否可点击
       * @param row
       * @param index
       * @returns {boolean}
       */
      selection(row, index) {
        if (this.attribute.selection === true) {
          return true
        } else {
          return false
        }
      },
      ownHeaderStyle,
      ownRowStyle

    }
  }
</script>

<style>
  .commonHeaderStyle {
    background: #2c3e50 !important;
    font-size: large;
    color: #58aef5;
  }

  .commonRowStyle {
    color: black;
    font-size: small;
    text-align: center;
  }

  .rowEven {
    background-color: green;
    color: green;
  }

  .rowOdd {
    background-color: darkred;
    color: darkred;
  }

</style>
