import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';
import Login from '../components/login';
import Viewport from '../components/layout'
import styles from './index.less';
import config from '../config';

const App = ({ children, location, dispatch, app, loading }) => {
  const { login, loginButtonLoading, user, siderFold, darkTheme, isNavbar, menuPopoverVisible, navOpenKeys } = app;
  const loginProps = {
    loading,
    loginButtonLoading,
    onOk(data) {
      dispatch({ type: 'app/login', payload: data })
    },
  };
  const viewportProps = {
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
      dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
    },
    changeTheme() {
      dispatch({ type: 'app/changeTheme' })
    },
    changeOpenKeys(openKeys) {
      localStorage.setItem('navOpenKeys', JSON.stringify(openKeys))
      dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
    }
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