import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { login } from '../../actions/counter'

// logo
import articlePng from '../../static/article.png'
import babyPng from '../../static/baby.png'
import mindPng from '../../static/mind.png'
import videoPng from '../../static/video.png'
import createPng from '../../static/create.png'


// 组件
import Swiperc from '../../components/swiperc/swiper'
import Title from '../../components/title'



import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  login () {
    dispatch(login())
  }
}))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  
  // login = () => {
  //   // 登录接口
  //   Taro.request({
  //     url: 'http://localhost:8080/test',
  //     data: {
  //         foo: 'foo',
  //         bar: 10
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   })
  // }

  componentDidMount () {
    this.props.login();
    // this.login()
    // wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       wx.getUserInfo({
    //         success: function(res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //       //发起网络请求
    //       wx.request({
    //         url: 'http://localhost:7001/login',
    //         method: 'POST',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  }

  render () {
    return (
      <div className="main">
        <div className="container">
          <Swiperc />
          <Title title="精选 / 文章"/>
        </div>
        <div className="footer">
          <ul>
            <li>
              <Navigator url="/pages/article/index">
                <image className="navLogo" src={ articlePng }></image>
                文章
              </Navigator>
            </li>
            <li>
              <Navigator url="/pages/mind/index">
                <image className="navLogo" src={ mindPng }></image>
                感悟
              </Navigator>
            </li>
            <li>
              <Navigator url="/pages/edit/index">
                <image className="addPlus" src={ createPng }></image>
              </Navigator>
            </li>
            <li>
              <Navigator url="/pages/baby/index">
                <image className="navLogo" src={ babyPng }></image>
                宝贝
              </Navigator>
            </li>
            <li>
              <Navigator url="/pages/video/index">
                <image className="navLogo" src={ videoPng }></image>
                纪实
              </Navigator>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

