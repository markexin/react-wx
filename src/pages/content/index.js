import Taro, { Component } from '@tarojs/taro'
import './index.less'
import moment from 'moment'

export default class Content extends Component {

  config = {
    navigationBarTitleText: '文章详情'
  }

  constructor (props) {
    super(props);

    this.state = {
      result: {}
    }
  }


  init = () => {
    
    let id = this.$router.params.id;
    Taro.request({
      url: `${Taro.REQUEST_URL}/content`,
      data: {
          id: id
      },
      method: 'POST',
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

  back = () => {
    Taro.redirectTo({ url: '/pages/index/index' })
  }

  render () {
    let {result} = this.state;
    return (
      <View className='at-article'>
        <View className='at-article__h1'>
          {result.NAME}
        </View>
        <View className='at-article__info'>
          <Text>{moment(+result.DATE).format('YYYY-MM-DD HH:mm:ss')}</Text>
          <Text className='auther'>{result.AUTHER}</Text>
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__p'>
              {result.CONTENTTEXT}
            </View>
          </View>
        </View>
        <View className="footer" onClick={this.back}>
          返回上一页
        </View>
      </View>
    )
  }
}

