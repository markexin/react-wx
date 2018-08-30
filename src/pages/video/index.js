import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Title from '../../components/title'
import ImageList from '../../components/imageList'
import './index.less'

export default class Video extends Component {

  constructor (props) {

    super(props)

    this.state = {
      cur: false
    }
    
    this.config = {
      navigationBarTitleText: '纪实'
    }
    
  }

  change = (e) => {
    e.stopPropagation();
    // 切换照片墙模式
    this.setState({ cur: !this.state.cur })
  }

  render () {
    let { cur } = this.state;
    return (
      <View>
        {
          cur ? <ImageList /> : <Title onChange={ this.change } />
        }
      </View>
    )
  }
}

