import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'


import List from '../../components/list/list'


export default class Article extends Component {
  config = {
    navigationBarTitleText: '文章'
  }

  constructor () {
    super();

    this.state = {
      result: []
    }

  }

  init = () => {

    Taro.request({
      url: `${Taro.REQUEST_URL}/words`,
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
  
  componentDidMount () {
    // 初始化
    this.init();
  }


  render () {
    let { result } = this.state;
    return (
      <View className='index'>
        <List dataSource={ result }/>
      </View>
    )
  }
}

