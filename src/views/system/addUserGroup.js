import { Form, Tabs, Transfer, Input, Card, Button } from 'antd';
import styles from './addUserGroup.less';

const TabPane = Tabs.TabPane;

const FormItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
};

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 14, offset: 6 } },
};

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

const contentBasic = (
  <Card bodyStyle={{ padding: 10 }}>
    <Form>
      <Form.Item {...FormItemLayout} label="名称">
        <Input />
      </Form.Item>
      <Form.Item {...FormItemLayout} label="该组的用户列表">
        <Transfer
          listStyle={{ width: '250px' }}
          dataSource={mockData}
          titles={['在...群组之中', '其它群组']}
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

const contentAuthorization = (
  <Card bodyStyle={{ padding: 10 }}>
    <Form>
      <Form.Item {...FormItemLayout} label="权限（主机组）">
        <Transfer
          listStyle={{ width: '250px' }}
          dataSource={mockData}
          titles={['已有权限', '未添加权限']}
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
  { title: '权限', content: contentAuthorization },
];

const AddUserGroup = () => {
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

export default Form.create()(AddUserGroup);
