<template>
  <div id="global-main">
    <h1>欢迎来到VUE组件化系统</h1>
    <ul>
      <li v-for="(item , index) in commponentsList" @click="toComponents(item.prop)">{{item.name}}</li>
    </ul>
    <div class="global-option">
      <span>城市：</span>
      <el-select v-model="city" placeholder="请选择">
        <el-option
          v-for="item in citys"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span>天气：</span><span>{{tmp}}℃</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main.vue",
    data() {
      return {
        city: '杭州市',
        tmp: '',
        citys: [],
        commponentsList: []
      }
    },
    mounted() {
      this.getCity();
      this.getComponents();
    },
    watch: {
      city(n, o) {
        this.getCityInfo(n)
      }
    },
    methods: {
      /**
       * @function toComponents 跳转组件相应位置
       * @param anchor 锚点 指向组件地址
       */
      toComponents(anchor) {
        switch (anchor) {
          case 'table' :
            this.$router.push(
              {path: '/referTable/table'}
            );
            break;
          case 'steps':
            this.$router.push(
              {path: '/referSteps/steps'}
            );
            break;
          default :
            '';
            break
        }
      },
      /**
       * @function getComponents 获取到插件集
       */
      getComponents() {
        this.$axios.get('http:0.0.0.0/commponentsLists.do').then((res) => {
          if (res.data.code === 200) {
            this.commponentsList = res.data.data.components;
          } else {
            this.$message.error(res.data.msg);
          }
        }).catch((error) => {
          console.info(error);
        })
      },
      /**
       * @function getCity 获取到城市集
       */
      getCity() {
        this.$axios.get('http:0.0.0.0/cityInfos.do').then((res) => {
          console.info(res);
          if (res.data.code === 200) {
            this.citys = res.data.data.citys;
            this.getCityInfo(this.city)
          } else {
            this.$message.error(res.data.msg);
          }
        }).catch((error) => {
          console.info(error);
        })
      },
      /**
       * @function getCityInfo 请求示范  获取相应城市的天气
       * @param city 请求参数
       */
      async getCityInfo(city) {
        let params = {
          city: city
        }
        let res = await this.$api.weather(params)
        this.tmp = res.data.now.tmp;
        console.info(res);
      },
    }
  }
</script>

<style>
  #global-main {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }

  #global-main a {
    text-decoration: none;
  }

  #global-main ul li {
    list-style: none;
    cursor: pointer;
  }
</style>
