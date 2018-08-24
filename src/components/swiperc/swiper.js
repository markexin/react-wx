import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem } from '@tarojs/components'
import './index.less'

export default class Swiperc extends Component {
    render () {
        return (
            <Swiper
                className='swiper-body'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
              <SwiperItem>
                <View className='swiper-item'>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                </View>
              </SwiperItem>
              <SwiperItem>
                <View className='swiper-item'>
                  <image src="http://img4.imgtn.bdimg.com/it/u=3909311365,1858650463&fm=27&gp=0.jpg" />
                </View>
              </SwiperItem>
              <SwiperItem>
                <View className='swiper-item'>
                  <image src="http://img3.imgtn.bdimg.com/it/u=840841630,4092051927&fm=27&gp=0.jpg" />
                </View>
              </SwiperItem>
            </Swiper>
        )
    }
}