<template>
  <div>
    <el-row style="margin: 10px 10px 10px 10px;">
      <el-card>
        <el-col :span="12">
          <div>源数组</div>
          <el-table :data="fruits" border>
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <el-table-column prop="count" label="库存">
            </el-table-column>
            <el-table-column prop="price" label="价格">
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6">
          <div>属性</div>
          <el-select v-model="attribute" placeholder="请选择">
            <el-option v-for="item in attributes" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <div>排序方式</div>
          <el-select v-model="sortType" placeholder="请选择">
            <el-option v-for="item in sortTypes" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-card>
    </el-row>
    <el-row style="margin: 10px 10px 10px 10px;">
      <el-card style="text-align: left;">
         <h4>
           使用mixin混入的方式，将order方法使用到当前的组件中，全局注册的order方法，直接使用this.order就可以使用，源方法为：
            <code>
              order(field, type = "asc") {
                return function(a, b) {
                  return type === "asc" ?
                    a[field] > b[field] ? 1 : -1 : a[field] > b[field] ? -1 : 1;
                }
              }
            </code>
         </h4>
      </el-card>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sortType: 'asc', //排序方式
        attribute: 'price', //属性
        fruits: [{
          id: 1,
          price: 100,
          priceDesc: '价格',
          count: 10,
          countDesc: '库存',
          name: "黄瓜"
        }, {
          id: 2,
          price: 105,
          priceDesc: '价格',
          count: 19,
          countDesc: '库存',
          name: "冬瓜"
        }, {
          id: 3,
          price: 80,
          priceDesc: '价格',
          count: 90,
          countDesc: '库存',
          name: "西瓜"
        }, {
          id: 4,
          price: 99,
          priceDesc: '价格',
          count: 20,
          countDesc: '库存',
          name: "南瓜"
        }, {
          id: 5,
          price: 120,
          priceDesc: '价格',
          count: 1,
          countDesc: '库存',
          name: "西红柿"
        }],
        attributes: [{
          value: "price",
          label: "价格"
        }, {
          value: "count",
          label: "库存"
        }], //属性列表
        sortTypes: [{
          value: "asc",
          label: "升序"
        }, {
          value: "desc",
          label: "降序"
        }], //排序方式列表
      }
    },
    mounted() {
      // this.fruits.forEach(item => {
      //   this.attributes.push(Object.keys(item))
      // })
      // console.info(this.attributes)
      console.info(this.attribute)
      console.info(this.sortType)
      this.orderArr()
    },
    watch: {
      attribute(n) {
        this.orderArr()
      },
      sortType(n) {
        this.orderArr()
      }
    },
    methods: {
      orderArr() {
        this.fruits.sort(this.order(this.attribute, this.sortType)) //使用全局混入的方式
      }
    }
  }
</script>

<style>
</style>
