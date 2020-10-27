import $ajax from '../ajax'
import $utils from '../utils'
let BaseUrl = 'http://qa.kimiz.top';
export default {
  // 初始化
  getPing(data) {
    return $ajax.get( BaseUrl +'/api/ping', data  )
  },
  // 启动
  getLaunch(data){
    return $ajax.post( BaseUrl +'/api/launch', data)
  }
}
