<template>
  <div>
    <el-header>
      <el-row>
        <el-col :span="4">
          <i class="el-icon-picture-outline-round">LOGO</i>
        </el-col>
        <el-col :span="16">
          VUE组件展示系统
        </el-col>
        <el-col :span="4">
          <el-dropdown>
              <span class="el-dropdown-link">
                    <b> {{loginName}} </b>
                    <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user" @click.native="personInfo">个人中心</el-dropdown-item>
              <el-dropdown-item icon="el-icon-close" divided @click.native="loginOut">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>

    </el-header>
  </div>
</template>

<script>
  export default {
    name: "commonHeader",
    data() {
      return {
        loginName: sessionStorage.getItem('loginName') ? sessionStorage.getItem('loginName') : '用户名'
      }
    },
    methods: {
      /**
       * @function loginOut 登出
       */
      loginOut() {
        sessionStorage.clear()
        this.$router.push({path: '/'})
      },
      personInfo() {

      }
    },

  }
</script>

<style>
  .el-header {
    position: fixed;
    /*position: -webkit-sticky;*/
    top: 0;
    z-index: 1;
    width: 100%;
    box-shadow: 0 1px 1px #ccc;
    height: 60px !important;
    line-height: 60px;
    background-color: #FFFFFF;
    color: #000000;
  }
</style>
