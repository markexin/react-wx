import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Title from '../../components/title'
import ImageList from '../../components/imageList'
import './index.less'

export default class Video extends Component {

  constructor (props) {

    super(props)

    this.state = {
      cur: false,
      list: [],
      itemData: []
    }
    
    this.config = {
      navigationBarTitleText: '纪实'
    }
    
  }

  componentDidMount () {
    this.init();
  }

  init = () => {
    Taro.request({
      url: `${Taro.REQUEST_URL}/video`,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      }
    }).then(res => {
      this.setState({
        list: res.data
      })
    })
  }

  change = (item, e) => {
    e.stopPropagation();
    // 切换照片墙模式
    this.setState({ cur: !this.state.cur, itemData: item })
  }

  render () {
    let { cur, list, itemData } = this.state;
    return (
      <View>
        {
          cur ? <ImageList sourceData={ itemData } /> : <Title onChange={ this.change } isData={ list } />
        }
      </View>
    )
  }
}

