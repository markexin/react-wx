import { LOGIN, UPDATE } from '../constants/counter'

import Taro from '@tarojs/taro'


export const update = (data) => {
  return {
    type: UPDATE,
    value: data
  }
}

// 异步的登录 action
export const login = () => {
  return dispatch => {
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: `${Taro.REQUEST_URL}/login`,
            method: 'POST',
            data: {
                code: res.code
            },
            header: {
              'content-type': 'application/json'
            }
          })
          // update user info
          wx.getUserInfo({
            success: function(res) {
              dispatch(update(res.userInfo))
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
}
