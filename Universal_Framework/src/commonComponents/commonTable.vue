<template>
  <div>
    <el-table
      :data='tableList'
      stripe
      border
      :header-cell-class-name='headerStyle'
    >
      <template v-for="(item , index) in columnList">
        <el-table-column
          :prop=item.prop
          :label=item.label
          width="180">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
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
      }
    },
    data() {
      return {}
    },

    methods: {



      /**
       * @function headerStyle 设置table的表头样式
       * @param row
       * @param column
       * @param rowIndex
       * @param columnIndex
       * @returns {string}
       */
      headerStyle({row, column, rowIndex, columnIndex}) {
        return 'tableHeaderStyle';
      }
    }
  }
</script>

<style>
  .tableHeaderStyle {
    background-color: aqua;
  }
</style>
