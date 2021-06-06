import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col } from 'antd';
import { SmileOutlined } from '@ant-design/icons'
import history from '../../history'
import './index.less'
export default class Header extends Component {
  logout = () => {
    history.push('/')
  }
  render() {
    return (
      <Row className="header">
        <Col span="18">
          <Link to="/homw" className="logo"> ERP管理系统 </Link>
        </Col>
        <Col span="6">
          <div className="info">
            <span><SmileOutlined /> 欢迎 {this.props.username}</span>
            <a className="logout" href="#javascrip:;" onClick={ this.logout}>退出</a>
          </div>
        </Col>
      </Row>
    )
  }
}
