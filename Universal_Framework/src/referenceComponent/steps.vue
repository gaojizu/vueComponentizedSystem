<template>
  <div>
    <common-back :currPage='currPage'>
    </common-back>
    <common-Steps
      class="curr-step-sty"
      :active="active"
      :stepsDataList='stepsDataList'
      :process-status='process_status'
      :finish-status='finish_status'
      :direction="direction"
    >
    </common-Steps>
    <div class="global-option">
      <span>请输入已完成步数：</span>
      <el-input style="width: 200px" type="Number" v-model="stepsNum"></el-input>
      <el-button type="primary" plain @click="add_steps('behind')">新增一步</el-button>
      <el-button type="primary" plain @click="add_steps('prep')">从前面新增一步</el-button>
      <el-button type="warning" plain @click="del_steps('prep')">删除一步</el-button>
      <el-button type="warning" plain @click="del_steps('behind')">从前面删除一步</el-button>
    </div>
    <!--    <div ref="currDiv" v-for="item in items">-->
    <!--        <p @click="currDiv(item.index)"><input type="checkbox" :name="item.name" :value="item.value">{{item.name}}</p>-->
    <!--    </div>-->
    <van-button @click="turnTagFlag = true">显示</van-button>
    <!--    <van-dialog v-model="turnTagFlag" show-cancel-button confirmButtonText="提交">-->
    <!--      <template #title><span class="tiptitle">转签</span></template>-->
    <!--      <van-cell :title="turnTagTxt"></van-cell>-->
    <!--      <van-row id="turnTagel">-->
    <!--        <van-popup v-model="defaultTrue" :overlay="false">-->
    <!--          <van-radio-group v-model="turnTagTxt">-->
    <!--            <van-cell-group class="level-option">-->
    <!--              <van-cell v-for="(item,index) in allUsers" clickable :key="item.username"-->
    <!--                        :title="item.alias?item.alias:item.username"-->
    <!--                        @click="currCheck(index),turnTagTxt=item.alias?item.alias:item.username">-->
    <!--                <template #right-icon>-->
    <!--                  <van-radio ref="currCheck" :name="item.alias?item.alias:item.username"/>-->
    <!--                </template>-->
    <!--              </van-cell>-->
    <!--            </van-cell-group>-->
    <!--          </van-radio-group>-->
    <!--        </van-popup>-->
    <!--      </van-row>-->
    <!--    </van-dialog>-->


    <van-dialog v-model="turnTagFlag" show-cancel-button confirmButtonText="提交">
      <template #title><span class="tiptitle">加签</span></template>
      <van-cell :title="turnTagtitle"></van-cell>
      <van-row id="turnTagel">
        <van-popup v-model="defaultTrue" :overlay="false">
          <van-checkbox-group v-model="turnTagTxtList">
            <van-cell-group class="level-option">
              <van-cell v-for="(item, index) in allUsers" clickable :key="item.username"
                        :title="item.alias?item.alias:item.username"
              >
                <template #right-icon>
                  <van-checkbox
                    :key="index"
                    @click.stop="currCheck(index)"
                    ref="refCurrCheck"
                                :name="item.alias?item.alias:item.username"
                                shape="square"/>
                </template>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </van-popup>
      </van-row>
    </van-dialog>


<!--    <van-dialog v-model="turnTagFlag" show-cancel-button confirmButtonText="提交">-->
<!--      <template #title><span class="tiptitle">加签</span></template>-->
<!--      <van-cell :title="turnTagtitle"></van-cell>-->
<!--      <van-row id="turnTagel">-->
<!--        <van-popup v-model="defaultTrue" :overlay="false">-->
<!--          <van-checkbox-group v-model="turnTagTxtList">-->
<!--            <van-checkbox-->
<!--              v-for="(item, index) in allUsers"-->
<!--              :key="index"-->
<!--              @click="currCheck(index)"-->
<!--              v-model="item.username"-->
<!--              ref="refCurrCheck"-->
<!--              :name="item.alias?item.alias:item.username"-->
<!--              shape="square">{{item.alias}}</van-checkbox>-->
<!--          </van-checkbox-group>-->
<!--        </van-popup>-->
<!--      </van-row>-->
<!--    </van-dialog>-->


  </div>
</template>

