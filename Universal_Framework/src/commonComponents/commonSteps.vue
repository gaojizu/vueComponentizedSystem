<template>
  <div>
    <el-steps
      :active="active"
      :direction="direction"
      :space="space"
      :process-status='process_status'
      :finish-status='finish_status'
      :simple="simple"
      align-center>
      <template v-for="(item, index) in stepsDataList">
        <el-step :title='item.title'
                 :description='item.describe'></el-step>
      </template>
    </el-steps>
  </div>
</template>

<script>
  export default {
    name: "steps",
    data() {
      return {}
    },
    props: {
      simple: {
        type: Boolean,
        default: false
      },
      finish_status: {
        type: String,
        default: 'finish' //wait / process / finish / error / success
      },
      process_status: {
        type: String,
        default: 'process' //wait / process / finish / error / success
      },
      space: {
        type: Number || String,
        default: () => {

        }
      },
      direction: {
        type: String,
        default: 'horizontal' //vertical/horizontal  默认的是horizontal  横向
      },
      active: {
        type: Number,
        default: 1
      },
      stepsDataList: {
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
