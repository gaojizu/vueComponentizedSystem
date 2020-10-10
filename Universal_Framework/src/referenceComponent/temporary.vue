<template>
  <div>
    <input onkeypress="TextValidate()" type="text" οnkeyup="this.value=this.value.replace(/[^u4e00-u9fa5w]/g,'');">
    <van-field placeholder="请输入" type="textarea" onkeyup="this.value=this.value.replace(/[#\$\^&]/g,'');" label="应用名称"></van-field>
    <van-field placeholder="请输入表情" type="textarea" v-model="useVlaue" onkeyup="this.value=this.value.replace(/[#\$\^&]/g,'');"
      label="应用名称"></van-field>
    <div class="scroll">
      <!-- <ul id="scrollDiv" ref="rollul" :class="{anim:animate==true}">
        <li v-for="item in scroll_lists"><span>{{item.time}}</span>
                  <span class="s-2">{{randomPhoneNumber()}}用户诊断了</span><span>{{item.company}}</span>
        </li>
      </ul> -->
    </div>
    <button @click.prevent.once="testOnce">点击</button>
    <el-form ref="form" :model="form">
      <el-form-item label="端口号">
        <el-select v-model="form.knowledge" clearable multiple filterable allow-create default-first-option placeholder="输入端口号，用回车添加">
          <el-option v-for="item in knowledge" :key="item.value" :label="item.label" :value="item.label"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-input label="123" style="width: 300px;" type="text"></el-input>
    <button @click="getknowledge">点击</button>
    <br />
    <br />
    <el-input min="1" max="65535" type="number" placeholder="请输入端口号,回车添加多个" style="width: 200px;" class="input-new-tag" v-model="inputValue" ref="saveTagInput"
      size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
    </el-input>
    <br />
    <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
      {{tag}}
    </el-tag>


  </div>
</template>

<script>
  //temporary
  export default {
    data() {
      return {
        useVlaue: '',
        knowledge: [],
        form: {},
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      testOnce() {
        console.info("dianji")
      },
      getknowledge() {
        // console.info(this.form.knowledge.join(","))
        console.info(this.dynamicTags.join(","))
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
