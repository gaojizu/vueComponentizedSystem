<template>
  <div>
    <common-header :currPage='currPage'>
    </common-header>
    <table id="table" ref="table"></table>
  </div>
</template>

<script>
  import commonHeader from "../commonComponents/commonHeader";

  export default {
    name: "bootStrapTable",
    data() {
      return {
        currPage: this.$route.params.pageFlag,
      }
    },
    mounted() {
      this.gettableInfo()
    },
    methods: {
      /**
       * @function gettableInfo 获取表格的列和源数据
       */
      gettableInfo() {
        this.$axios.get('api/bootstrapTable.do').then((res) => {
          $('#table').bootstrapTable({
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            pagination: true,  //是否分页
            sortable: true,    //是否排阻
            sortOrder: 'asc',  //正序或者倒序
            pageSize: 5,       //每夜显示多少条
            striped: true,     //是否斑马纹
            search: true,      //显示搜索
            searchText: '',    //搜索默认文字
            strictSearch: false, //是否模糊搜索
            showRefresh: true,   //显示刷新
            showToggle: true,    //显示表格别的样式
            showPaginationSwitch: true, //显示分页功能
            showFullscreen: true,   //是否全屏
            minimumCountColumns: 5,  //最少几条不显示分页
            paginationPreText: '上一页',  //上一页
            paginationNextText: '下一页', //下一页
            pageList: [5, 10, 15],  //可供选择的每叶条数
            data: res.data.data.tabelList,  //表格数据
            columns: res.data.data.columns  //表格列数据
          })
        }).catch((error) => {
          console.info(error)
        })

      }
    },
    components: {
      'common-header': commonHeader,
    },
  }
</script>

<style scoped>

</style>
