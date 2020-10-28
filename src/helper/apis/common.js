import $ajax from '../ajax'
import $utils from '../utils'
let BaseUrl = 'http://qa.kimiz.top';
export default {
  // 初始化
  getPing(data) {
    return $ajax.get(BaseUrl + '/api/ping', data)
  },
  // 启动
  getLaunch(data) {
    return $ajax.post(BaseUrl + '/api/launch', data)
  },
  // 登录
  login(data) {
    return $ajax.post(BaseUrl + '/api/sign-in', data)
  },
  // 搜索引擎列表
  getSearchEngines(data) {
    return $ajax.get(BaseUrl + '/api/search-engines', data)
  },
  // 搜索Log
  getSearchLog(data) {
    return $ajax.post(BaseUrl + '/api/search-log', data)
  },
  // 广告获取
  getAd(data) {
    return $ajax.post(BaseUrl + '/api/ad-get', data)
  },
  // 广告展示/点击
  getAdOpt(data) {
    return $ajax.post(BaseUrl + '/api/ad-opt', data)
  },
  // 投诉反馈
  getFeedBack(data) {
    return $ajax.post(BaseUrl + '/api/feedback', data)
  },
  // 资讯分类
  getArticleType(data) {
    return $ajax.get(BaseUrl + '/api/article-categories', data)
  },
  // 资讯列表
  getArticlesList(data) {
    return $ajax.get(BaseUrl + '/api/articles', data)
  },
  // 资讯详情
  getArticleDetail(data) {
    return $ajax.get(BaseUrl + `/api/articles/${data}`)
  },
  // 收藏列表
  getfavoriteList(data) {
    return $ajax.get(BaseUrl + '/api/favorite-list', data)
  },
  // 加入收藏
  addFavorite(data) {
    return $ajax.post(BaseUrl + '/api/favorite-add', data)
  },
  // 删除收藏
  delFavorite(data) {
    return $ajax.post(BaseUrl + '/api/favorite-del', data)
  },
}
