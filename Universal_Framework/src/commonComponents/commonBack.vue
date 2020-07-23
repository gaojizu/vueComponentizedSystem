<template>
  <div id="global-back">
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
      root: '我是根结点'
      return {
      }
    },
    created() {
      console.info(this.$root.root)
    },
    methods: {
      /**
       * @function goBack 返回主页
       */
      goBack() {
        this.$router.push({
          path: "/main"
        })
      }
    }
  }
</script>
<style>
  #global-back {
    color: #58aef5;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
