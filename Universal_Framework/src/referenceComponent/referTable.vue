<template>
  <div>
    <common-table
      :tableList="tableList"
      :columnList="columnList"
    >
    </common-table>
  </div>
</template>

<script>
  import commonTable from '../commonComponents/commonTable';

  export default {
    name: "referTable.vue",
    data() {
      return {
        columnList: [{
          prop: 'pro_name',
          label: '项目名',
        }, {
          prop: 'pro_zq',
          label: '项目周期',
        }, {
          prop: 'pro_size',
          label: '项目大小',
        }, {
          prop: 'pro_tz',
          label: '项目投资',
        }, {
          prop: 'pro_tzr',
          label: '投资人',
        }, {
          prop: 'pro_overTime',
          label: '项目结束时间',
        }],
        tableList: [{
          pro_name: '造火箭',
          pro_zq: 20,
          pro_size: '70ZG',
          pro_tz: '60亿',
          pro_tzr: 'clearlove',
          pro_overTime: '2089-08-09'
        }, {
          pro_name: '造火箭',
          pro_zq: 20,
          pro_size: '70ZG',
          pro_tz: '60亿',
          pro_tzr: 'clearlove',
          pro_overTime: '2089-08-09'
        }, {
          pro_name: '造火箭',
          pro_zq: 20,
          pro_size: '70ZG',
          pro_tz: '60亿',
          pro_tzr: 'clearlove',
          pro_overTime: '2089-08-09'
        }, {
          pro_name: '造火箭',
          pro_zq: 20,
          pro_size: '70ZG',
          pro_tz: '60亿',
          pro_tzr: 'clearlove',
          pro_overTime: '2089-08-09'
        },]
      }
    },
    components: {
      'common-table': commonTable
    }
  }
</script>

<style>

</style>
