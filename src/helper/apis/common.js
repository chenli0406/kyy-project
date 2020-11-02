import $ajax from '../ajax'
import $utils from '../utils'
let BaseUrl = 'http://qa.kimiz.top';
export default {
  // 初始化
  getPing(data) {
    return $ajax.get(BaseUrl + '/api/ping', data)
  },
  // 启动
  getLaunch(data ,op) {
    return $ajax.post(BaseUrl + '/api/launch', data,op)
  },
  // 登录
  login(data, op) {
    return $ajax.post(BaseUrl + '/api/sign-in', data ,op)
  },
  // 搜索引擎列表
  getSearchEngines(data, op) {
    return $ajax.get(BaseUrl + '/api/search-engines', data, op)
  },
  // 搜索Log
  getSearchLog(data, op) {
    return $ajax.post(BaseUrl + '/api/search-log', data, op)
  },
  // 广告获取
  getAd(data ,op) {
    return $ajax.post(BaseUrl + '/api/ad-get', data ,op)
  },
  // 广告展示/点击
  getAdOpt(data ,op) {
    return $ajax.post(BaseUrl + '/api/ad-opt', data ,op)
  },
  // 投诉反馈
  getFeedBack(data, op) {
    return $ajax.post(BaseUrl + '/api/feedback', data, op)
  },
  // 资讯分类
  getArticleType(data, op) {
    return $ajax.get(BaseUrl + '/api/article-categories', data ,op)
  },
  // 资讯列表
  getArticlesList(data, op) {
    return $ajax.get(BaseUrl + '/api/articles', data, op)
  },
  // 资讯详情
  getArticleDetail(data, op) {
    return $ajax.get(BaseUrl + `/api/articles/${data}` , {}, op)
  },
  // 收藏列表
  getfavoriteList(data, op) {
    return $ajax.get(BaseUrl + '/api/favorite-list', data ,op)
  },
  // 加入收藏
  addFavorite(data, op) {
    return $ajax.post(BaseUrl + '/api/favorite-add', data ,op)
  },
  // 删除收藏
  delFavorite(data ,op) {
    return $ajax.post(BaseUrl + '/api/favorite-del', data ,op)
  },
}
