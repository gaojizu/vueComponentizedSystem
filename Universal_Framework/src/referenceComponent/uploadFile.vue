<template>
  <div>
    <van-uploader style="margin-top: 40px;" v-model="fileList" :before-delete="deleteImg" multiple />
  </div>
</template>

<script>
  export default {
    name: "uploadFile",
    data() {
      return {
        fileList: [],
        tic: '',
        ticket_operators: [{
          id: 18,
          name: "曹文虎",
          username: "caowh"
        }, {
          id: 15,
          name: "张杰",
          username: "zhangjie"
        }],
        ticket_operatorname: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    created() {
      this.ticket_operatorname = this.ticket_operators[0].name
    },
    methods: {
      deleteImg() {
        //直接删除
        return true;
      },
      change_v(n) {
        console.info(n)
        this.ticket_operatorname = n
      }
    },
    watch: {
      tic(n, o) {
        console.info(n, 0)
      }
    }
  }
</script>

<style scoped>

</style>
