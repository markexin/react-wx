import Taro, { Component } from '@tarojs/taro'
import { View, Button, RadioGroup, Radio, Label, Input, Textarea } from '@tarojs/components'
import './index.less'

const label = [
  {
    name: '文章',
    value: 'WORD'
  },
  {
    name: '感悟',
    value: 'MIND'
  },
  {
    name: '宝贝',
    value: 'BABY'
  },
  {
    name: '纪实',
    value: 'VIDEO'
  }
]

export default class Edit extends Component {

  config = {
    navigationBarTitleText: '发布中心'
  }

  render () {
    return (
      <View className='index'>
        <View className="content">
          <Input className="title" type='text' placeholder='' />
          <RadioGroup className="type">
            {
              label.map((item, index) => {
                return (
                  <Label className='example-body__label' for={ index } key={ index }>
                    <Radio value={item.value}>{item.name}</Radio>
                  </Label>
                )
              })
            }
          </RadioGroup>
          <Textarea className="contentText" />
        </View>
        <Button type="primary" className="bottom-btn">发 布</Button>
      </View>
    )
  }
}

