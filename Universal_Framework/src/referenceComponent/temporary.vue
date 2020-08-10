<template>
  <div>
    <input onkeypress="TextValidate()" type="text" οnkeyup="this.value=this.value.replace(/[^u4e00-u9fa5w]/g,'');">
    <van-field placeholder="请输入" type="textarea" onkeyup="this.value=this.value.replace(/[#\$\^&]/g,'');" label="应用名称"></van-field>
    <van-field placeholder="请输入表情" type="textarea" v-model="useVlaue" onkeyup="this.value=this.value.replace(/[#\$\^&]/g,'');"
      label="应用名称"></van-field>
    <div class="scroll">
      <ul id="scrollDiv" ref="rollul" :class="{anim:animate==true}">
        <li v-for="item in scroll_lists"><span>{{item.time}}</span>
          <!--          <span class="s-2">{{randomPhoneNumber()}}用户诊断了</span><span>{{item.company}}</span>-->
        </li>
      </ul>
    </div>
    <button @click.prevent.once="testOnce">点击</button>
  </div>
</template>

<script>
  //temporary
  export default {
    data() {
      return {
        useVlaue: '',
      }
    },
    methods: {
      testOnce(){
        console.info("dianji")
      },
      TextValidate() {
        var code;
        var character;
        var err_msg =
          "Text can not contain SPACES or any of these special characters other than underscore (_) and hyphen (-).";
        if (document.all) //判断是否是IE浏览器
        {
          code = window.event.keyCode;
        } else {
          code = arguments.callee.caller.arguments[0].which;
        }
        var character = String.fromCharCode(code);

        var txt = new RegExp(
          "[ ,\\`,\\~,\\!,\\@,\#,\\$,\\%,\\^,\\+,\\*,\\&,\\\\,\\/,\\?,\\|,\\:,\\.,\\<,\\>,\\{,\\},\\(,\\),\\',\\;,\\=,\"]"
        );
        //特殊字符正则表达式
        if (txt.test(character)) {
          alert(
            "User Name can not contain SPACES or any of these special characters:\n , ` ~ ! @ # $ % ^ + & * \\ / ? | : . < > {} () [] \" "
          );
          if (document.all) {
            window.event.returnValue = false;
          } else {
            arguments.callee.caller.arguments[0].preventDefault();
          }
        }
      }
    }
  }
</script>

<style>
</style>
