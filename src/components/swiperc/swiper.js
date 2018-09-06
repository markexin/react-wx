import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem } from '@tarojs/components'
import './index.less'

export default class Swiperc extends Component {

    constructor (props) {

      super(props)
      this.state = {
        list: []
      }

    }

    init = () => {
      Taro.request({
        url: `${Taro.REQUEST_URL}/video`,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        }
      }).then(res => {
        this.setState({
          list: res.data
        })
      })
    }

    componentDidMount () {
      this.init()
    }

    render () {
        let {list} = this.state;
        return (
            <Swiper
                className='swiper-body'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
              {
                list.map((item, index) => {
                  return <SwiperItem key={String(index)}>
                            <View className='swiper-item'>
                              <image src={item.FIRST} />
                            </View>
                          </SwiperItem>
                })
              }
            </Swiper>
        )
    }
}