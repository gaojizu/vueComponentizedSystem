<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>
    <van-field v-model="currValue" @click="vantShow=true" placeholder="请选择" label="应用名称"></van-field>

    <van-popup v-model="vantShow" closeable position="left" :style="{ height: '100%',width:'100%' }">
        <div style="width: 80%;position:sticky;top:0;z-index:1;background:#FFFFFF">
          <van-search
            v-model="searchValue"
            shape="round"
            placeholder="请输入搜索关键词"
            input-align="center"
          />
        </div>
        <van-cell-group v-for="item in searchResult" :key="item.id">
          <van-cell :value="item.name" @click="setValue(item.name) ,vantShow=false"/>
        </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        currPage: this.$route.params.pageFlag,
        currValue: '', //展示给用户的值
        vantShow: false,
        searchValue: '', //搜索的值
        value: "",
        text: "",
        info: [
          {
            "id": 1,
            "name": "EPGDS-专网互联网电视-EPGDS",
            "user_id": "huaxixiao"
          },
          {
            "id": 2,
            "name": "EPGDS-公网互联网电视-EPGDS",
            "user_id": "qiubo"
          },
          {
            "id": 3,
            "name": "TV1.0-专网互联网电视-浙江联通一周热点1.3",
            "user_id": "lixiaorui"
          },
          {
            "id": 4,
            "name": "TV2.0-专网互联网电视-浙江联通华为2.0",
            "user_id": "lixiaorui"
          },
          {
            "id": 5,
            "name": "TV3.0-专网互联网电视-浙江联通华为3.0",
            "user_id": "lixiaorui"
          },
          {
            "id": 6,
            "name": "TV3.0-专网互联网电视-浙江联通中兴看电视3.0",
            "user_id": "lixiaorui"
          },
          {
            "id": 7,
            "name": "TV4.0-专网互联网电视-浙江联通华为4.0",
            "user_id": "lixiaorui"
          },
          {
            "id": 8,
            "name": "TV4.0-专网互联网电视-浙江联通中兴4.0",
            "user_id": "lixiaorui"
          },
          {
            "id": 9,
            "name": "TV1.0-专网互联网电视-陕西联通17看直播",
            "user_id": "lixiaorui"
          },
          {
            "id": 10,
            "name": "TV2.0-专网互联网电视-陕西联通2.0",
            "user_id": "lixiaorui"
          },
          {
            "id": 11,
            "name": "TV3.0-专网互联网电视-陕西联通3.0",
            "user_id": "lixiaorui"
          },
          {
            "id": 12,
            "name": "TV4.0-专网互联网电视-陕西联通4.0",
            "user_id": "lixiaorui"
          },
          {
            "id": 13,
            "name": "TV2.0-专网互联网电视-河北联通IPTV",
            "user_id": "yaorongjiang"
          },
          {
            "id": 14,
            "name": "TV2.0-专网互联网电视-安徽广行",
            "user_id": "liubo"
          },
          {
            "id": 15,
            "name": "增值包4.0-专网互联网电视-河南移动",
            "user_id": "yaorongjiang"
          },
          {
            "id": 16,
            "name": "增值包4.0-专网互联网电视-内蒙古电信",
            "user_id": "wangyaodong"
          },
          {
            "id": 17,
            "name": "增值包4.0-专网互联网电视-福建移动",
            "user_id": "yaorongjiang"
          },
          {
            "id": 18,
            "name": "增值包4.0-专网互联网电视-甘肃移动",
            "user_id": "liangdongdong"
          },
          {
            "id": 19,
            "name": "CP-专网互联网电视-江西电信",
            "user_id": "liangdongdong"
          },
          {
            "id": 20,
            "name": "TV1.0-专网互联网电视-黑龙江农垦",
            "user_id": "wangjinfu"
          },
          {
            "id": 21,
            "name": "TV2.0-专网互联网电视-黑龙江农垦",
            "user_id": "wangjinfu"
          },
          {
            "id": 22,
            "name": "TV3.0-专网互联网电视-黑龙江农垦",
            "user_id": "wangjinfu"
          },
          {
            "id": 23,
            "name": "TV2.0-专网互联网电视-宁夏联通",
            "user_id": "lixiaorui"
          },
          {
            "id": 25,
            "name": "CP-专网互联网电视-浙江移动",
            "user_id": "wangjinfu"
          },
          {
            "id": 26,
            "name": "TV3.0-专网互联网电视-宁夏联通",
            "user_id": "lixiaorui"
          },
          {
            "id": 27,
            "name": "增值包4.0-专网互联网电视-四川移动",
            "user_id": "wangjinfu"
          },
          {
            "id": 28,
            "name": "TV5.0-专网互联网电视-山西移动咪咕",
            "user_id": "songxiaozhong"
          },
          {
            "id": 29,
            "name": "增值包4.0-专网互联网电视-云南移动",
            "user_id": "liangdongdong"
          },
          {
            "id": 30,
            "name": "CP-专网互联网电视-山东新媒体",
            "user_id": "liubo"
          },
          {
            "id": 31,
            "name": "CP-专网互联网电视-新疆电信",
            "user_id": "liubo"
          },
          {
            "id": 33,
            "name": "CP-专网互联网电视-四川移动",
            "user_id": "wangjinfu"
          },
          {
            "id": 34,
            "name": "CP-专网互联网电视-黑龙江移动",
            "user_id": "wangjinfu"
          },
          {
            "id": 35,
            "name": "CP-专网互联网电视-江西移动",
            "user_id": "liangdongdong"
          },
          {
            "id": 36,
            "name": "CP-专网互联网电视-安徽新媒体",
            "user_id": "liubo"
          },
          {
            "id": 37,
            "name": "CP-专网互联网电视-安徽电信",
            "user_id": "liubo"
          },
          {
            "id": 38,
            "name": "CP-专网互联网电视-甘肃新媒体",
            "user_id": "liangdongdong"
          },
          {
            "id": 39,
            "name": "CP-专网互联网电视-河南移动",
            "user_id": "yaorongjiang"
          },
          {
            "id": 40,
            "name": "CP-专网互联网电视-河南新媒体电信版",
            "user_id": "yaorongjiang"
          },
          {
            "id": 41,
            "name": "CP-专网互联网电视-河南新媒体酒店版",
            "user_id": "yaorongjiang"
          },
          {
            "id": 42,
            "name": "CP-专网互联网电视-欧维克酒店-停止更新",
            "user_id": "lixiaorui"
          },
          {
            "id": 43,
            "name": "CP-专网互联网电视-内蒙古电信",
            "user_id": "wangyaodong"
          },
          {
            "id": 44,
            "name": "CP-专网互联网电视-内蒙古移动",
            "user_id": "wangyaodong"
          },
          {
            "id": 45,
            "name": "CP-专网互联网电视-云南新媒体",
            "user_id": "liangdongdong"
          },
          {
            "id": 46,
            "name": "CP-专网互联网电视-北京移动",
            "user_id": "yaojingru"
          },
          {
            "id": 47,
            "name": "CP-专网互联网电视-北京国安广视",
            "user_id": "yaojingru"
          },
          {
            "id": 51,
            "name": "CP-专网互联网电视-陕西广信联通",
            "user_id": "yaorongjiang"
          },
          {
            "id": 52,
            "name": "TV2.0-专网互联网电视-山东电信-停服中",
            "user_id": "liubo"
          },
          {
            "id": 53,
            "name": "TV3.0-专网互联网电视-山东电信-停服中",
            "user_id": "liubo"
          },
          {
            "id": 54,
            "name": "TV3.0-专网互联网电视-河南电信",
            "user_id": "yaorongjiang"
          },
          {
            "id": 55,
            "name": "增值包4.0-专网互联网电视-青海电信",
            "user_id": "liangdongdong"
          },
          {
            "id": 56,
            "name": "增值包4.0-专网互联网电视-安徽移动",
            "user_id": "liubo"
          },
          {
            "id": 57,
            "name": "TV2.0-专网互联网电视-专网2.0源站",
            "user_id": "huaxixiao"
          },
          {
            "id": 58,
            "name": "TV3.0-专网互联网电视-专网3.0源站",
            "user_id": "huaxixiao"
          },
          {
            "id": 59,
            "name": "TV4.0-专网互联网电视-专网4.0源站",
            "user_id": "huaxixiao"
          },
          {
            "id": 60,
            "name": "TV4.0-专网互联网电视-专网4.0图片",
            "user_id": "huaxixiao"
          },
          {
            "id": 62,
            "name": "天猫魔盒-天猫魔盒播控-天猫魔盒播控",
            "user_id": "qiubo"
          },
          {
            "id": 63,
            "name": "TV1.0-公网互联网电视-SONY BIVL",
            "user_id": "linbo"
          },
          {
            "id": 64,
            "name": "TV1.0-公网互联网电视-老media_ipanel",
            "user_id": "linbo"
          },
          {
            "id": 65,
            "name": "TV1.0-公网互联网电视-XML",
            "user_id": "linbo"
          },
          {
            "id": 66,
            "name": "TV2.0-公网互联网电视-BS2.0",
            "user_id": "linbo"
          },
          {
            "id": 67,
            "name": "TV3.0-公网互联网电视-BS3.0",
            "user_id": "linbo"
          },
          {
            "id": 68,
            "name": "TV1.0-公网互联网电视-CLPS1.3",
            "user_id": "linbo"
          },
          {
            "id": 70,
            "name": "4K-公网互联网电视-公网4K",
            "user_id": "wulianchan"
          },
          {
            "id": 71,
            "name": "TV4.0-公网互联网电视-海信VIDDA-SDK",
            "user_id": "wulianchan"
          },
          {
            "id": 73,
            "name": "TV5.0-公网互联网电视-小米SDK5.0",
            "user_id": "wulianchan"
          },
          {
            "id": 75,
            "name": "TV1.0-公网互联网电视-CLPS1.2",
            "user_id": "linbo"
          },
          {
            "id": 76,
            "name": "TV4.0-公网互联网电视-公网TV4.0",
            "user_id": "linbo"
          },
          {
            "id": 77,
            "name": "TV5.0-公网互联网电视-公网TV5.0",
            "user_id": "wangwei"
          },
          {
            "id": 78,
            "name": "TV2.0-公网互联网电视-CS2.0",
            "user_id": "wulianchan"
          },
          {
            "id": 79,
            "name": "数据接口输出-公网互联网电视-南瓜视频数据接口",
            "user_id": "linbo"
          },
          {
            "id": 80,
            "name": "数据接口输出-公网互联网电视-海信数据接口",
            "user_id": "wulianchan"
          },
          {
            "id": 82,
            "name": "华数手机电视-专网手机电视-石桥华数手机电视",
            "user_id": "shichengfeng"
          },
          {
            "id": 83,
            "name": "华数手机电视-专网手机电视-宁夏华数手机电视",
            "user_id": "shichengfeng"
          },
          {
            "id": 84,
            "name": "华数手机电视-专网手机电视-新疆华数手机电视",
            "user_id": "shichengfeng"
          },
          {
            "id": 85,
            "name": "党建时代先锋网-专网党建时代先锋网-浙江党建时代先锋网",
            "user_id": "shenshuhan"
          },
          {
            "id": 86,
            "name": "党建时代先锋网-专网党建时代先锋网-宁夏党建时代先锋网",
            "user_id": "shenshuhan"
          },
          {
            "id": 87,
            "name": "党建时代先锋网-专网党建时代先锋网-西安党建时代先锋网",
            "user_id": "shenshuhan"
          },
          {
            "id": 89,
            "name": "华数TV网-华数TV网-华数TV网",
            "user_id": "huyuxi"
          },
          {
            "id": 90,
            "name": "华数在线-华数在线-华数在线",
            "user_id": "huyuxi"
          },
          {
            "id": 91,
            "name": "OTT官网-OTT官网-OTT官网",
            "user_id": "huyuxi"
          },
          {
            "id": 92,
            "name": "招聘网-招聘网-招聘网",
            "user_id": "huyuxi"
          },
          {
            "id": 93,
            "name": "精彩分享网-精彩分享网-精彩分享网",
            "user_id": "huyuxi"
          },
          {
            "id": 94,
            "name": "投教网-投教网-投教网",
            "user_id": "huyuxi"
          },
          {
            "id": 95,
            "name": "歌华子站-歌华子站-歌华子站",
            "user_id": "huyuxi"
          },
          {
            "id": 96,
            "name": "广电在线-广电在线-广电在线",
            "user_id": "huyuxi"
          },
          {
            "id": 97,
            "name": "华数传媒官网-华数传媒官网-华数传媒官网",
            "user_id": "huyuxi"
          },
          {
            "id": 98,
            "name": "华数集团官网-华数集团官网-华数集团官网",
            "user_id": "huyuxi"
          },
          {
            "id": 99,
            "name": "华数TV手机客户端-华数TV手机客户端-华数TV手机客户端",
            "user_id": "huyuxi"
          },
          {
            "id": 100,
            "name": "经纬CMS公网-经纬CMS公网-经纬CMS公网",
            "user_id": "linbo"
          },
          {
            "id": 101,
            "name": "经纬CMS专网-经纬CMS专网-经纬CMS专网",
            "user_id": "linbo"
          },
          {
            "id": 102,
            "name": "PCCMS-PCCMS-PCCMS",
            "user_id": "huyuxi"
          },
          {
            "id": 103,
            "name": "WCMS-WCMS-WCMS",
            "user_id": "linbo"
          },
          {
            "id": 104,
            "name": "WCMS2.0-WCMS2.0-WCMS2.0",
            "user_id": "wangwei"
          },
          {
            "id": 105,
            "name": "OCMS-OCMS-OCMS",
            "user_id": "shichengfeng"
          },
          {
            "id": 106,
            "name": "PCMS-PCMS-PCMS",
            "user_id": "shichengfeng"
          },
          {
            "id": 107,
            "name": "统一信息管理系统-统一信息管理系统-统一信息管理系统",
            "user_id": "huyuxi"
          },
          {
            "id": 108,
            "name": "UPM-公网UPM-公网UPM",
            "user_id": "zhangpengcheng"
          },
          {
            "id": 109,
            "name": "统一广告-统一广告-统一广告",
            "user_id": "linbo"
          },
          {
            "id": 110,
            "name": "大数据统计-大数据统计-大数据统计",
            "user_id": "qiubo"
          },
          {
            "id": 111,
            "name": "大数据统计-经纬中转统计-经纬中转统计",
            "user_id": "linbo"
          },
          {
            "id": 112,
            "name": "用户成长体系-用户成长体系-用户成长体系",
            "user_id": "zhangpengcheng"
          },
          {
            "id": 113,
            "name": "统一运营平台-微营销-微营销",
            "user_id": "zhangpengcheng"
          },
          {
            "id": 114,
            "name": "统一运营平台-营业厅-营业厅",
            "user_id": "zhangpengcheng"
          },
          {
            "id": 115,
            "name": "统一运营平台-专网互联网电视-专网活动系统",
            "user_id": "zhangpengcheng"
          },
          {
            "id": 116,
            "name": "统一运营平台-公网互联网电视-公网活动系统",
            "user_id": "zhangpengcheng"
          },
          {
            "id": 117,
            "name": "资产鉴定-资产鉴定-资产鉴定",
            "user_id": "wangwei"
          },
          {
            "id": 118,
            "name": "手机专网营销支撑-手机专网营销支撑-手机专网营销支撑",
            "user_id": "huyuexin"
          },
          {
            "id": 119,
            "name": "手机专网用户中心-手机专网用户中心-手机专网用户中心",
            "user_id": "huyuexin"
          }],
      }
    },
    computed: {
      searchResult() {
        let filterLists = []; //过滤掉的数组
        let _this = this;
        this.info.map(function (item) {
          if (item.name.indexOf(_this.searchValue) > -1) {
            return filterLists.push(item)
          }
        })
        return filterLists
      }
    },
    methods: {
      setValue(val) {
        this.currValue = val;
      }
    }

  }
</script>

<style scoped>

</style>
