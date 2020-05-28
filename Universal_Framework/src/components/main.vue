<template>
  <div id="global-main">
    <ul>
      <li v-for="(item , index) in commponentsList" @click="toComponents(item.prop)">
        <h5 class="prop-h5">
          {{item.name}}
        </h5>
        <h6 class="prop-h6">
          {{item.introduce}}
        </h6>
      </li>
    </ul>
    <div class="global-option own-main"
         v-loading="loading"
         element-loading-spinner="el-icon-loading"
         element-loading-text="刷新中..."
         element-loading-background="rgba(0, 0, 0, 0.6)"
    >
      <el-select v-model="city" placeholder="请选择">
        <el-option
          v-for="item in citys"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <b>温度：</b><span>{{tmp}}℃</span>
      <b>风向：</b><span>{{wind.dir}}</span>
      <b>风速：</b><span>{{wind.spd}}</span>
      <b>PM2.5:</b><span>{{pm25}}</span>
      <b>空气质量：</b><span>{{qlty}}</span>
      <b>更新时间：</b><span>{{basic.update.loc}}</span>
      <b @click='future_weather = true' class="main-weather">未来天气</b>
      <i class="el-icon-refresh main-i" @click="getCity"></i>
    </div>

    <el-drawer
      :title="city"
      :visible.sync="future_weather"
      direction="ltr">
      <common-table
        :tableList="tableList"
        :columnList='columnList'
      >
      </common-table>
      <h4>建议</h4>

    </el-drawer>
  </div>
</template>

<script>
  import commonTable from "../commonComponents/commonTable";

  export default {
    name: "main.vue",
    components: {
      'common-table': commonTable
    },
    data() {
      return {
        loading: true,
        city: '杭州市',
        tmp: '',
        qlty: '',
        citys: [],
        wind: {
          dir: '',
          spd: '',
        },
        basic: {
          update: {
            loc: ''
          }
        },
        pm25: '',
        tableList: [],
        columnList: [
          {prop: 'date', label: '日期'},
          {prop: 'tmp.max', label: '最高温度/℃'},
          {prop: 'tmp.min', label: '最低温度/℃'},
          {prop: 'wind.dir', label: '风向'},
          {prop: 'wind.spd', label: '风速'},
        ],
        future_weather: false,
        commponentsList: []
      }
    },
    mounted() {
      this.getCity();
      this.getComponents();
    },
    watch: {
      city(n, o) {
        this.getCityInfo(n)
      }
    },
    methods: {
      /**
       * @function toComponents 跳转组件相应位置
       * @param anchor 锚点 指向组件地址
       */
      toComponents(anchor) {
        console.info(anchor)
        switch (anchor) {
          case 'table' :
            this.$router.push(
              {path: '/referTable/table'}
            );
            break;
          case 'steps':
            this.$router.push(
              {path: '/referSteps/steps'}
            );
            break;
          case 'bootStrapTable':
            this.$router.push(
              {path: '/bootStrapTable/bootStrapTable'}
            );
            break;
          case 'stop':
            this.$router.push(
              {path: '/stop/stop'}
            );
            break;
          case 'search':
            this.$router.push(
              {path: '/search/search'}
            );
            break;
          case 'shoppingCar':
            this.$router.push(
              {path: '/shoppingCar/shoppingCar'}
            );
            break;
          default :
            '';
            break
        }
      },
      /**
       * @function getComponents 获取到插件集
       */
      getComponents() {
        this.$axios.get('api/commponentsLists.do').then((res) => {
          if (res.data.code === 200) {
            this.commponentsList = res.data.data.components;
          } else {
            this.$message.error(res.data.msg);
          }
        }).catch((error) => {
          console.info(error);
        })
      },
      /**
       * @function getCity 获取到城市集
       */
      getCity() {
        this.$axios.get('api/cityInfos.do').then((res) => {
          if (res.data.code === 200) {
            this.citys = res.data.data.citys;
            this.getCityInfo(this.city)
          } else {
            this.$message.error(res.data.msg);
          }
        }).catch((error) => {
          console.info(error);
        })
      },
      /**
       * @function getCityInfo 请求示范  获取相应城市的天气
       * @param city 请求参数
       */
      async getCityInfo(city) {
        this.loading = true;
        let params = {
          city: city
        }
        let res = await this.$api.weather(params)
        if (res) {
          this.loading = false;
          this.tmp = res.data.now.tmp;
          this.wind = res.data.now.wind;
          this.basic = res.data.basic;
          this.qlty = res.data.aqi.city.qlty;
          this.tableList = res.data.daily_forecast;
          this.pm25 = res.data.aqi.city.pm25;
        } else {
          this.$message.error('请求失败')
        }
      },
    }
  }
</script>

<style>
  #global-main {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }

  #global-main a {
    text-decoration: none;
  }

  #global-main ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  #global-main ul li {
    list-style: none;
    cursor: pointer;
    text-align: center;
    display: block;
    width: 13rem;
    height: 13rem;
    border: 2px solid #58aef5;
    margin: 10px 10px 0 0;
    border-radius: 4px;
  }

  #global-main ul li:hover .prop-h6 {
    background-color: #58aef5;
    color: #FFFFFF;
    opacity: 1;
    font-weight: bolder;
    /*visibility: visible;*/
  }

  .prop-h5 {
    height: 15%;
  }

  .prop-h6 {
    background-color: #58aef5;
    opacity: 0.2;
    height: 70%;
    display: flex;
    flex-direction: column;
    /*visibility: hidden;*/
  }


  .own-main {
    background-color: #FFFFFF;
    color: #000000;
    z-index: 1;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #cccccc;
    font-size: large;
  }

  .main-i {
    cursor: pointer;
  }

  .main-weather {
    cursor: pointer;
  }
</style>
