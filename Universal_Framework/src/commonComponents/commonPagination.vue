<template>
  <div>
    <el-pagination :hide-on-single-page="isShow" @current-change="handleCurrentChange" :current-page="current_page"
      :page-sizes="[100, 200, 300, 400]" :page-size="page_size" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    
    props: {
      page_size: {
        type: Number,
        default: () => 10
      },
      total: {
        type: Number,
        default: () => 0
      },
      current_page: {
        type: Number,
        default: () => 0
      },
      isShow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    watch: {
      isShow(n) {
        console.info(n)
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.$emit("handleCurrentChange", val)
      }
    }
  }
</script>

<style>
</style>
