import Taro, { Component } from '@tarojs/taro'
import { AtInput, AtButton, AtRadio, AtTextarea } from 'taro-ui'
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
      title: "",
      type: "",
      content: ""
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
      console.log(res)
    })
  }

  render () {

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
          <View className="brief">
            <AtTextarea
              value={insertContent}
              onChange={this.handleContent}
              maxlength='200'
              placeholder='说出你的故事...'
            />
          </View>
          <View className="save-btn">
            <AtButton type='secondary' onClick={this.upPublish}>发 布</AtButton>
          </View>
        </View>
      </View>
    )
  }
}

