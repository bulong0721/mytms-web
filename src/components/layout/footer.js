import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import config from '../../config';

const Footer = () => <div className={styles.footer}>
  {config.footerText}
</div>

export default Footer;