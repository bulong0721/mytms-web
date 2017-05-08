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

const Viewport = (props) => {
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
}

/*class Viewport extends React.Component {
  state = {
    currentTabKey: '',
    tabPanes: [],
  };

  componentWillMount() {
    this.tabTitleMap = this.parseTabTitle();
    this.updateTab(this.props);
  }

  componentWillMount() {
    this.tabTitleMap = this.parseTabTitle();
    this.updateTab(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const action = this.props.location.action;
    if (action === 'PUSH') {
      return;
    }
    if (this.props.collapse === nextProps.collapse) {
      this.updateTab(nextProps);
    }
  }

  parseTabTitle() {
    const tabTitleMap = new Map();
    const addItem = item => {
      if (item.url) {
        return;
      }
      if (item.icon) {
        tabTitleMap.set(item.key, <span className="ant-layout-tab-text"><Icon type={item.icon} />{item.name}</span>);
      } else {
        tabTitleMap.set(item.key, <span className="ant-layout-tab-text">{item.name}</span>);
      }
    };
    tabTitleMap.set('*', <span className="ant-layout-tab-text"><Icon type="frown-o" />Error</span>);
    return tabTitleMap;
  }

  updateTab(props) {
    const route = props.route;
    let key = route.path;
    const tabTitle = this.tabTitleMap.get(key);
    this.state.currentTabKey = key;

    let exist = false;
    for (const pane of this.state.tabPanes) {
      if (pane.key === key) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      this.state.tabPanes.push({
        key,
        title: 'tabTitle',
        content: props.children,
      });
    }
  }

  render() {
    const { children, location, isNavbar, siderFold, darkTheme } = this.props;
    return (
      <div className={classnames(styles.layout, { [styles.fold]: isNavbar ? false : siderFold }, { [styles.withnavbar]: isNavbar })}>
        {!isNavbar ? <aside className={classnames(styles.sider, { [styles.light]: !darkTheme })}>
          <Sider {...this.props} />
        </aside> : ''}
        <div className={styles.main}>
          <Header {...this.props} />
          <Bread location={location} />
          <div className={styles.container}>
            <div className={styles.content}>
              <Tabs activeKey={this.state.currentTabKey} type="editable-card" onEdit={this.onTabRemove} onChange={this.onTabChange} hideAdd className="ant-layout-tab">
                {this.state.tabPanes.map(pane => <Tabs.TabPane tab={pane.title} key={pane.key} closable={true}>
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
}*/

export default Viewport;

