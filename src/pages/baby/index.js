import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

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
        <Button>宝贝</Button>
      </View>
    )
  }
}

