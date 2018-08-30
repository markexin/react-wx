import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import List from '../../components/list/list'



export default class Baby extends Component {
  config = {
    navigationBarTitleText: '宝贝'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  render () {
    return (
      <View className='index'>
        <List></List>
      </View>
    )
  }
}

