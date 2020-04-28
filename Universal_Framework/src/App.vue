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
        Clearlove
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
