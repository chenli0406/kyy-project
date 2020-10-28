import $fetch from '@system.fetch'
import $utils from './utils'
const prompt = require('@system.prompt')

let deviceId = window.localStorage.deviceId;
let token = window.localStorage.token;
console.log(token);
function requestHandle(params) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    $fetch.fetch({
      url: params.url,
      method: params.method,
      data: JSON.stringify(params.data),
      header:{
        'Content-Type': 'application/json; charset=utf-8',
        'DeviceId':  deviceId,
        'token':  token
      },
      success: data => {
        const serverResponse = data;
        if (serverResponse.code == 200) {
          resolve(serverResponse)
        } else {
            reject(serverResponse.message)
        }
      },
      fail: (data, code) => {
        console.log(`🐛 request fail, code = ${code} `, data)
        reject(data)
      },
      complete: data => {
        reject(data)
      }
    })
  })
}

export default {
  post: function(url, params, op) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    })
  },
  get: function(url, params, op) {
    return requestHandle({
      method: 'get',
      url: $utils.queryString(url, params)
    })
  }
}
