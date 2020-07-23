<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>
    <div class="div_span">
      <span>
        {{message}}
      </span>
      <h6 v-for="(val,key) in this.obj">
        {{val}} - {{key}}
      </h6>
    </div>
    <div class="div_h5">
      <h5 v-for="item in Object.values(obj)">
        {{item}}
      </h5>
    </div>
    <div class="div_h4">
      <h4 v-for="item in Arr">
        {{item}}
      </h4>
    </div>
    <pre>
      {{code}}
    </pre>
    <button @click="_implementCurrCode">执行代码</button>
    <pre>
      {{vueSetCode}}
    </pre>
    <button @click="_implementCurrvueSetCode">执行代码</button>
  </div>
</template>

<script>
  export default {
    data() {
      root:'我是boottable根结点'
      return {
        currPage: this.$route.params.pageFlag,
        message: 'msg',
        obj: {
          a: 'one',
          b: 'two',
          c: 'three'
        },
        Arr: [1, 2, 3],
        code: function() {
          return this.message = 123456, this.obj.a = 'newA', this.obj.e = 'newe', this.Arr[3] = 'newArrValue'
        },
        vueSetCode: function() {
          return this.$set(this.obj, 'd', 'newValue'), this.$set(this.Arr, 3, 'newItem')

        }
      }
    },
    created() {
      console.info(this.$root.root)
    },
    methods: {
      _implementCurrCode() {
        this.code()
      },
      _implementCurrvueSetCode() {
        this.vueSetCode()
      }
    }
  }
</script>

<style scoped="scoped">
  :root {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

  .div_span::before {
    content: "data中一个数据";
  }

  .div_span {
    width: 200px;
    height: 200px;
    border: 2px solid #008000;
  }

  .div_h5::before {
    content: "data中一个对象";
  }

  .div_h5 {
    width: 200px;
    height: 200px;
    border: 2px solid #58AEF5;
  }

  .div_h4::before {
    content: "data中一个数组";
  }

  .div_h4 {
    width: 200px;
    height: 200px;
    border: 2px solid #8B0000;
  }
</style>
