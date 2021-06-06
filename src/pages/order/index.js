import React, { Component } from 'react'
import { Button, Table, Form,Select,DatePicker,Checkbox,Input,Row,Col} from 'antd'
import './index.less'
import FormItem from 'antd/lib/form/FormItem';
const { Option } = Select;

export default class Order extends Component {
  render() {
    return (
      <div className="order">
        <div className="order-top">
          <FilterWrap />
        </div>
        <div className="order-detail">
          <Button className="operation" type="primary">订购详情</Button>
        </div>
        <Table className=""></Table>
      </div>
    )
  }
}

class FilterWrap extends React.Component {
  render () {
    return (
      <Form layout="inline">
        <Form.Item label="城市">
        <Select defaultValue="0" style={{width:120}}>
          <Option value="0">全部</Option>
          <Option value="1">广州</Option>
          <Option value="2">上海</Option>
          <Option value="3">杭州</Option>
          <Option value="4">北京</Option>
        </Select>
        </Form.Item>
        <Form.Item label="时间查询">
          <DatePicker showTime/>
        </Form.Item>
        <Form.Item label="~" colon={false}>
          <DatePicker showTime/>
        </Form.Item>
        <Form.Item label="信息查询">
          <Input placeholder="输入信息" />
        </Form.Item>
        <Form.Item label="短时订单">
          <Checkbox/>
        </Form.Item>
        <FormItem>
          <Button type="primary" onClick="this.submit">提交</Button> &nbsp;
          <Button type="primary" onClick="this.reset">重置</Button>
        </FormItem>
      </Form>
    )
  }
}