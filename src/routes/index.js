import { connect } from 'dva';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';
import Login from '../components/login';
import Viewport from '../components/layout'
import styles from './index.less';
import config from '../config';
const { prefix } = config;

const App = ({ children, location, dispatch, app, loading, route }) => {
  const { login, loginButtonLoading, user, siderFold, darkTheme, isNavbar, menuPopoverVisible, navOpenKeys } = app;
  const loginProps = {
    loading,
    loginButtonLoading,
    onOk(data) {
      dispatch({ type: 'app/login', payload: data })
    },
  };
  const viewportProps = {
    route,
    children,
    user,
    siderFold,
    location,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    darkTheme,
    switchMenuPopover() {
      dispatch({ type: 'app/switchMenuPopver' })
    },
    logout() {
      dispatch({ type: 'app/logout' })
    },
    switchSider() {
      dispatch({ type: 'app/switchSider' })
    },
    changeOpenKeys(openKeys) {
      localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys))
      dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
    },
    changeTheme() {
      dispatch({ type: 'app/changeTheme' })
    },
  };
  return (
    <div>
      <Helmet>
        <title>{config.name}</title>
      </Helmet>
      {login ?
        <Viewport {...viewportProps} /> :
        <div className={styles.spin}>
          <Spin tip="加载用户信息..." size="large" spinning={false}>
            <Login {...loginProps} />
          </Spin>
        </div>
      }
    </div>
  );
}

function mapStateToProps(state) {
  const { app, loading } = state;
  return {
    app,
    loading: loading.models.app
  };
}

export default connect(mapStateToProps)(App);