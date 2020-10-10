<template>
  <div>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created() {
      // this._justTest()
      this._func_all()
    },
    methods: {

      _justTest() {
        let p1 = new Promise((resolve, reject) => {
          resolve("我是第一个Promise对象")
        })
        let p2 = new Promise((resolve, reject) => {
          resolve("我是第二个Promise对象")
        })
        Promise.all([p1, p2]).then(res => {
          console.info(res)
        }).catch(err => {
          console.err(err)
        })
        Promise.race([p1, p2]).then(res => {
          console.info(res)
        }).catch(err => {
          console.err(err)
        })
      },


      _func_all() {
        let p1 = new Promise((resolve, reject) => {
          this.$axios.get('api/bootstrapTable.do').then(res => {
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        })
        let p2 = new Promise((resolve, reject) => {
          this.$axios.get('api/getStudents.do').then(res => {
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        })
        let p3 = new Promise((resolve, reject) => {
          resolve("我是第二个Promise对象")
        })
        // Promise.all([p1, p2,p3]).then(res => {
        //   console.info(res)
        // }).catch(err => {
        //   console.info(err)
        // })
        Promise.race([p1, p2, p3]).then(res => {
          console.info(res)
        }).catch(err => {
          console.info(err)
        })
      }
    }
  }
</script>

<style>
</style>
