<template>
  <div>
    <el-card style="margin: 10px;">
      <el-button @click="statusDialog = true">
        打开dialog
      </el-button>
      <commonDialog :title="title" :options="currOptions" :openCurrDialog="statusDialog" @_closeIt="_closeCurrDialog"></commonDialog>
    </el-card>
    <el-card style="margin: 10px;">
      <el-switch v-model="is_show"></el-switch>
      <commonPagination :isShow="is_show" @handleCurrentChange="handleCurrentChange" :total="total" :current_page="current_page"></commonPagination>
    </el-card>
  </div>
</template>

<script>
  import commonDialog from "../commonComponents/commonDialog.vue"
  import commonPagination from "../commonComponents/commonPagination.vue"
  export default {
    components: {
      commonDialog,
      commonPagination
    },
    data() {
      return {
        is_show: true, //是否显示当前的分页信息
        total: 400, //总条数
        current_page: 1, //当前页码
        statusDialog: false, //当前的dialog是不是显示
        title: '引用的dialog', //当前的dialog的标题
        currOptions: {
          width: "30%"
        }
      }
    },
    watch: {
      is_show(n) {
        console.info(n)
      }
    },
    methods: {
      /**
       * @param {Object} val
       * @function _closeCurrDialog 关闭当前dialog
       */
      _closeCurrDialog(val) {
        //这里需要注意的是 val是跟随函数直接过来的，所以不需要进行传值的操作，只需要在组件中设置好需要的参数即可！
        console.info(val)
        this.statusDialog = false
      },
      /**
       * @param {Object} currPage
       * @function handleCurrentChange 获取当前页
       */
      handleCurrentChange(currPage) {
        console.info(currPage)
      }
    }
  }
</script>

<style>
</style>
