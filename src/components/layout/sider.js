import PropTypes from 'prop-types';
import { Icon, Switch } from 'antd';
import styles from './index.less';
import config from '../../config';
import Menus from './menus';

const Sider = ({ siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, switchMenuPopover }) => {
  const menusProps = {
    siderFold,
    darkTheme,
    location,
    switchMenuPopover,
    navOpenKeys,
    changeOpenKeys,
  };
  return (
    <div>
      <div className={styles.logo}>
        <img alt={'logo'} src={config.logoSrc} />
        {siderFold ? '' : <span>{config.logoText}</span>}
      </div>
      <Menus {...menusProps} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type="bulb" />切换主题&nbsp;</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="黑" unCheckedChildren="白" />
      </div> : ''}
    </div>
  );

}

Sider.propTypes = {
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  isNavbar: PropTypes.bool,
  handleClickNavMenu: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Sider;