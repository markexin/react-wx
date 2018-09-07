import Taro, { Component } from '@tarojs/taro'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { login } from '../../actions/counter'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  login () {
    dispatch(login())
  }
}))

export default class LoginModel extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      status: true
    }
  }

  componentWillUnmount () {
    let isLogin = this.props.counter.login.hasOwnProperty('nickName');
    this.setState({ status: !isLogin })
  }

  getInfo = () => {
    let {status} = this.state;
    this.props.login();
    this.setState({ status: !status })
  }

  render () {
    let {status} = this.state;
    return (
      <AtModal isOpened={status}>
        <AtModalHeader>登 录 说 明</AtModalHeader>
        <AtModalContent>
          <View>家园M站专属个人及其家庭人员使用。</View>
          <View>其他用户参与将追求其法律责任，非商业用途。</View>
        </AtModalContent>
        <AtModalAction>
          <Button>取消</Button>
          <Button open-type="getUserInfo" onClick={this.getInfo}>确定</Button>
        </AtModalAction>
      </AtModal>
    )
  }

}