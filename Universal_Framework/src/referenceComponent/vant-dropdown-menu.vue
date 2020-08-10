<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item @change="selectCurrItem(value1)" v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 1,
        value2: 'a',
        option1: [{
            text: '全部商品',
            value: 0
          },
          {
            text: '新款商品',
            value: 1
          },
          {
            text: '活动商品',
            value: 2
          },
        ],
        option2: [{
            text: '默认排序',
            value: 'a'
          },
          {
            text: '好评排序',
            value: 'b'
          },
          {
            text: '销量排序',
            value: 'c'
          },
        ],
      };
    },
    methods: {
      selectCurrItem(val) {
        console.info(val)
      }
    }

  }
</script>

<style>
</style>
