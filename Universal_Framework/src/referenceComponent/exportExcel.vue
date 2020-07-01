<template>
  <div>
    <el-button id="btn" type="primary" icon="el-icon-download" @click="handleDownload">导出EXCEL</el-button>
    <el-table :data="studentList" border stripe style="width: 100%;margin-top: 20px">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="address" label="住址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "exportExcel",
    data() {
      return {
        studentList: [],
        temp_list: []
      }
    },
    created() {
      this.getStudents()
    },
    methods: {
      getStudents() {
        this.$axios.get("api/getStudents.do").then(res => {
          this.studentList = res.data.data.list
          console.info(res)
        })
      },
      handleDownload() {
        const loading = this.$loading({
          lock: true,
          text: '导出中,请稍后......',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        //这里是过滤条件，自己根据需要进行使用
        let query_params = {
          'search': null,
          "page": null,
          'page_size': null
        }
        this.$axios.get("api/getStudents.do").then(response => {
          this.temp_list = response.data.data.list
          import('@/vendor/Export2Excel').then(excel => {
            const tHeader = ['Id', '姓名', '性别', '年龄', '住址']
            const filterVal = ['id', 'name', 'sex', 'age', 'address']
            if (this.temp_list) {
              const data = this.formatJson(filterVal, this.temp_list)
              excel.export_json_to_excel({
                header: tHeader,
                data,
                filename: '学生表'
              })
            } else {
              this.$notify({
                title: 'Failure',
                message: "未能获取到任何数据",
                type: 'error',
              })
            }
            loading.close()
            this.$notify({
              title: '成功',
              message: '成功导出' + this.temp_list.length + '条数据',
              type: 'success'
            });
            this.temp_list = null
          })
        })
      },
      /**
       * @function formatJson 格式化
       * @param filterVal
       * @param jsonData
       * @returns {*}
       */
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      },
    }
  }
</script>

<style scoped>
  #btn {
    float: left;
    margin: 10px 10px 10px 10px;
  }
</style>
