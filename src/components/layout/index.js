import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { Tabs, Icon } from 'antd';
import styles from './index.less';
import classnames from 'classnames';
import Bread from './bread';
import Footer from './footer';
import Sider from './sider';
import Header from './header';
import menu from '../../menu';

/*const Viewport = (props) => {
  const { children, location, isNavbar, siderFold, darkTheme } = props;
  return (
    <div className={classnames(styles.layout, { [styles.fold]: isNavbar ? false : siderFold }, { [styles.withnavbar]: isNavbar })}>
      {!isNavbar ? <aside className={classnames(styles.sider, { [styles.light]: !darkTheme })}>
        <Sider {...props} />
      </aside> : ''}
      <div className={styles.main}>
        <Header {...props} />
        <Bread location={location} />
        <div className={styles.container}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

Viewport.propTypes = {
  children: PropTypes.element.isRequired
}*/

const menuMap = new Map();
const traverseMenu = (prefix, item) => {
  const data = { name: item.name, icon: item.icon };
  if (item.child) {
    item.child.forEach(childItem => traverseMenu(`${prefix}/${item.key}`, childItem));
  } else {
    menuMap.set(`${prefix}/${item.key}`, data);
  }
};
menu.forEach(item => traverseMenu('', item));

class Viewport extends React.Component {
  currentTabKey = null;
  tabPanes = [];

  componentWillReceiveProps(nextProps) {
    const action = this.props.location.action;
    if (action === 'PUSH') {
      return;
    }
  }

  updateTab({ pathname }, children) {
    this.currentTabKey = pathname;
    for (const pane of this.tabPanes) {
      if (pane.key === pathname) {
        return pathname;
      }
    }
    const item = menuMap.get(pathname);
    if (item) {
      const title = <span className="ant-layout-tab-text"><Icon type={item.icon} />{item.name}</span>;
      this.tabPanes.push({
        key: pathname, title: title, content: children,
      });
    }
    return pathname;
  }

  state = {
    version: 0
  };

  onTabRemove = (targetKey) => {
    let nextTabKey = this.currentTabKey;
    if (this.currentTabKey === targetKey) {
      let currentTabIndex = -1;
      this.tabPanes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          currentTabIndex = i;
        }
      });
      if (currentTabIndex > 0) {
        nextTabKey = this.tabPanes[currentTabIndex - 1].key;
      }
      else if (currentTabIndex === 0 && this.tabPanes.length > 1) {
        nextTabKey = this.tabPanes[currentTabIndex + 1].key;
      }
    }
    const newTabPanes = this.tabPanes.filter(pane => pane.key !== targetKey);
    this.tabPanes = newTabPanes;
    this.currentTabKey = nextTabKey;
    this.setState({ version: 1 });
  };

  onTabChange = (activeKey) => {
    this.currentTabKey = activeKey;
    this.setState({ version: 1 });
  };

  render() {
    const { children, location, isNavbar, siderFold, darkTheme } = this.props;
    const currentTabKey = this.updateTab(location, children);
    return (
      <div className={classnames(styles.layout, { [styles.fold]: isNavbar ? false : siderFold }, { [styles.withnavbar]: isNavbar })}>
        {!isNavbar ? <aside className={classnames(styles.sider, { [styles.light]: !darkTheme })}>
          <Sider {...this.props} />
        </aside> : ''}
        <div className={styles.main}>
          <Header {...this.props} />
          {/*<Bread location={location} />*/}
          <div className={styles.container}>
            <div className={styles.content}>
              <Tabs activeKey={currentTabKey} type="editable-card" onEdit={this.onTabRemove} onChange={this.onTabChange} hideAdd className="ant-layout-tab">
                {this.tabPanes.map(pane => <Tabs.TabPane tab={pane.title} key={pane.key} closable={true}>
                  {pane.content}
                </Tabs.TabPane>)}
              </Tabs>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Viewport;

