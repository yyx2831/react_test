import React, { Component } from 'react'
import { Input } from 'antd'
import TestItem from '../TestItem/index'

export default class index extends Component {
    // 状态
    state = {
        inputValue: '',
        TestItemData: [
            {
                id: 1,
                name: '吃饭',
                done: false
            },
            {
                id: 2,
                name: '睡觉',
                done: false
            },
            {
                id: 3,
                name: '打豆豆',
                done: false
            }
        ]
    }
    // 接受子组件传递过来的数据
    FonChange = (TestItemData) => {
        console.log('接受子组件传递过来的数据', TestItemData)
        this.TestItemData = TestItemData
        // 刷新
        this.forceUpdate()
    }
    onKeyDown= (event)=> {
        // 判断是否按下了enter键
        if (event.keyCode === 13) {
            // 获取数据最后一个的id
            let id = this.TestItemData[this.TestItemData.length - 1].id
            // 创建新的数据
            let newData = {id:id + 1, name:event.target.value, done:false}
            // 添加数据
            this.TestItemData.push(newData)
            // 刷新
            this.forceUpdate()
        }
    }
    render() {
        return (
            <div>
                <Input onKeyDown={this.onKeyDown} placeholder="Basic usage"/>
                <TestItem TestItemData={this.state.TestItemData} FonChange={this.FonChange}/>
            </div>
        )
    }
}
