import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { Tabs } from 'antd';
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

export default Viewport;