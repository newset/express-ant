import React from 'react';

import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;

const Nav = React.createClass({
  getInitialState() {
	return {
	  current: 'mail'
	};
  },
  handleClick(e) {
	this.setState({
	  current: e.key
	});
  },
  render() {
	return (
	  <Menu onClick={this.handleClick}
		selectedKeys={[this.state.current]}
		theme={this.state.theme}
		mode="horizontal">
		<Menu.Item key="mail">
			<Link to="/products">
				<Icon type="home" />首页
			</Link>
		</Menu.Item>
		<Menu.Item key="app">
		  <Icon type="user" />用户管理
		</Menu.Item>
		<Menu.Item key="agency">
		  <Icon type="team" /> 加盟管理 
		</Menu.Item>
		<Menu.Item key="order">
		  <Icon type="shopping-cart" /> 订单管理 
		</Menu.Item>
		<Menu.Item key="product">
		  <Icon type="qrcode" /> 产品管理 
		</Menu.Item>
		<Menu.Item key="data">
		  <Icon type="line-chart" /> 数据统计 
		</Menu.Item>

		<Menu.Item key="logout" className="pull-right">
		  <Icon type="logout" /> 注销 
		</Menu.Item>
	  </Menu>
	);
  }
});

export default Nav;