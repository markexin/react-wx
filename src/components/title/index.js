import Taro, { Component } from '@tarojs/taro'
import './index.less'


export default class Title extends Component {
  
    constructor (props) {

      super(props)

      this.title = this.props.title

    }

    render () {
        
        const { onChange } = this.props;

        return (
            <View>
              <View className="title">
                <span className="before"></span>
                { this.title }
                <span className="after"></span>
              </View>
              <View className="content">
                <View onClick={ onChange }>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                  <View className="brief">这是一个标题</View>
                </View>
                <View>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                  <View className="brief">这是一个标题</View>
                </View>
              </View>
              <View className="content">
                <View>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                  <View className="brief">这是一个标题</View>
                </View>
                <View>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                  <View className="brief">这是一个标题</View>
                </View>
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
  title: ''
};

/**
 * 入参 Props 格式校验
 * @type {Object}
 */

Title.propTypes = {
  title: String,
  onChange: function
};
