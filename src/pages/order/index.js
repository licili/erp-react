import React, { Component } from 'react'
import { Button, Table, Form,Select,DatePicker,Checkbox,Input,Tag} from 'antd'
import './index.less'
import FormItem from 'antd/lib/form/FormItem';
import BaseService from '../../components/baseService';
import urls from '../../contents/urls'
const { Option } = Select;

export default class Order extends Component {

  constructor() {
    super();
    this.queryList()
    this.state = {
      params: {},
      userList:[]
    }

  }
  queryList = () => {
    BaseService.ajax({
      url: urls.order_list,
      data: this.params,
      method:'get',
      isMock:true
    }).then(response => {
      if (response.code === 0) {
        this.setState({
          userList:response.data
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }
  handleSubmit = (data) => {
    console.log(this.state.userList);
    this.params = data;
  }
  render () {
    let columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '时间',
        dataIndex: 'deteTime',
        key: 'deteTime'
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        render: tags => <Tag color="green">{tags}</Tag>
      }
    ];
    const rowSelection = {
      onChange (selectedRowKeys, selectedRow) {
        console.log(selectedRow);
        console.log('hhh');
      },
      getCheckboxProps (record) {
        console.log(record);
      }
    }
    return (
      <div className="order">
        <div className="order-top">
          <FilterWrap handleSubmit={ this.handleSubmit}/>
        </div>
        <div className="order-detail">
          <Button className="operation" type="primary">订购详情</Button>
        </div>
        <Table
          rowSelection={{ type: 'checkbox', ...rowSelection }}
          pagination={{ defaultCurrent:"6",total:"100",size:"small",showSizeChanger:true}}
          className="" columns={columns}
          dataSource={this.state.userList}></Table>
      </div>
    )
  }
}

class FilterWrap extends React.Component {
  handleFinish = (data) => {
    this.props.handleSubmit(data)
  }
  render () {
    return (
      <Form layout="inline" onFinish={this.handleFinish}>
        <Form.Item label="城市" name="city">
          <Select defaultValue="0" style={{width:120}}>
          <Option value="0">全部</Option>
          <Option value="1">广州</Option>
          <Option value="2">上海</Option>
          <Option value="3">杭州</Option>
          <Option value="4">北京</Option>
        </Select>
        </Form.Item>
        <Form.Item label="时间查询" name="startTime">
          <DatePicker showTime/>
        </Form.Item>
        <Form.Item label="~" colon={false} name="endTime">
          <DatePicker showTime/>
        </Form.Item>
        <Form.Item label="信息查询" name="searchInfo">
          <Input placeholder="输入信息" />
        </Form.Item>
        <Form.Item label="短时订单" name="order">
          <Checkbox checked={false}/>
        </Form.Item>
        <FormItem>
          <Button type="primary"  htmlType="submit">提交</Button> &nbsp;
          <Button type="primary" onClick="this.reset">重置</Button>
        </FormItem>
      </Form>
    )
  }
}