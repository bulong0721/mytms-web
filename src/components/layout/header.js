import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Popover } from 'antd';
import { connect } from 'dva';
import styles from './index.less';
import Menus from './menus';

const Header = (props) => {
  const { user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys } = props;

  const handleClickMenu = (e) => {
    if (e.key === 'logout' && logout) {
      logout();
    }
  };

  const menusProps = {
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys
  };
  const SubMenu = Menu.SubMenu
  return (
    <div className={styles.header}>
      {isNavbar
        ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div className={styles.button} onClick={switchSider}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
        </div>}
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="mail" />
        </div>
        <Menu mode="horizontal" onClick={handleClickMenu}>
          <SubMenu style={{ float: 'right' }} title={<span><Icon type="user" />{user.name}</span>}>
            <Menu.Item key="logout">
              <a>注销</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );

}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Header;