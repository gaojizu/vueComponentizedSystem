<template>
  <div id="app">
    <common-header></common-header>
    <router-view/>
  </div>
</template>

<script>
  /**
   * App主文件
   */
  export default {
    name: 'App',
    data() {
      return {
        //showFlag: sessionStorage.getItem('loginName') ? true : false,
        userInfo:sessionStorage.getItem('loginName')
      }
    },
    mounted() {
      console.info(sessionStorage.getItem('loginName'))
      console.log(this.$route);
    }
  }
</script>

<style>
  body {
    /*background-image: linear-gradient(to left, #2c3e50, #FFFFFF);*/
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 70px;
  }

  .global-option {
    position: fixed;
    bottom: 0;
    z-index: 1;
    width: 100%

    /*position: absolute;*/
    /*bottom: 0px;*/
    /*left: 10px;*/
  }

  .global-app {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: #FFFFFF;
    top: 10px;
    left: 0;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    background-color: #000000;
  }

  .el-menu-item {
    margin-left: 10px;
  }
</style>
