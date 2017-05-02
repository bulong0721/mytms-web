import React, { PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import menu from '../../menu';

class Menus extends React.Component {
  state = {
    current: '1',
    openKeys: [],
  }

  constructor(props) {
    super(props);
  }

  topMenus = menu.map(item => item.key);

  generateMenus = (array, siderFold, parentPath = '/') => {
    return array.map(item => {
      const linkTo = parentPath + item.key
      if (item.child) {
        return (
          <Menu.SubMenu key={linkTo} title={<span>{item.icon ? <Icon type={item.icon} /> : ''}{siderFold && this.topMenus.indexOf(item.key) >= 0 ? '' : item.name}</span>}>
            {this.generateMenus(item.child, siderFold, `${linkTo}/`)}
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item key={linkTo}>
          <Link to={linkTo}>
            {item.icon ? <Icon type={item.icon} /> : ''}
            {siderFold && this.topMenus.indexOf(item.key) >= 0 ? '' : item.name}
          </Link>
        </Menu.Item>
      )
    });
  }

  getAncestorKeys = (key) => {
    const map = {
      '/navigation/navigation2': ['/navigation'],
    }
    return map[key] || []
  }

  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }

  handleClickNavMenu = (e) => {
    this.setState({ current: e.key });
  }

  render() {
    const { siderFold, darkTheme, location, navOpenKeys } = this.props;
    const menuItems = this.generateMenus(menu, siderFold);
    const menuProps = !siderFold ? { onOpenChange: this.onOpenChange, openKeys: this.state.openKeys, selectedKeys: [this.state.current] } : {};
    return (
      <Menu
        {...menuProps}
        mode={siderFold ? 'vertical' : 'inline'}
        theme={darkTheme ? 'dark' : 'light'}
        onClick={this.handleClickNavMenu}
        defaultSelectedKeys={[location.pathname !== '/' ? location.pathname : '/dashboard/dashboard']}>
        {menuItems}
      </Menu>
    );
  }
}

Menus.propTypes = {
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  isNavbar: PropTypes.bool,
  handleClickNavMenu: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Menus);