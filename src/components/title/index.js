import Taro, { Component } from '@tarojs/taro'
import './index.less'


export default class Title extends Component {
  
    render () {
        
        const { onChange, isData } = this.props;

        return (
            <View className="title-body-style">
              <View className="content">
                {
                  isData.map((item, index) => {
                    return <View key={index} onClick={ onChange.bind(this, item)}>
                            <image src={item.FIRST} />
                            <View className="brief">{item.ALBUM}</View>
                          </View>
                  })
                }
              </View>
            </View>
        )
    }
}

/**
 * 入参 Props 校验
 * @type {Object}
 */

Title.defaultProps = {
  isData: []
};

/**
 * 入参 Props 格式校验
 * @type {Object}
 */

Title.propTypes = {
  isData: Array
};
