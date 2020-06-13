<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>
    <!--    <div class="stopSty" @click="funDiv()">-->
    <!--      <button @click.stop="funBtn1()">button1</button>-->
    <!--      <button @click.stop="funBtn2()">button2</button>-->
    <!--    </div>-->
    <van-field label="请输入：" placeholder="请输入" v-model="UnicodeValue" @input="enCodeClick">

    </van-field>
    <van-field label="输入：" placeholder="请输入" v-model="checkValue">

    </van-field>

    <div>编码结果：{{enCode}}</div>
    <div>解码结果：{{deCode}}</div>

    <van-rate v-model="statValue" allow-half void-icon="star" void-color="#eee"/>
    <van-field type="textarea" label="评论：" v-model="comment"></van-field>
    <van-button type="info" @click="submitComment">提交评论</van-button>
    <van-button type="info" @click="openDialog">打开dialog</van-button>
    <van-button type="info" @click="funCheckValue" :disabled="dis">校验数据格式</van-button>

    <van-dialog v-model="dialogShow" title="更新信息" confirmButtonText="复制密码" :data-clipboard-text="password"
                @confirm="closeDialog" class="filed" show-cancel-button>
      <van-cell-group>
        <van-field label-align="center" readonly colon v-model="url" label="登录地址" placeholder="www.baidu.com"/>
        <van-field label-align="center" readonly colon v-model="username" label="用户名" placeholder="weileiming"/>
        <van-field label-align="center" readonly colon v-model="password" label="密码" placeholder="12345678"/>
      </van-cell-group>
    </van-dialog>

    <!--    演示slot的使用-->
   <el-input v-model.trim = 'trimValue' placeholder="请输入空格"></el-input>
    <span>
      {{trimValue}}
    </span>








  </div>
</template>

<script>
  let Base64 = require('js-base64').Base64
  import Clipboard from "clipboard";

  export default {
    name: "stop",
    data() {
      return {
        trimValue:'',//判断输入的是不是空格
        currPage: this.$route.params.pageFlag,
        statValue: 1,
        checkValue: '',
        url: '',
        dis: false,
        dialogShow: false,
        comment: '',//评论
        UnicodeValue: '',
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
      checkValuefun(str) {
        if (str.trim().length) {
          return str;
        } else {
          this.$toast("内容为空")
        }
      },
      funCheckValue() {
        if (this.checkValue.trim().length) {
          //按钮失效
          this.$toast("按钮失效")
          this.dis = true;
        } else {
          this.$toast("按钮不失效")
          this.dis = false;
          return false;
          //按钮不失效
        }
        console.info("继续执行")
        //this.checkValue = this.checkValuefun(this.checkValue)
        //this.$toast(this.checkValue)
      },
      openDialog() {
        this.dialogShow = true
      },
      closeDialog() {
        var clipboard = new Clipboard(".filed"); //单页面引用
        clipboard.on("success", e => {
          this.$toast("已复制到粘贴板")
          clipboard.destroy(); //释放内存
        });
      },
      submitComment() {
        var reg = /(\([\u4e00-\u9fa5])*([\u4e00-\u9fa5])\2{2}([\u4e00-\u9fa5])*/g.test("你好好好ya")
        if (this.statValue >= 4) {
          this.$toast("提交成功" + this.comment)
        } else {
          if (this.comment.match(/^[ ]*$/)) {
            this.$toast("评论内容不能为空")
          } else if (/([\s\S])\1+\1+\1+/g.test(this.comment)) {
            //console.info(/(\([\u4e00-\u9fa5])*([\u4e00-\u9fa5])\2{3}([\u4e00-\u9fa5])*/g.test(this.comment))
            this.$toast("输入内容不规范")
            //this.$toast("提交内容成功" + this.comment)
          } else {
            this.$toast("提交内容成功" + this.comment)
          }
        }
      },
      containsRepeatingLetter(str) {
        return /([a-zA-Z])\1/.test(str);
      },
      subStr(str) {
        var arr = [];
        for (var i = 0; i < str.length - 2; i++) {
          var x = str.substring(i, i + 4); //x就是每次截取的值
          arr.push(x);
        }
        return arr;
      },
      allSame(value) {
        let data = value.split('');
        let chartCode = []; // 存放ASCII码
        let same = true;
        for (let i in data) {
          chartCode.push(value.charCodeAt(i));
          if (chartCode.length === data.length) {
            for (let i = 1; i <= chartCode.length; i++) {
              if (Math.abs(Number(chartCode[i]) - Number(chartCode[i - 1])) > 1) {
                same = false;
                break;
              }
            }
          }
        }
        return same;
      },
      //编码 Base64.encode(str)
      enCodeClick(str) {
        this.enCode = Base64.encode(str)
        this.deCodeClick(Base64.encode(str))
      },
      //转码 Base64.decode(str)
      deCodeClick(str) {
        this.deCode = Base64.decode(str)
      },

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
    },
    computed: {
      searchResult() {
        var list = [];
        var _this = this;
        this.info.map(function (item) {
          if (item.indexOf(_this.searchValue) > -1) {
            return list.push(item)
          }
        })
        return list
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
