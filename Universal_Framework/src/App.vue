<template>
  <div id="app">
    <!--    <el-menu-->
    <!--      :default-active="activeIndex"-->
    <!--      class="el-menu-demo"-->
    <!--      mode="horizontal"-->
    <!--      @select="handleSelect"-->
    <!--      background-color="#545c64"-->
    <!--      text-color="#fff"-->
    <!--      active-text-color="#ffd04b">-->
    <!--      <el-menu-item index="1">首页</el-menu-item>-->
    <!--      <el-menu-item index="2">系统介绍</el-menu-item>-->
    <!--      <el-submenu index="3" style="float: right">-->
    <!--        <template slot="title">我的工作台</template>-->
    <!--        <el-menu-item index="2-1">选项1</el-menu-item>-->
    <!--        <el-menu-item index="2-2">选项2</el-menu-item>-->
    <!--        <el-menu-item index="2-3">选项3</el-menu-item>-->
    <!--        <el-submenu index="2-4">-->
    <!--          <template slot="title">选项4</template>-->
    <!--          <el-menu-item index="2-4-1">选项1</el-menu-item>-->
    <!--          <el-menu-item index="2-4-2">选项2</el-menu-item>-->
    <!--          <el-menu-item index="2-4-3">选项3</el-menu-item>-->
    <!--        </el-submenu>-->
    <!--      </el-submenu>-->
    <!--    </el-menu>-->
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        activeIndex: '1'
      }
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
