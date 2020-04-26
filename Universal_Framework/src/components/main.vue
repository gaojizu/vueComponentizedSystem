<template>
  <div id="global-main">
    <h1>欢迎来到VUE组件化系统</h1>
    <ul>
      <li v-for="(item , index) in commponentsList" @click="toComponents(item.prop)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "main.vue",
    data() {
      return {
        city: '杭州市',
        commponentsList: [
          {name: '表格', prop: 'table'},
          {name: '进度条', prop: 'steps'}
        ]
      }
    },
    mounted() {
      this.testFunInterface(this.city)
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
       * @function testFunInterface 请求示范
       * @param city 请求参数
       */
      async testFunInterface(city) {
        let params = {
          city: city
        }
        let res = await this.$api.weather(params)
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
