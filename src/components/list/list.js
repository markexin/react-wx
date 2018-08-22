import Taro, { Component } from '@tarojs/taro'
import './index.less'


export default class List extends Component {

    render () {
        return (
            <ScrollView className='scrollview'
              scrollY
              scrollWithAnimation
              scrollTop='0'
              style='height: 100%;'
              lowerThreshold='20'
              upperThreshold='20'>
              <View className="list-item clearfix">
                <p>这里是一个标题</p>
                <a>这里是一个简介这里是一个简介这里是一个简介这里是一个简介</a>
                <span>2018-07-16 12:00:00</span>
              </View>
            </ScrollView>
        )
    }
}