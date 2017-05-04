import { Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';
import menu from '../../menu';

const menuMap = new Map();
const traverseMenu = (map, item) => {
  const data = { name: item.name, icon: item.icon };
  map.set(item.key, data);
  if (item.child) {
    data.child = new Map();
    item.child.forEach(childItem => traverseMenu(data.child, childItem));
  }
};
menu.forEach(item => traverseMenu(menuMap, item));

const Bread = ({ location }) => {
  let map = menuMap;
  const items = location.pathname.substr(1).split('/').map((item, key) => {
    const data = map.get(item);
    map = data.child;
    return (
      <Breadcrumb.Item key={key}>
        {data.icon ? <Icon type={data.icon} /> : ''}
        <span>{data.name}</span>
      </Breadcrumb.Item>
    );
  });
  return (
    <Breadcrumb className={styles.bread}>
      <Breadcrumb.Item>
        <Icon type="home" /><span>首页</span>
      </Breadcrumb.Item>
      {items}
    </Breadcrumb>
  );
};

export default Bread;