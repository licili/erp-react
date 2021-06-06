import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from '../../components/header'
import NavLeft from '../../components/navleft'
import menuList from '../../contents/menuConfig'
import './index.less'
class HOME extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList
    }
  }
  // state = {}
  // 这个快要删除了。要什么来替代呢？？？ render在constructor后面执行。我放在constructor上了
  // componentDidMount() {
  //   this.setState({
  //     menuList
  //   })
  // }
  render () {
    return (
      <div className="home-page">
        <div className="home-page-header">
          <Header username={"lici"} />
        </div>
        <Row className="home-page-section">
          <Col span={3} className="home-page-section-sidebar">
            <NavLeft menuList={ this.state.menuList }/>
          </Col>
          <Col span={21} className="home-page-section-content">
            {this.props.children}
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default HOME;