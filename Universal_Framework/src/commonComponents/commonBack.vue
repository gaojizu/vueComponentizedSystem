<template>
  <div id="global-header">
    <el-page-header @back="goBack" :content="currPage">
    </el-page-header>
  </div>
</template>

<script>
  export default {
    name: "commonHeader",
    props: {
      currPage: {
        type: String,
        default: '' || '无'
      }
    },
    data() {
      return {}
    },
    methods: {
      /**
       * @function goBack 返回主页
       */
      goBack() {
        this.$router.push({path: "/main"})
      }
    }
  }
</script>
<style>
  #global-header {
    color: #58aef5;
  }
</style>
