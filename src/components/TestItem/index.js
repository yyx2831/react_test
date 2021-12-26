import React, { Component } from 'react'
import { Checkbox,button } from 'antd';

export default class index extends Component {
    onChange = e => {
        // 更新数据
        console.log(this.props.TestItemData)
        // 遍历数据
        this.props.TestItemData.map((item, index) => {
            if (item.id === e.target.value) {
                // 更新数据
                this.props.TestItemData[index].done = e.target.checked
                // 修改父组件的数据
                this.props.FonChange(this.props.TestItemData)
            }
        })
      };
      onClick = (event) => {
        // 遍历数据
        this.props.TestItemData.map((item, index) => {
            if (item.id == event.target.value) {
                // 删除数据
                this.props.TestItemData.splice(index, 1)
                console.log(this.props.TestItemData)
                // 修改父组件的数据
                this.props.FonChange(this.props.TestItemData)
            }
        })
        };
    render() {
        return (
            <div>
                {
                    this.props.TestItemData.map((item, index) => {
                        return (
                            <div key={item.id}>
                            <Checkbox checked={item.done} onChange={this.onChange} key={item.id} value={item.id}>{item.name}</Checkbox><button value={item.id} onClick={this.onClick}>删除</button><br/>
                            </div>
                        )
                    }
            )
                }
            </div>
        )
    }
}