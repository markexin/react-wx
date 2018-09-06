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
import List from '../../components/list/list'
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

  constructor () {
    super();

    this.state = {
      result: []
    }

  }

  componentWillMount () {
    this.init();
  }

  componentDidMount () {
    // this.props.login();
    this.init();
  }

  init = () => {
    Taro.request({
      url: `${Taro.REQUEST_URL}/list`,
      data: {
          foo: 'foo',
          bar: 10
      },
      header: {
        'content-type': 'application/json'
      }
    }).then(res => {
      this.setState({
        result: res.data
      })
    })
  }

  render () {
    let { result } = this.state;
    return (
      <View className="main">
        <LoginModel></LoginModel>
        <View className="container">
          <Swiperc />
          <List dataSource={ result }></List>
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

