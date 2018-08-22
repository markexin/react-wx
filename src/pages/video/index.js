import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import Title from '../../components/title'
import ImageList from '../../components/imageList'

import './index.less'

export default class Video extends Component {
  // config = {
  //   navigationBarTitleText: '纪实'
  // }

  constructor (props) {

    super(props)

    this.state = {
      cur: false
    }
    
    this.config = {
      navigationBarTitleText: '纪实'
    }
    
  }

  render () {
    let { cur } = this.state;
    return (
      <View>
        {
          cur ? <ImageList /> : <Title />
        }
      </View>
    )
  }
}

