import React, { Component } from 'react'
import { Menu } from 'antd'
// import {MailOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import './index.less'

const { SubMenu} = Menu;
export default class NavLeft extends Component {
  constructor(props) {
    super(props)
    var menuList = this.props.menuList;
    let menus = this.initMenu(menuList);
    let key = window.location.hash;
    console.log(menus)
    this.state = {
      menus,
      selectKey: key
    }
  }
  componentDidMount () {

 
  }
  initMenu = (data,key='') => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={ key + item.key } title={item.title}>
            {this.initMenu(item.children,key+item.key)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={key + item.key} name={item.title}>
          <Link to={key + item.key}>{ item.title}</Link>
        </Menu.Item>
      )
    })
  }
  handleClick = (e) => {
    console.log('click');
  }
  render() {
    return (
      <>
        <Menu
          className="sidebar-content"
          mode="inline"
          selectedKeys={[this.state.selectKey]}
          defaultOpenKeys={[this.state.selectKey]}
          theme="dark"
          onClick = {this.handleClick}
        >
          {this.state.menus}
        </Menu>
      </>
    )
  }
}
