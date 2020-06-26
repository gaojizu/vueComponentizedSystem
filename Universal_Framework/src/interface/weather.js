import request from "../api/request";
/**
 * 基于网上的一个开放的接口实现
 * 接口地址：https://github.com/xCss/JsonBird/wiki
 */
export default {
  weather: params => request('get', 'https://bird.ioliu.cn/weather', params),  //根据城市名称进行查询天气状况
}
