<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
   <el-checkbox :indeterminate="isIndeterminate" v-model="reseverflg" @change="resever">反选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>

</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkAll: false,
        reseverflg : false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      //全选
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      //单选
      handleCheckedCitiesChange(value) {
        console.info(value)
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      //反选
      resever(){
        //记录当前被选中的值给一个空数组
        let idx;//记录当前是不是存在这个值
        let currArr = []; //记录当前的选择的数组
        for(let item of this.cities){
          idx = this.checkedCities.includes(item) //如果不存在当前的值就将该值放到最新的空数组里
          if(!idx){
            currArr.push(item)
          }
        }
        this.checkedCities = currArr
      }
    }
  };
</script>
