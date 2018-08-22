import Taro, { Component } from '@tarojs/taro'
import './index.less'


export default class Title extends Component {
  
    constructor (props) {

      super(props)

      this.title = this.props.title

    }

    handleClick = (e) => {
      e.preventDefault();
      console.log(11111)
    }

    render () {

        return (
            <view>
              <view className="title">
                <span className="before"></span>
                { this.title }
                <span className="after"></span>
              </view>
              <view className="content">
                <div onClick={ this.handleClick.bind(this) }>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                  <view className="brief">这是一个标题</view>
                </div>
                <div>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                  <view className="brief">这是一个标题</view>
                </div>
              </view>
              <view className="content">
                <div>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                  <view className="brief">这是一个标题</view>
                </div>
                <div>
                  <image src="http://img0.imgtn.bdimg.com/it/u=2845338703,2138227875&fm=27&gp=0.jpg" />
                  <view className="brief">这是一个标题</view>
                </div>
              </view>
            </view>
        )
    }
}