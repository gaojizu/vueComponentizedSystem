<template>
  <div>
    {{msg}}
    <el-switch v-model="value" active-text="左边" inactive-text="右边">
    </el-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'this is B',
        value: true
      }
    }
  }
</script>

<style>
</style>
