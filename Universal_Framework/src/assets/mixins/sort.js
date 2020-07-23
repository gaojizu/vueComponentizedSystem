/**
 * @author clearlove
 * @date 2020/07/04
 * @function order 排序
 * @param {type}  = [string] asc 升序 desc 降序  排序方式
 * @params field 排序依据
 * @description 该排序是依据js的sort方法进行排序
 * @example console.table(goods.sort(order("price", "desc")))  //goods是一个数组 依据price的属性进行降序排列
 * @use 全局注册使用需要在mainjs中进行注册
 */
let mixin = {
  methods: {
    order(field, type = "asc") {
      return function(a, b) {
        return type === "asc" ?
          a[field] > b[field] ? 1 : -1 : a[field] > b[field] ? -1 : 1;
      }
    }
  }
}


export default mixin
