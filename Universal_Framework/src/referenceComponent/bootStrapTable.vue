<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>
    <table id="table" ref="table"></table>
  </div>
</template>

<script>
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
      onConfirm() {
        this.$refs.item.toggle();
      },
      /**
       * @function gettableInfo 获取表格的列和源数据
       */
      gettableInfo() {
        this.$axios.get('api/bootstrapTable.do').then((res) => {
          $('#table').bootstrapTable({
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            pagination: true,  //是否分页
            //toolbar: '#toolbar',
            detailView: true,  //前面的加号，详细数据
            singleSelect: true,
            checkbox: true, //复选框
            rowStyle: this.rowStyle,
            cellStyle: this.cellStyle,
            clickToSelect: true,
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
          console.error(error)
        })

      },
      /**
       * @function rowStyle
       * @param row
       * @param index
       * @returns {{css: {background: string}}|{}}
       */
      rowStyle(row, index) {
        console.info(row, index)
        if (index % 2 === 0) {
          return {
            css: {
              'background': '#58aef7'
            }
          }
        } else {
          return {}
        }
      },
      /**
       * @function cellStyle
       * @param row
       * @param index
       * @returns {{css: {background: string}}|{}}
       */
      cellStyle(row, index) {
        if (index % 2 === 0) {
          return {
            css: {
              'background': '#58aef7'
            }
          }
        } else {
          return {}
        }
      }
    },

  }
</script>

<style scoped>
  .inner-container {
    animation: myMove 5s linear infinite;
    animation-fill-mode: forwards;
  }

  /*文字无缝滚动*/
  @keyframes myMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150px);
    }
  }

  .seamless-warp {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
</style>
