<template>
  <div>
    <el-dialog :title="title" :visible.sync="openCurrDialog" :width="options.width" :before-close="_closeCurrDialog">
      <span>这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: () => "标题"
      },
      openCurrDialog: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default: () => {
          return {
            width: "50%"
          }
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {
      _closeCurrDialog() {
        this.$emit("_closeIt", "关闭了")
      }
    }

  }
</script>

<style>
</style>