<script>
  import {
    Row,
    Col,
    Cell,
    CellGroup,
    Grid,
    GridItem,
    Step,
    Steps,
    Uploader,
    Button,
    ActionSheet,
    DropdownMenu,
    DropdownItem,
    Checkbox,
    CheckboxGroup,
    Overlay,
    Dialog,
    RadioGroup,
    Radio,
    Field,
    Popup,
    Rate,
    Form,
    Panel,
    NoticeBar,
    Search,
    Image as VanImage
  } from "vant"
  import commonSteps from "../commonComponents/commonSteps";

  export default {
    name: "referSteps",
    components: {
      [Rate.name]: Rate,
      [Row.name]: Row,
      [Col.name]: Col,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
      [Step.name]: Step,
      [Steps.name]: Steps,
      [Uploader.name]: Uploader,
      [ActionSheet.name]: ActionSheet,
      [VanImage.name]: VanImage,
      [Overlay.name]: Overlay,
      [Field.name]: Field,
      [Popup.name]: Popup,
      [RadioGroup.name]: RadioGroup,
      [Radio.name]: Radio,
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup,
      [Dialog.Component.name]: Dialog.Component,
      [DropdownMenu.name]: DropdownMenu,
      [DropdownItem.name]: DropdownItem,
      [Panel.name]: Panel,
      [Form.name]: Form,
      [Search.name]: Search,
      [NoticeBar.name]: NoticeBar
    },
    data() {
      return {
        turnTagTxtList:[],
        turnTagtitle: '',
        defaultTrue: true,
        turnTagFlag: false,
        allUsers: [
          {
            "id": 2,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "沈立",
            "username": "shenliriny",
            "role": "运维",
            "dept": "模拟互联网技术部",
            "phone": "13221416299",
            "email": "shenliriny@126.com"
          },
          {
            "id": 3,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "石秦",
            "username": "shiqin",
            "role": "运维",
            "dept": "模拟新媒体事业部",
            "phone": "13157101930",
            "email": "shiqin@wasv.tv"
          },
          {
            "id": 4,
            "avatar": "http://file02.16sucai.com/d/file/2014/0822/b44cd1310d09026f6dd1f0633a1cc2a5.jpg",
            "alias": "牟耀定",
            "username": "mouyaoding",
            "role": "运维",
            "dept": "运维部",
            "phone": "18815289930",
            "email": "mouyaoding@wasu.tv"
          },
          {
            "id": 5,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "张治中",
            "username": "zhangzhizhong",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13858030281",
            "email": "zhangzhizhong@wasu.com"
          },
          {
            "id": 6,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "范英坤",
            "username": "fanyk",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18758876585",
            "email": "fanyingkun@wasu.com"
          },
          {
            "id": 7,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "舒月见",
            "username": "shuyj",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "15858122989",
            "email": "shuyj@wasu.com"
          },
          {
            "id": 8,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "戴雨蕾",
            "username": "daiyulei",
            "role": "运维",
            "dept": "运维部",
            "phone": "18757122784",
            "email": "daiyulei@wasu.com"
          },
          {
            "id": 9,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "谢曜光",
            "username": "xieyg",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "15268598109",
            "email": "xieyg@wasu.com"
          },
          {
            "id": 10,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "张杰",
            "username": "zhangjie",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "15868109103",
            "email": "zhangjie8@wasu.com"
          },
          {
            "id": 13,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "曹文虎",
            "username": "caowh",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "15868127535",
            "email": "caowh@wasu.com"
          },
          {
            "id": 14,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "王嘉路",
            "username": "wangjialu",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13369103126",
            "email": "wangjialu@wasu.com"
          },
          {
            "id": 15,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "胡宇曦",
            "username": "huyuxi",
            "role": "运维",
            "dept": "模拟新媒体事业部",
            "phone": "18069792812",
            "email": "Huyuxi@wasu.tv.com"
          },
          {
            "id": 16,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "沈志成",
            "username": "shenzhicheng",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13505811321",
            "email": "shenzhicheng@wasu.com"
          },
          {
            "id": 17,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "王锦福",
            "username": "wangjinfu",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13738059189",
            "email": "wangjinfu@wasu.com"
          },
          {
            "id": 18,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "林波",
            "username": "linbo",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13588856510",
            "email": "linbo@wasu.com"
          },
          {
            "id": 20,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "韩潇毅",
            "username": "hanxiaoyi",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18968190460",
            "email": "hanxiaoyi@wasu.com"
          },
          {
            "id": 23,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "刘波",
            "username": "liubo",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18758868998",
            "email": "liubo@wasu.com"
          },
          {
            "id": 24,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "袁开",
            "username": "yuankai",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18858177705",
            "email": "yuankai@wasu.com"
          },
          {
            "id": 26,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "张鹏程",
            "username": "zhangpengcheng",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13867120191",
            "email": "zhangpengcheng@wasu.com"
          },
          {
            "id": 27,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "李孝锐",
            "username": "lixiaorui",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13868048247",
            "email": "lixiaorui@wasu.com"
          },
          {
            "id": 28,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "姚静如",
            "username": "yaojingru",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "15858278050",
            "email": "yaojingru@wasu.com"
          },
          {
            "id": 29,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "沈文土",
            "username": "shenwentu",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18958183266",
            "email": "shenwentu@wasu.com"
          },
          {
            "id": 30,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "华锡肖",
            "username": "huaxixiao",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13575788212",
            "email": "huaxixiao@wasu.com"
          },
          {
            "id": 31,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "黄益敏",
            "username": "huangyimin",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13516876847",
            "email": "huangyimin@wasu.com"
          },
          {
            "id": 32,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "陆小丽",
            "username": "luxiaoli",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18268183161",
            "email": "luxiaoli@wasu.com"
          },
          {
            "id": 33,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "钟波",
            "username": "zhongbo",
            "role": "运维",
            "dept": "开发部",
            "phone": "18505815120",
            "email": "zhongbo@wasu.tv"
          },
          {
            "id": 35,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "周扬",
            "username": "zhouyang",
            "role": "开发",
            "dept": "互联网技术部",
            "phone": "15088622131",
            "email": "zhouyang@wasu.com"
          },
          {
            "id": 36,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "吴联产",
            "username": "wulianchan",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13867469385",
            "email": "wulianchan@wasu.com"
          },
          {
            "id": 38,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "姚荣将",
            "username": "yaorongjiang",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "15268843200",
            "email": "yaorongjiang@wasu.com"
          },
          {
            "id": 40,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "王伟",
            "username": "wangwei",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13757188604",
            "email": "wangwei@wasu.com"
          },
          {
            "id": 44,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "邱波",
            "username": "qiubo",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18868702339",
            "email": "qiubo@wasu.com"
          },
          {
            "id": 49,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "曹文强",
            "username": "caowenqiang",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18610001826",
            "email": "caowenqiang@wasu.com"
          },
          {
            "id": 68,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "宋孝忠",
            "username": "songxiaozhong",
            "role": "项目经理",
            "dept": "互联网技术部",
            "phone": "19817712286",
            "email": "songxiaozhong@wasu.com"
          },
          {
            "id": 69,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "梁冬冬",
            "username": "liangdongdong",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13567190580",
            "email": "liangdongdong@wasu.com"
          },
          {
            "id": 78,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "王耀东",
            "username": "wangyaodong",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "13805741247",
            "email": "wangyaodong@wasu.com"
          },
          {
            "id": 84,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "唐奥明",
            "username": "tamin",
            "role": "前端开发工程师",
            "dept": "互联网技术部",
            "phone": "",
            "email": "tamin@qq.com"
          },
          {
            "id": 85,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "王思博",
            "username": "wangsibo",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "18867105915",
            "email": "wangsibo@wasu.com"
          },
          {
            "id": 86,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "张广旭",
            "username": "zhangguangxu",
            "role": "运维",
            "dept": "开发部",
            "phone": "17706423864",
            "email": "zhangguangxu@wasu.tv"
          },
          {
            "id": 88,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "张楷",
            "username": "zhangkai",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "11111122222",
            "email": "zhangkai@wasu.com"
          },
          {
            "id": 89,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "赵露",
            "username": "zhaolu",
            "role": "运维",
            "dept": "互联网技术部",
            "phone": "11111111111",
            "email": "zhaolu@wasu.co,"
          },
          {
            "id": 90,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "刘艳波",
            "username": "liuyanbo",
            "role": "运维",
            "dept": "测试部",
            "phone": "17638266360",
            "email": "liuyanbo@wasu.com"
          },
          {
            "id": 91,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "郑强",
            "username": "zhengqiang",
            "role": "运维",
            "dept": "测试部",
            "phone": "17706646276",
            "email": "zhengqiang@wasu.tv"
          },
          {
            "id": 92,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "陈浩鹏",
            "username": "haopengc",
            "role": "运维",
            "dept": "测试部",
            "phone": "18368141867",
            "email": "haopengc@wasu.com"
          },
          {
            "id": 93,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "常凯隆",
            "username": "changkailong",
            "role": "运维",
            "dept": "模拟互联网技术部",
            "phone": "15765119066",
            "email": "changkailong@hmtim.com"
          },
          {
            "id": 94,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "魏雷鸣",
            "username": "weileiming",
            "role": "运维",
            "dept": "开发部",
            "phone": "17767259614",
            "email": "weileiming@wasu.com"
          },
          {
            "id": 95,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "袁佳润",
            "username": "yuanjiarun",
            "role": "运维",
            "dept": "开发部",
            "phone": "15267129607",
            "email": "yuanjiarun@wasu.com"
          },
          {
            "id": 96,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "工单后台",
            "username": "circulation",
            "role": "运维",
            "dept": "开发部",
            "phone": "",
            "email": "circulation@wasu.com"
          },
          {
            "id": 97,
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "alias": "opsmind",
            "username": "opsmind",
            "role": "运维",
            "dept": "开发部",
            "phone": "",
            "email": "opsmind@wasu.com"
          }
        ],
        turnTagTxt: [], //转签名称
        items: [{
          bool: true,
          index: 1,
          name: "第一",
          value: "第一"
        }, {
          bool: true,
          index: 2,
          name: "第2",
          value: "第2"
        }, {
          bool: true,
          index: 3,
          name: "第3",
          value: "第3"
        }, {
          bool: true,
          index: 4,
          name: "第4",
          value: "第4"
        }],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        currPage: this.$route.params.pageFlag,
        stepsNum: 2,
        active: 2,
        stepsDataList: [
          {title: '第1步', describe: '我是第一步'},
          {title: '第2步', describe: '我是第二步'},
          {title: '第3步', describe: '我是第三步'},
          {title: '第4步', describe: '我是第四步'},
          {title: '第5步', describe: '我是第五步'}],
        process_status: 'success',
        direction: 'horizontal',
        finish_status: 'success',
        count_step: 1
      }
    },
    components: {
      'common-Steps': commonSteps
    },
    watch: {
      turnTagTxtList:function () {
        this.$nextTick(function () {
          console.info("zhixing")
          //this.currCheck(index)
        })
      }
    },

    methods: {
      change(data) {
        console.info(data)
      },
      currCheck(index) {
        console.info(this.turnTagTxtList)

        // let turnTagTxt = [];
        // turnTagTxt.push(data)
        // this.turnTagTxt = turnTagTxt;
       // this.$refs.currCheck[index].toggle();
        let that = this
        //写法1
        //:ref="`upload${index}`"
        //正确写法
        // setTimeout(function () {
        //   console.log(that.$refs["refCurrCheck"][index].checked);
        // },100)
        //写法2
        // this.$nextTick(function () {
        //   console.log(that.$refs['currCheck' + index]);
        //
        //   /*  setTimeout(function () {
        //       console.log(that.$refs['currCheck'][index].checked);
        //     }, 3000)*/
        // })
        //写法3

        console.log(that.$refs["refCurrCheck"][index].checked);

        // this.$nextTick(function () {
        //   if(that.$refs["refCurrCheck"][index]){
        //     console.log(that.$refs["refCurrCheck"][index].checked);
        //   }
        // })
        //this.$forceUpdate();
        // console.log(that.$refs['currCheck' + index][index].checked);
        // console.log(that.$refs['currCheck' + index]);
       // console.log(this.$refs['currCheck'][index]);
        //console.log(this.$refs['currCheck'][index].checked);
        console.info(index)
      },

      currDiv(index) {
        console.log(this.$refs["currDiv"]);
        console.info(index)
      },
      /**
       * @function add_steps
       */
      add_steps(val) {
        this.count_step = Number(this.stepsDataList.length)
        let count = ++this.count_step;
        if (val === 'behind') {
          this.stepsDataList.push({title: '第' + count + '步', describe: '我是第' + count + '步'})
        } else {
          this.stepsDataList.unshift({title: '第' + count + '步', describe: '我是第' + count + '步'})
        }

      },
      /**
       * @function del_steps
       */
      del_steps(val) {
        if (this.stepsNum >= Number(this.stepsDataList.length)) {
          this.stepsNum = Number(this.stepsDataList.length)
        } else {
        }
        if (val === 'prep') {
          if (this.stepsDataList.length > 1) {
            this.stepsDataList.pop()
          } else {
            this.$message.error('至少一步')
          }
        } else {
          if (this.stepsDataList.length > 1) {
            this.stepsDataList.shift()
          } else {
            this.$message.error('至少一步')
          }
        }

      }
    },
    watch: {
      /**
       * @function stepsNum 改变步骤
       * @param n
       * @param o
       */
      stepsNum(n, o) {
        if (n <= Number(this.stepsDataList.length)) {
          this.active = n;
        } else {
          this.stepsNum = Number(this.stepsDataList.length);
          this.active = this.stepsNum;
        }
      }
    }
  }
</script>

<style>
  .curr-step-sty {
    margin: 10px 10px 10px 10px;
  }

  .tiptitle {
    font-size: 20px;
    color: #000;
  }

  .level-option {
    text-align: left;
  }

  #turnTagel {
    height: 220px;
    position: relative;
  }

  /deep/ .van-popup {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: none;
  }
</style>
