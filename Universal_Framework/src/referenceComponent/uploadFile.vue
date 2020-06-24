<template>
  <div>
    <el-select clearable filterable placeholder=""
               :value="ticket_operatorname" @change="change_v">
      <el-option
        v-for="value in ticket_operators"
        :key="value.id"
        :label="value.name"
        :value="value.username">
      </el-option>
    </el-select>


    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: "uploadFile",
    data() {
      return {
        tic:'',
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
    methods:{
      change_v(n){
        console.info(n)
        this.ticket_operatorname = n
      }
    },
    watch:{
      tic(n,o){
        console.info(n,0)
      }
    }
  }
</script>

<style scoped>

</style>
