import Taro, { Component } from '@tarojs/taro'
import { 
  AtIcon
} from 'taro-ui'
import './index.less'

export default class Upload extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }

  upFile = (tempFilePaths) => {
    let {list} = this.state;
    let { isUploadList } = this.props;

    wx.uploadFile({
      url: `${Taro.REQUEST_URL}/upload`, //仅为示例，非真实的接口地址
      filePath: tempFilePaths,
      header: {
       'content-type':'multipart/form-data'
      },
      name: 'upload',
      success: res => {
        var data = JSON.parse(res.data)
        if (data.code === 0) {

          // 更新组件内部state
          this.setState({
            list: [...list, ...[data.url]]
          })

          // 传递props
          const isUploadList = this.props.isUploadList;
          isUploadList.getList([...list, ...[data.url]]);

        }
      }
    })
  }


  chooseItem = (value) => {
    let _this = this;
    if (value) {
      // 拍照功能
      wx.chooseImage({
        success: function(res) {
          var tempFilePaths = res.tempFilePaths
          // 判断是否多文件上传
          tempFilePaths.forEach( (element, index) => {
            _this.upFile(element)
          });
        }
      })
    }else {
      // 待开发小视频录像功能
    }
  }

  render () {
    let {list} = this.state;
    return (
      <View>
        <View className="fileUpload" onClick={this.chooseItem.bind(this, true)}>
          <AtIcon value='camera' size='30' color='#999'></AtIcon>
        </View>
        <View className="uploadWall">
          <View className="uploadEnd">
          {
            list.map((item, index) => {
              return <Image src={item} key={index} />
            })
          }
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

Upload.defaultProps = {
  isUploadList: {}
};

/**
 * 入参 Props 格式校验
 * @type {Object}
 */

Upload.propTypes = {
  isUploadList: Object
};
