import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'

import './index.less'

export default class ImageList extends Component {

  render () {
    let {sourceData} = this.props;
    let json = sourceData.hasOwnProperty('URL') ? JSON.parse(sourceData.URL) : [];
    return (
      <Swiper
        className='image-wall'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        >
        {
          json.map((item, index) => {
            return <SwiperItem key={String(index)}>
                    <View className='item'>
                      <Image src={item}></Image>
                    </View>
                  </SwiperItem>
          })
        }
      </Swiper>
    )
  }
}



/**
 * 入参 Props 校验
 * @type {Object}
 */

ImageList.defaultProps = {
  sourceData: []
};

/**
 * 入参 Props 格式校验
 * @type {Object}
 */

ImageList.propTypes = {
  sourceData: Array
};

