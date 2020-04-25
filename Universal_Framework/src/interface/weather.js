import request from "../api/request";

export default {
  weather: params => request('get', 'https://bird.ioliu.cn/weather', params)  //根据城市名称进行查询天气状况
}

