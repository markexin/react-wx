import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

Taro['REQUEST_URL'] = "http://localhost:7001"

import './app.less'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/video/index',
      'pages/article/index',
      'pages/mind/index',
      'pages/edit/index',
      'pages/baby/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
