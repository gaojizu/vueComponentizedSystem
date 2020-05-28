<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input v-model="value" style="width: 200px"></el-input>


    <!--    搜索功能-->
    <div class="row">
      <div class="col-lg-6" style="margin:20px">
        <div class="input-group">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">搜索</button>
                </span>
          <input type="text" v-model="text" class="form-control" placeholder="Search for...">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in searchResult">{{item}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import commonBack from "../commonComponents/commonBack";

  export default {
    data() {
      return {
        vantShow : false,
        dataMMA : '',
        currPage: this.$route.params.pageFlag,
        text: '',
        info: [
          'EPGDS-专网互联网电视-EPGDS',
          'EPGDS-公网互联网电视-EPGDS',
          'TV1.0-专网互联网电视-浙江联通一周热点1.3',
          'TV2.0-专网互联网电视-浙江联通华为2.0',
          'TV3.0-专网互联网电视-浙江联通华为3.0',
          'TV3.0-专网互联网电视-浙江联通中兴看电视3.0'],
        options: [{
          value: '10秒',
          label: '这是10'
        }, {
          value: '20秒',
          label: '这是20'
        }, {
          value: '30秒',
          label: '这是30'
        }, {
          value: '40秒',
          label: '这是40'
        }, {
          value: '50秒',
          label: '这是50'
        }],
        value: ''
      }
    },
    methods: {},
    computed: {
      searchResult() {
        var list = [];
        var _this = this;
        this.info.map(function (item) {
          if (item.indexOf(_this.text) > -1) {
            return list.push(item)
          }
        })
        return list
      }
    }
  }
</script>

<style scoped>


</style>
