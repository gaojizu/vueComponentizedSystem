<template>
  <div>
    <el-header v-show='!(path === "/")'>
      <el-row>
        <el-col :span="4">
          <i style="cursor: pointer" class="el-icon-picture-outline-round" @click="mainPage">LOGO</i>
        </el-col>
        <el-col :span="16">
         基于VUE常见的小功能
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
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        path: '',
        currPage: '',
        loginName: sessionStorage.getItem('loginName') ? sessionStorage.getItem('loginName') : ''
      }
    },
    created() {
      console.log('created')
    },
    methods: {
      /**
       * @function loginOut 登出
       */
      loginOut() {
        sessionStorage.clear()  //将所有的缓存清除
        this.$router.push({path: '/'})
      },
      /**
       * @function mainPage 回到主页
       */
      mainPage() {
        if (this.currPage === '/main') {

        } else {
          this.$router.push({path: '/main'})
        }
      },
      personInfo() {

      }
    },
    mounted() {
      this.path = this.$route.path;
      console.info(this.path)
    },
    watch: {
      loginName(n, o) {
        if (n === '') {
          this.loginName = sessionStorage.getItem('loginName')
        } else {

        }
      },

      '$route'(to, from) {
        this.currPage = to.fullPath;   //将当前页面地址获取到用来判断是不是可以指向当前界面，因为当前界面是不可以进行指向自己
        this.$forceUpdate()
        this.path = to.path;
      }
    }

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
    margin: -5px -5px;
  }
</style>
