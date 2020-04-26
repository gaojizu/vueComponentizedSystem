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
      goBack() {
        this.$router.push({path:"/"})
        console.log('go back');
      }
    }
  }
</script>

<style>
  #global-header {
    color: #58aef5;
  }
</style>
