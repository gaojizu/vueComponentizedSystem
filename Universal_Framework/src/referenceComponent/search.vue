<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>



    <div class="divtest">
      这是一个div
       <span>
         这是一个字体
       </span>

    </div>


    <!--    <van-field onkeypress="TextValidate()" label="不可以特殊字符"></van-field>-->
    <input onkeypress="TextValidate()" type="text" οnkeyup="this.value=this.value.replace(/[^u4e00-u9fa5w]/g,'');">

    <van-field placeholder="请输入" type="textarea"
               onkeyup="this.value=this.value.replace(/[#\$\^&]/g,'');"
               label="应用名称"></van-field>

    <van-field placeholder="请输入表情" type="textarea"
               v-model="useVlaue"
               onkeyup="this.value=this.value.replace(/[#\$\^&]/g,'');"
               label="应用名称"></van-field>

    <van-field v-model="currValue" @click="vantShow=true" placeholder="请选择" label="应用名称"
               :rules="[{ required: true, message: '请选择应用名称' }]"></van-field>


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

    <!--    文件上传-->
    <van-uploader v-model="fileList" :before-delete="deleteImg" multiple/>
    <!--滚动-->
    <div class="scroll">
      <ul id="scrollDiv" ref="rollul" :class="{anim:animate==true}">
        <li v-for="item in scroll_lists"><span>{{item.time}}</span>
<!--          <span class="s-2">{{randomPhoneNumber()}}用户诊断了</span><span>{{item.company}}</span>-->
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        animate: false,
        scroll_lists: [
          {time: '2秒钟前', company: '海康威视（002415）'},
          {time: '8秒钟前', company: '烽火通信（600498）'},
          {time: '3分钟前', company: '恒逸石化（000703）'},
          {time: '5分钟前', company: '紫光国微（002049）'},
          {time: '39分钟前', company: '新天科技（300259）'},
          {time: '1小时前', company: '兴业银行（601166）'},
          {time: '3小时前', company: '中国核建（601611）'}
        ],
        currPage: this.$route.params.pageFlag,
        fileList: [],
        testvalue: 3,
        testsecond: ' ',
        useVlaue: '',
        currValue: '', //展示给用户的值
        vantShow: false,
        searchValue: '', //搜索的值
        value: "",
        text: "",
        arr1: ["tom"],
        arr2: [],
        arr3: ["tom", "jim", "jerry", "mary"],
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
    created() {
      setInterval(this.scroll, 2000)
      console.log(this.array_diff(this.arr3, this.arr1));
      this.removeFunc()
      if (this.testvalue === 0) {
        console.info("这是0")
      } else if (this.testvalue < 4 && this.testsecond.match(/^[ ]*$/)) {
        console.info("这是不满足情况的")
        console.info(Boolean(this.testsecond.match(/^[ ]*$/)))
      } else {
        console.info("对了")
      }
    },
    computed: {
      searchResult() {
        let filterLists = []; //过滤掉的数组
        let _this = this;
        this.info.map(function (item) {
          if (item.name.toLowerCase().indexOf(_this.searchValue.toLowerCase()) > -1) {
            return filterLists.push(item)
          }
        })
        return filterLists
      }
    },
    methods: {
      // 根据字典生成随机序列
      randomCode: function (len, dict) {
        for (var i = 0, rs = ''; i < len; i++)
          rs += dict.charAt(Math.floor(Math.random() * 100000000) % dict.length);
        return rs;
      },
      // 生成随机手机号码
      randomPhoneNumber: function () {
        // 第1位是1 第2,3位是3458 第4-7位是* 最后四位随机 this.$options.methods使用上一个函数的返回值
        return [1, this.$options.methods.randomCode(2, '3458'), '****', this.$options.methods.randomCode(4, '0123456789')].join('');
      }, scroll() {
        this.animate = true
        var that = this;
        setTimeout(function () {
          that.scroll_lists.push(that.scroll_lists[0]);
          that.scroll_lists.shift();
          that.animate = false;
        }, 2000)
      },

      /**
       *
       * @param a
       * @param b
       * @returns {*}
       */
      array_diff(a, b) {
        for (var i = 0; i < b.length; i++) {
          for (var j = 0; j < a.length; j++) {
            if (a[j] == b[i]) {
              a.splice(j, 1);
              j = j - 1;
            }
          }
        }
        return a;
      }
      ,

      removeFunc() {
        console.info("开始计算...")
        Array.prototype.indexOf = function (val) {
          for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
          }
          return -1;
        };
        Array.prototype.remove = function (val) {
          var index = this.indexOf(val);
          if (index > -1) {
            this.splice(index, 1);
          }
        };
        this.arr2 = this.arr3.remove("tom")
        console.info(this.arr2)
      }
      ,
      checkValue() {
        var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
        var org_val = this.useVlaue;
        if (regStr.test(org_val)) {
          this.useVlaue = org_val.replace(regStr, "")
          //$("#input").val(org_val.replace(regStr,""));
        }
      }
      ,
      deleteImg() {
        //直接删除
        return true;
      }
      ,
      TextValidate() {
        var code;
        var character;
        var err_msg = "Text can not contain SPACES or any of these special characters other than underscore (_) and hyphen (-).";
        if (document.all) //判断是否是IE浏览器
        {
          code = window.event.keyCode;
        } else {
          code = arguments.callee.caller.arguments[0].which;
        }
        var character = String.fromCharCode(code);

        var txt = new RegExp("[ ,\\`,\\~,\\!,\\@,\#,\\$,\\%,\\^,\\+,\\*,\\&,\\\\,\\/,\\?,\\|,\\:,\\.,\\<,\\>,\\{,\\},\\(,\\),\\',\\;,\\=,\"]");
        //特殊字符正则表达式
        if (txt.test(character)) {
          alert("User Name can not contain SPACES or any of these special characters:\n , ` ~ ! @ # $ % ^ + & * \\ / ? | : . < > {} () [] \" ");
          if (document.all) {
            window.event.returnValue = false;
          } else {
            arguments.callee.caller.arguments[0].preventDefault();
          }
        }
      }
      ,
      setValue(val) {
        this.currValue = val;
      }
    }
  }
</script>

<style scoped>
.divtest{
  border: 1px solid rebeccapurple;
}
  .divtest span{
    font-size: larger;;
    color: red;
  }
</style>
