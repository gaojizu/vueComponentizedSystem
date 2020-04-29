<template>
  <div>
    <common-header :currPage='currPage'>
    </common-header>
    <common-Steps
      class="curr-step-sty"
      :active="active"
      :stepsDataList='stepsDataList'
      :process-status='process_status'
      :finish-status='finish_status'
      :direction="direction"
    >
    </common-Steps>
    <div class="global-option">
      <span>请输入已完成步数：</span>
      <el-input style="width: 200px" type="Number" v-model="stepsNum"></el-input>
      <el-button type="primary" plain @click="add_steps('behind')">新增一步</el-button>
      <el-button type="primary" plain @click="add_steps('prep')">从前面新增一步</el-button>
      <el-button type="warning" plain @click="del_steps('prep')">删除一步</el-button>
      <el-button type="warning" plain @click="del_steps('behind')">从前面删除一步</el-button>
    </div>

  </div>
</template>

<script>
  import commonHeader from "../commonComponents/commonHeader";
  import commonSteps from "../commonComponents/commonSteps";

  export default {
    name: "referSteps",
    data() {
      return {
        currPage: this.$route.params.pageFlag,
        stepsNum: 2,
        active: 2,
        stepsDataList: [
          {title: '第1步', describe: '我是第一步'},
          {title: '第2步', describe: '我是第二步'},
          {title: '第3步', describe: '我是第三步'},
          {title: '第4步', describe: '我是第四步'},
          {title: '第5步', describe: '我是第五步'}],
        process_status: 'success',
        direction: 'horizontal',
        finish_status: 'success',
        count_step: 1
      }
    },
    components: {
      'common-header': commonHeader,
      'common-Steps': commonSteps
    },
    methods: {
      /**
       * @function add_steps
       */
      add_steps(val) {
        this.count_step = Number(this.stepsDataList.length)
        let count = ++this.count_step;
        if (val === 'behind') {
          this.stepsDataList.push({title: '第' + count + '步', describe: '我是第' + count + '步'})
        } else {
          this.stepsDataList.unshift({title: '第' + count + '步', describe: '我是第' + count + '步'})
        }

      },
      /**
       * @function del_steps
       */
      del_steps(val) {
        if (this.stepsNum >= Number(this.stepsDataList.length)) {
          this.stepsNum = Number(this.stepsDataList.length)
        } else {
        }
        if (val === 'prep') {
          if (this.stepsDataList.length > 1) {
            this.stepsDataList.pop()
          } else {
            this.$message.error('至少一步')
          }
        } else {
          if (this.stepsDataList.length > 1) {
            this.stepsDataList.shift()
          } else {
            this.$message.error('至少一步')
          }
        }

      }
    },
    watch: {
      /**
       * @function stepsNum 改变步骤
       * @param n
       * @param o
       */
      stepsNum(n, o) {
        if (n <= Number(this.stepsDataList.length)) {
          this.active = n;
        } else {
          this.stepsNum = Number(this.stepsDataList.length);
          this.active = this.stepsNum;
        }
      }
    }
  }
</script>

<style>
  .curr-step-sty {
    margin: 10px 10px 10px 10px;
  }

</style>
