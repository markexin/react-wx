import Taro, { Component } from '@tarojs/taro'
import { 
  AtInput, 
  AtButton, 
  AtRadio, 
  AtTextarea, 
  AtToast, 
  AtIcon, 
  AtActionSheet, 
  AtActionSheetItem 
} from 'taro-ui'

import Upload from '../../components/upload'

import './index.less'

const labelList = [
  {
    label: '文章',
    value: 'WORD'
  },
  {
    label: '感悟',
    value: 'MIND'
  },
  {
    label: '宝贝',
    value: 'BABY'
  },
  {
    label: '纪实',
    value: 'VIDEO'
  }
]

let insertTitle = "";
let insertContent = "";



export default class Edit extends Component {

  config = {
    navigationBarTitleText: '发布中心'
  }

  constructor (props) {
    super(props);

    this.state = {
      type: "WORD",
      status: false,
      list: []
    }
  }

  clear = () => {
    this.setState({
      type: "WORD",
      status: false,
      list: []
    })
    insertTitle = "";
    insertContent = "";
  }

  handleTitle = (value) => {
    insertTitle = value
  }

  handleContent = (value) => {
    insertContent = value.detail.value
  }

  handleType = (value) => {
    this.setState({
      type: value
    })
  }

  componentWillUnmount () {
    this.clear()
  }

  toastClose = () => {
    let { type } = this.state;
    switch (type) {
      case 'WORD':
        Taro.redirectTo({ url: '/pages/article/index' })
        break;
      case 'MIND':
        Taro.redirectTo({ url: '/pages/mind/index' })
        break;
      case 'BABY':
        Taro.redirectTo({ url: '/pages/baby/index' })
        break;
      case 'VIDEO':
        Taro.redirectTo({ url: '/pages/video/index' })
        break;
      default:
        Taro.redirectTo({ url: '/pages/index/index' })
        break;
    }
  }



  upPublish = () => {
    let { type, list } = this.state;
    if (type === 'VIDEO') {
      // 图片类型发布
      Taro.request({
        url: `${Taro.REQUEST_URL}/video`,
        method: 'PUT',
        data: {
            album: insertTitle,
            update: Date.parse(new Date),
            id: Date.parse(new Date),
            first: list[0],
            url: JSON.stringify(list)
        },
        header: {
          'content-type': 'application/json'
        }
      }).then(res => {
        this.setState({
          status: !this.state.status
        })
      })

    }else {
      // 普通文章发布
      Taro.request({
        url: `${Taro.REQUEST_URL}/words`,
        method: 'PUT',
        data: {
            type: type,
            name: insertTitle,
            date: Date.parse(new Date),
            id: Date.parse(new Date),
            content: insertContent
        },
        header: {
          'content-type': 'application/json'
        }
      }).then(res => {
        this.setState({
          status: !this.state.status
        })
      })

    }
  }

  getList = (value) => {
    
    this.setState({
      list: value
    })

  }

  render () {

    let {status, type} = this.state;

    return (
      <View className='index'>
        <View className="content">
          <View className="title">
            <AtInput
              name='value'
              title='请输入标题'
              type='text'
              value={insertTitle}
              onChange={this.handleTitle}
            />
          </View>
          <View className="type">
            <AtRadio
              options={labelList}
              value={this.state.type}
              onClick={this.handleType.bind(this)}
            />
          </View>
          {
            type !== 'VIDEO' ? <View className="brief">
              <AtTextarea
                value={insertContent}
                onChange={this.handleContent}
                maxlength='200'
                placeholder='说出你的故事...'
              />
            </View> : <Upload isUploadList={{getList: this.getList.bind(this)}}></Upload>
          }
          <View className="save-btn">
            <AtButton type='secondary' onClick={this.upPublish}>发 布</AtButton>
          </View>
        </View>
        <View>
          <AtToast
          isOpened={ status }
          text="发布成功"
          onClose={ this.toastClose }
          icon="check"></AtToast>
        </View>
      </View>
    )
  }
}

