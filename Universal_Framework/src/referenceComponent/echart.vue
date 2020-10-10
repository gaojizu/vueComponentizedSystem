<template>
  <div>
    <el-col :span="24">
      <div>
        <div id="echart_csdn_z" :style="{width:'90vw',height:'300px'}"></div>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this._drowChart()
    },
    methods: {
      _drowChart() {
        let _this = this;
        let echart_csdn_z = this.$echarts.init(document.getElementById('echart_csdn_z'), 'light')
        var option = {
          grid: {
            left: '2.5%',
            height: '60%',
          },

          color: ["#f40"],
          title: {
            // text: '工单种类数据展示'
          },
          tooltip: {},
          xAxis: {
            // inverse:true,
            // position:'top',
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {
            // inverse:true
          },
          series: [{
            name: '数量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        echart_csdn_z.setOption(option)
      },
    }
  }
</script>

<style scoped="scoped">
  #echart_csdn_z {
    margin-top: 100px;
    -webkit-transform: rotate(90deg);
  }
</style>
