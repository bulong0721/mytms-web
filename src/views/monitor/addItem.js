import { Form, Tabs, Icon, Card } from 'antd';
import styles from './addItem.less';

const TabPane = Tabs.TabPane;

const contentApple = (
  <span>content</span>
);

const items = [
  { icon: 'apple', type: 'apple' },
  { icon: 'android', type: 'android' },
  { icon: 'chrome', type: 'chrome' },
  { icon: 'ie', type: 'ie' },
  { icon: 'windows', type: 'windows' },
];

const AddItem = () => {
  const panes = items.map((item, index) => {
    const tab = (<Card className={styles.itemCard} bordered={true} bodyStyle={{ padding: 0 }}>
      <Icon className={styles.iconWarp} type={item.icon} />
    </Card>);
    return (
      <TabPane tab={tab} key={index}>
        Content {index}
      </TabPane>
    );
  });
  return (
    <Tabs defaultActiveKey="0">
      {panes}
    </Tabs>
  );
};

export default Form.create()(AddItem);