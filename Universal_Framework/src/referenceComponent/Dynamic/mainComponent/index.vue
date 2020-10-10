<template>
  <div>
    <el-button @click="showChild('A')">显示A组件</el-button>
    <el-button @click="showChild('B')">显示B组件</el-button>
    <keep-alive>
      <component :is='currCom'></component>
    </keep-alive>
  </div>
</template>

<script>
  import childA from '../childComponent/childA.vue'
  import childB from '../childComponent/childB.vue'
  export default {
    components: {
      childA,
      childB
    },
    data() {
      return {
        currCom: childA
      }
    },
    methods: {
      showChild(Str) {
        this.currCom = 'child' + Str
      }
    }
  }
</script>

<style scoped="scoped">
  /deep/ .el-button {
    margin: 10px;
  }
</style>
