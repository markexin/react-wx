import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
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
import LoginModel from '../../components/login'



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

  componentDidMount () {
    // this.props.login();
  }

  render () {
    return (
      <View className="main">
        <LoginModel></LoginModel>
        <View className="container">
          <Swiperc />
          <Title title="精选 / 文章"/>
        </View>
        <View className="footer">
          <ul>
            <li>
              <Navigator url="/pages/article/index">
                <Image className="navLogo" src={ articlePng }></Image>
                文章
              </Navigator>
            </li>
            <li>
              <Navigator url="/pages/mind/index">
                <Image className="navLogo" src={ mindPng }></Image>
                感悟
              </Navigator>
            </li>
            <li>
              <Navigator url="/pages/edit/index">
                <Image className="addPlus" src={ createPng }></Image>
              </Navigator>
            </li>
            <li>
              <Navigator url="/pages/baby/index">
                <Image className="navLogo" src={ babyPng }></Image>
                宝贝
              </Navigator>
            </li>
            <li>
              <Navigator url="/pages/video/index">
                <Image className="navLogo" src={ videoPng }></Image>
                纪实
              </Navigator>
            </li>
          </ul>
        </View>
      </View>
    )
  }
}

