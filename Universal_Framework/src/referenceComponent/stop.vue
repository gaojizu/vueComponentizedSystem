<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>
    <h1>打开调试模式，看<mark>console</mark>的变化</h1>
       <div class="stopSty" @click="funDiv()">
          <button @click.stop="funBtn1()">button1</button>
          <button @click.stop="funBtn2()">button2</button>
       </div>
  </div>
</template>

<script>
  export default {
    name: "stop",
    data() {
      return {
        currPage: this.$route.params.pageFlag,
        statValue: 1,
        checkValue: '',
        url: '',
        dis: false,
        dialogShow: false,
        currValue: '', //展示给用户的值
        vantShow: false,
        searchValue: '', //搜索的值
        username: '',
        password: 'Vghlajgdsoi',
        value: "",
        text: "",
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
    methods: {
      funDiv() {
        console.info("美好的页面")
      },
      funBtn1() {
        console.info("点击了button1")
      },
      funBtn2() {
        console.info("点击了button2")
      },
      setValue(val) {
        this.currValue = val;
      }
    }
  }
</script>

<style scoped>
  .stopSty {
    width: 300px;
    height: 300px;
    background: rebeccapurple;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
  }

  .stopSty button {
    height: 70px;
    width: 140px;
    background: #FFFFFF;
    border: none;
    color: black;
    margin-top: 10px;
  }
</style>
