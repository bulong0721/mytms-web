import { Form, Tabs, Transfer, Input, Card, Button } from 'antd';
import styles from './addHostGroup.less';

const TabPane = Tabs.TabPane;

const FormItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
};

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 14, offset: 6 } },
};

const contentBasic = (
  <Card bodyStyle={{ padding: 10 }}>
    <Form>
      <Form.Item {...FormItemLayout} label="组名称">
        <Input />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="default" size="large" style={{ marginRight: '10px' }}>取消</Button>
        <Button type="primary" size="large">保存</Button>
      </Form.Item>
    </Form>
  </Card>
);

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const targetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);

const contentHostList = (
  <Card bodyStyle={{ padding: 10 }}>
    <Form>
      <Form.Item {...FormItemLayout} label="组名称">
        <Input disabled value="name" />
      </Form.Item>
      <Form.Item {...FormItemLayout} label="组列表">
        <Transfer
          listStyle={{ width: '250px' }}
          dataSource={mockData}
          titles={['在...群组之中', '其它主机']}
          targetKeys={targetKeys}
          selectedKeys={[]}
          render={item => item.title}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="default" size="large" style={{ marginRight: '10px' }}>取消</Button>
        <Button type="primary" size="large">保存</Button>
      </Form.Item>
    </Form>
  </Card>
);

const items = [
  { title: '基本', content: contentBasic },
  { title: '主机列表', content: contentHostList },
];

const AddHostGroup = () => {
  const panes = items.map((item, index) => {
    const tab = (
      <p>{item.title}</p>
    );
    return (
      <TabPane tab={tab} key={index}>
        {item.content}
      </TabPane>
    );
  });
  return (
    <Tabs defaultActiveKey="0">
      {panes}
    </Tabs>
  );
};

export default Form.create()(AddHostGroup);
