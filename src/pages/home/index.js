import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from '../../components/header'
import NavLeft from '../../components/navleft'
import menuList from '../../contents/menuConfig'
class HOME extends Component {
  state = {}
  componentDidMount () {
    this.setState({
      menuList
    })
  }
  render () {
    return (
      <div className="home-page">
        <div className="welcome-page">
          <Header username={ "lici"}/>
          <Row>
            <Col span={3} className="left-nav">
              <NavLeft menuList={ this.state.menuList }/>
            </Col>
            <Col span={21} className="right-container">
              {this.props.children}
            </Col>
          </Row>
        </div>
        
      </div>
    )
  }
}

export default HOME;