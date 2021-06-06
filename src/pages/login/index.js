import React, { useState,Component } from 'react'
import { Form,Input,Button} from 'antd'
import './index.less'
import BaseService from '../../components/baseService'
import history from '../../history'
import urls from '../../contents/urls'
export default class Login extends Component {
  loginSubmit = (data) => {
    console.log(data);
    BaseService.ajax({
      url: urls.login,
      isMock: true,
      data:data
    }).then((response) => {
      console.log(response,"???????");
      if (response.code == 0) {
        history.push('/home')
      } else {

      }
    })
  }
  render () {
    return (
      <div className="login-page">
        <div className="login-content-wrap">
          <div className="login-content">
            <div className="word">ERP<br />管理系统</div>
            <div className="login-box">
              <div className="title">账号密码登录</div>
              <LoginForm loginSubmit={ this.loginSubmit}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



class LoginForm extends Component {
  handleFinsh = (values) => {
    // value 就是表单提交过来的数据。我们可以在这里直接请求后台API，看他是否有权去访问后台。
    // 我们也可以直接把它提交到父组件上。父组件会对它的一些状态进行实时刷新。由父组件统一进行汇总
    console.log(values);
    // 对值进行判断
    // 把value值传到父组件 (回传)
    this.props.loginSubmit(values);
  }
  render () {
    return (
      <>
        <Form size="default" onFinish={this.handleFinsh}>
          <Form.Item
            name="account"
          // rules={[{
          //   validator: async (hh, name) => {
          //     if (!name) {
          //       return Promise.reject('账号不能为空！')
          //     } else if (!/^1\d{10}$/.test(name)) {
          //       return Promise.reject('填写正确的账号格式！')
          //     } else {
          //       return Promise.resolve()
          //     }
          //   }
          // }]}

          >
            <Input placeholder="请输入账号" type="text"
            />
          </Form.Item>
          <Form.Item
            // rules={[{ required: true, message: 'Please input your password!' }]}
            name="password">
            <Input placeholder="请输入密码" type="password" />
          </Form.Item>
          <Form.Item>
            <Button className="login-form-button" type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </>
    )
  }
}




