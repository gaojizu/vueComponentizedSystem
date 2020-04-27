<template>
  <div id="app">
    <div class="global-app">
      <div style="width: 15%">
        <h3>logo</h3>
      </div>
      <div style="width: 70%">
        <h3>VUE组件化展示系统</h3>
      </div>
      <div style="width: 15%">
        <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
        <el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12"/>
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3"/>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {}
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
  }

  .global-option {
    position: absolute;
    bottom: 10px;
    left: 10px;
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
</style>
