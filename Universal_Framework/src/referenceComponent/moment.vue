<template>

</template>

<script>
  export default {
    name: "moment",
    created() {
      // 获取当前时间输出
      console.log(this.$moment().toDate())

      // 获取当前时间，并格式化输出
      console.log(this.$moment().format('YYYY-MM-DD HH:mm:ss'))

      // 时间相减
      console.log(this.$moment().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss'))

      // 时间相加
      console.log(this.$moment().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().add({months: 1}).format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().add(1, 'hours').format('YYYY-MM-DD HH:mm:ss'))

      // 获取开始的时间
      console.log(this.$moment().startOf('year').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().startOf('month').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().startOf('hour').format('YYYY-MM-DD HH:mm:ss'))

      // 获取结束的时间
      console.log(this.$moment().endOf('year').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().endOf('month').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'))
      console.log(this.$moment().endOf('hour').format('YYYY-MM-DD HH:mm:ss'))

      // 获取当前月的总天数
      console.log(this.$moment().daysInMonth())

      // 获取年份
      console.log(this.$moment().year())
      console.log(this.$moment().get('year'))

      // 获取月份(0~11, 0: 一月, 11: 十一月)
      console.log(this.$moment().month())
      console.log(this.$moment().get('month'))

      // 获取一个月中的某一天
      console.log(this.$moment().date())
      console.log(this.$moment().get('date'))

      // 获取一个星期中的某一天(0~6, 0: 星期天, 6: 星期六)
      console.log(this.$moment().add(1, 'days').day())
      console.log(this.$moment().get('day'))
      // (0~6, 0: 星期一, 6: 星期天)
      console.log(this.$moment().add(2, 'days').weekday())
      console.log(this.$moment().get('weekday'))
      // (1~7, 1: 星期一, 7: 星期天)
      console.log(this.$moment().add(1, 'days').isoWeekday())
      console.log(this.$moment().get('isoWeekday'))

      // 获取小时
      console.log(this.$moment().hours())
      console.log(this.$moment().get('hours'))

      // 获取分钟
      console.log(this.$moment().minutes())
      console.log(this.$moment().get('minutes'))

      // 获取秒
      console.log(this.$moment().seconds())
      console.log(this.$moment().get('seconds'))

      // 获取毫秒
      console.log(this.$moment().milliseconds())
      console.log(this.$moment().get('milliseconds'))

      // 整体输出
      console.log(this.$moment().toArray())
      console.log(this.$moment().toObject())

      // 设置时间
      console.log(this.$moment().year(2019).format('YYYY-MM-DD HH:mm:ss'))
    },
  }
</script>

<style scoped>

</style>
