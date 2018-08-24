import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import List from '../../components/list/list'


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
export default class Mind extends Component {
  config = {
    navigationBarTitleText: '感悟'
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

