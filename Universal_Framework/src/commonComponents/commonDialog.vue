<template>
  <div>
    <el-dialog :title="title" :visible.sync="openCurrDialog" :width="options.width" :before-close="_closeCurrDialog">
      <span>{{msg}}</span>
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
      },
      msg: {
        type: String,
        default: () => "这是一段引入的文字"
      }
    },
    data() {
      return {
msg:''
      }
    },
    methods: {
      /**
       * @function _closeCurrDialog 给父组件的数据
       */
      _closeCurrDialog() {
        this.$emit("_closeIt", "关闭了")
      }
    }
  }
</script>

<style>
</style>
