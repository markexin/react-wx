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
      openStatus: false
    }
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

  handleAction = () => {
    this.setState({
      openStatus: !this.state.openStatus
    })
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

  chooseItem = (value) => {
    if (value) {
      // 拍照功能
      wx.chooseImage({
        success: function(res) {
          var tempFilePaths = res.tempFilePaths
          console.log(tempFilePaths);
          // 调取上传接口
          // wx.uploadFile({
          //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          //   filePath: tempFilePaths[0],
          //   name: 'file',
          //   formData:{
          //     'user': 'test'
          //   },
          //   success: function(res){
          //     var data = res.data
          //     //do something
          //   }
          // })
        }
      })
    }else {
      
    }
  }

  upPublish = () => {
    let { type } = this.state;

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

  render () {

    let {status, type, openStatus} = this.state;

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
            </View> : <View className="fileUpload" onClick={this.handleAction}>
              <AtIcon value='camera' size='30' color='#999'></AtIcon>
            </View>
          }
          <View className="save-btn">
            <AtButton type='secondary' onClick={this.upPublish}>发 布</AtButton>
          </View>
        </View>
        <AtActionSheet isOpened={openStatus}>
          <AtActionSheetItem onClick={this.chooseItem.bind(this, true)}>
            上传图片
          </AtActionSheetItem>
          {/*<AtActionSheetItem onClick={this.chooseItem.bind(this, false)}>
            录制视频
          </AtActionSheetItem>*/}
        </AtActionSheet>
        <AtToast
        isOpened={ status }
        text="发布成功"
        onClose={ this.toastClose }
        icon="check"></AtToast>
      </View>
    )
  }
}

