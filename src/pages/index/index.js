import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

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
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
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

