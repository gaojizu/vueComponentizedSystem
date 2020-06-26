<template>
  <div>
    <van-field label="请输入：" placeholder="请输入" v-model="UnicodeValue" @input="enCodeClick">
    </van-field>
    <div>编码结果：{{enCode}}</div>
    <div>解码结果：{{deCode}}</div>
  </div>
</template>

<script>
  export default {
    name: "base",
    data() {
      return {
        UnicodeValue: '',
        deCode: "",
        enCode: ""
      }
    },
    /**
     * base64转码
     * 1.npm install --save js-base64
     * 2.在项目文件中引入 let Base64 = require('js-base64').Base64
     * 在项目文件中使用
     * Base64.encode('小明你好👋')  // 5bCP5piO5L2g5aW98J+Riw==
     * Base64.decode('5bCP5piO5L2g5aW98J+Riw==)  // 小明你好👋
     */
    created() {
      this.UnicodeValue = '小明你好👋'
      this.enCodeClick(this.UnicodeValue)
    },
    methods:{
      //编码 Base64.encode(str)
      enCodeClick(str) {
        this.enCode = Base64.encode(str)
        this.deCodeClick(Base64.encode(str))
      },
      //转码 Base64.decode(str)
      deCodeClick(str) {
        this.deCode = Base64.decode(str)
      },
    }
  }
</script>

<style scoped>

</style>
