import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'


import List from '../../components/list/list'


export default class Article extends Component {
  config = {
    navigationBarTitleText: '文章'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  render () {
    return (
      <View className='index'>
        <List />
      </View>
    )
  }
}

