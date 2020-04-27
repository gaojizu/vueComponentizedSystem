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
      gettableInfo() {
        this.$axios.get('api/bootstrapTable.do').then((res) => {
          console.info(res)
          $('#table').bootstrapTable({
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            pagination: true,
            //sortable: false,
            sortOrder: undefined,
            pageSize:5,
            striped:true,
            search:true,
            searchText:'',
            strictSearch:false, //是否模糊搜索
            showRefresh:true,
            showToggle:true,
            showPaginationSwitch:true,
            showFullscreen:true,
            minimumCountColumns:5,
            paginationPreText:'上一页',
            paginationNextText:'下一页',
            pageList:[5,10,15],
            //search: true,
            data: res.data.data.tabelList,
            columns: res.data.data.columns
          })
        }).catch((error) => {

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
