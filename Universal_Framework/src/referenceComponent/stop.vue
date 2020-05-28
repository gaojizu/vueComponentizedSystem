<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>
    <div class="stopSty" @click="funDiv()">
      <button @click.stop="funBtn1()">button1</button>
      <button @click.stop="funBtn2()">button2</button>
    </div>
    <!--    <van-dialog title="选择应用" v-model="vantShow">-->
    <!--      <van-search-->
    <!--        v-model="value"-->
    <!--        placeholder="请输入搜索关键词"-->
    <!--        input-align="center"-->
    <!--      />-->
    <!--    -->
    <!--    </van-dialog>-->
    <van-field v-model="currValue" @click="vantShow=true" placeholder="请选择" label="应用名称"></van-field>
    <van-popup v-model="vantShow" closeable position="left" :style="{ height: '100%',width:'100%' }">
      <van-sticky>
        <div style="width: 80%">
          <van-search
            v-model="searchValue"
            shape="round"
            placeholder="请输入搜索关键词"
            input-align="center"
          />
        </div>
      </van-sticky>
      <div v-for="item in searchResult" :key="item">
        <van-cell :value="item" @click="setValue(item) ,vantShow=false"/>
      </div>
    </van-popup>
  </div>
</template>

<script>

  export default {
    name: "stop",
    data() {
      return {
        currPage: this.$route.params.pageFlag,
        currValue: '', //展示给用户的值
        vantShow: false,
        searchValue: '', //搜索的值
        value: "",
        text: "",
        info: [
          'EPGDS-专网互联网电视-EPGDS',
          'EPGDS-公网互联网电视-EPGDS',
          'TV1.0-专网互联网电视-浙江联通一周热点1.3',
          'TV2.0-专网互联网电视-浙江联通华为2.0',
          'TV3.0-专网互联网电视-浙江联通华为3.0',
          'TV3.0-专网互联网电视-浙江联通中兴看电视3.0'],
      }
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
      setValue(val){
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
