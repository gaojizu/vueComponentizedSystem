<!-- <template>
  <div>
    <el-form ref="form" :model="form">
      <el-form-item label="知识点">
        <el-select v-model="form.knowledge" clearable multiple filterable allow-create default-first-option placeholder="输入知识点内容，用回车添加">
          <el-option v-for="item in knowledge" :key="item.value" :label="item.label" :value="item.label"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button @click="showData">点击显示</el-button>
    <code>
      {{msg}}
    </code>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        knowledge: [{
            label: "知识点1"
          },
          {
            label: "知识点2"
          },
          {
            label: "知识点3"
          }
        ],
        msg: '',
        form: {}
      }
    },
    methods: {
      showData() {
        this.msg = this.form
      }
    }
  }
</script>

<style>
</style>
 -->

<template>
  <div>
    <!-- <label class="labelname">{{labelname}}</label> -->
    <div class="inputbox">
      <div class="arrbox">
        <div v-for="(item,index) in labelarr" :key="index" class="spanbox">
          <span>{{item}}</span>
          <i class="spanclose" @click="removeitem(index,item)"></i>
        </div>
        <input placeholder="敲击空格多条输入" size="5" v-model="currentval" @keyup.space="addlabel" class="input" type="text" />
      </div>
    </div>
    <code>{{labelarr.join(",")}}</code>
    <!-- 常用label展示 -->
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'enterlabel',
    props: {
      parentarr: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        currentval: '',
        labelarr: []
      }
    },
    watch: {
      labelarr(old, cur) {
        this.$emit('on-change', this.labelarr)
      },
      parentarr() {
        if (this.parentarr.length > 0) {
          this.labelarr = []
          for (let i = 0; i < this.parentarr.length; i++) {
            this.labelarr.push(this.parentarr[i])
          }
        } else {
          this.labelarr = []
        }
      }
    },
    methods: {
      // 移除标签
      removeitem(index, item) {
        this.labelarr.splice(index, 1)
      },
      // input回车加入labelarr中
      addlabel() {
        let count = this.labelarr.indexOf(this.currentval)
        if (count === -1) {
          this.labelarr.push(this.currentval)
        }
        this.currentval = ''
      }
    }
  }
</script>

<style>
  .inputbox {
    background-color: white;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 6px;
    margin-bottom: 18px;
    padding: 6px 1px 1px 6px;
    text-align: left;
    font-size: 0;
    margin-bottom: 0;
  }

  .input {
    font-size: 14px;
    border: none;
    box-shadow: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    width: auto !important;
    max-width: inherit;
    min-width: 80px;
    vertical-align: top;
    height: 30px;
    color: #34495e;
    margin: 2px;
    line-height: 30px;
  }

  .arrbox {
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 6px 1px 1px 6px;
    text-align: left;
    font-size: 0;
  }

  .spanbox {
    line-height: 30px;
    margin: 2px;
    padding: 0 10px;
    background-color: #1abc9c;
    color: white;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    transition: 0.25s linear;
  }

  .spanbox:hover {
    padding: 0px 17px 0 3px;
  }

  .spanclose {
    color: white;
    padding: 0 10px 0 0;
    cursor: pointer;
    font-size: 12px;
    position: absolute;
    right: -3px;
    text-align: right;
    text-decoration: none;
    top: 0;
    width: 100%;
    bottom: 0;
    z-index: 2;
    opacity: 0;
    filter: "alpha(opacity=0)";
    transition: opacity 0.25s linear;
    font-style: normal;
  }

  .spanbox:hover .spanclose {
    padding: 0 10px 5px 0;
    opacity: 1;
    -webkit-filter: none;
    filter: none;
  }

  .spanclose:after {
    content: "x";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 27px;
  }
</style>
