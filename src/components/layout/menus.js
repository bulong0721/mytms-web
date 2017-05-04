import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import menu from '../../menu';

const topMenus = menu.map(item => item.key);

const generateMenus = (array, siderFold, parentPath = '/') => {
  return array.map(item => {
    const linkTo = parentPath + item.key
    if (item.child) {
      return (
        <Menu.SubMenu key={linkTo} title={<span>{item.icon ? <Icon type={item.icon} /> : ''}{siderFold ? '' : item.name}</span>}>
          {generateMenus(item.child, siderFold, `${linkTo}/`)}
        </Menu.SubMenu>
      )
    }
    return (
      <Menu.Item key={linkTo}>
        <Link to={linkTo}>
          {item.icon ? <Icon type={item.icon} /> : ''}
          {siderFold && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
        </Link>
      </Menu.Item>
    )
  })
};

const Menus = (props) => {
  const levelMap = {};
  const { siderFold, darkTheme, location, navOpenKeys, changeOpenKeys, switchMenuPopver } = props;

  const getAncestorKeys = (key) => {
    let map = {}
    const getParent = (index) => {
      const result = [String(levelMap[index])]
      if (levelMap[result[0]]) {
        result.unshift(getParent(result[0])[0])
      }
      return result
    }
    for (let index in levelMap) {
      if ({}.hasOwnProperty.call(levelMap, index)) {
        map[index] = getParent(index)
      }
    }
    return map[key] || []
  };

  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key) > -1));
    const latestCloseKey = navOpenKeys.find(key => !(navOpenKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  };

  const menuItems = generateMenus(menu, siderFold);
  const menuProps = !siderFold ? { onOpenChange, openKeys: navOpenKeys } : {};
  return (
    <Menu
      {...menuProps}
      mode={siderFold ? 'vertical' : 'inline'}
      theme={darkTheme ? 'dark' : 'light'}
      onClick={switchMenuPopver}
      defaultSelectedKeys={[location.pathname !== '/' ? location.pathname : '/dashboard/dashboard']}>
      {menuItems}
    </Menu>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Menus);