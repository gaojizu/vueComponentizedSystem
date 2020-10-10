<template>
  <div>
    <el-card>
      <h4>从vuex中获取到的baseName:</h4>
      <span>{{baseName}}</span>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        baseName: this.$store.state.modules.baseName
      }
    }
  }
</script>

<style>
</style>
