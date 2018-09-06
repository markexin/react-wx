import Taro, { Component } from '@tarojs/taro'
import './index.less'


export default class List extends Component {

    goUp = (item) => {
      Taro.redirectTo({ url: '/pages/content/index?id=' + item.ID })
    }

    render () {

        let { dataSource } = this.props;
        let listItems = dataSource.map((item, index) => {
          return (
            <View className="list-item clearfix" key={String(index)} onClick={this.goUp.bind(this, item)}>
              <p>{ item.NAME }</p>
              <a>{ item.NAME }</a>
              <span>{ item.DATE }</span>
            </View>
          )
        })

        return (
            <ScrollView className='scrollview'
              scrollY
              scrollWithAnimation
              scrollTop='0'
              style='height: 100%;'
              lowerThreshold='20'
              upperThreshold='20'>
              { listItems }
            </ScrollView>
        )

    }
}


/**
 * 入参 Props 校验
 * @type {Object}
 */

List.defaultProps = {
  dataSource: []
};

/**
 * 入参 Props 格式校验
 * @type {Object}
 */

List.propTypes = {
  dataSource: Array
};