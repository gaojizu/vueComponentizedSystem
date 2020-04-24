<template>
  <div id="global-main">
    <h1>欢迎来到VUE组件化系统</h1>
    <ul>
      <li @click="toComponents('table')">表格</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "main.vue",
    data() {
      return {}
    },
    methods: {
      /**
       * @function toComponents 跳转组件相应位置
       * @param anchor 锚点 指向组件地址
       */
      toComponents(anchor) {
        switch (anchor) {
          case 'table' :
            this.$router.push({path: '/commonTable'});
            break;
          default:
            ''
            break
        }
      }
    }
  }
</script>

<style scoped>
  #global-main {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
  #global-main a{
    text-decoration: none;
  }

  #global-main ul li {
   list-style: none;
    cursor: pointer;
  }
</style>
