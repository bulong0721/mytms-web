import { Form, Tabs, Icon, Input,InputNumber, Row, Col, Card, Button, Select } from 'antd';
import styles from './addDevice.less';
import config from '../../config';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const  agentInstallUrl  = config.agentServer+"/agent/sh/"+config.agentToken+"/install.sh | bash";


const contentAList = [
  { type: 'Linux',
    support: 'CentOS 5/6/7、RedHat 5/6/7、Ubuntu 12/14、Debian 7/8。',
    innerLine: (
      <div>
        <p>在需要管理的主机上，执行以下命令 ：</p>
        <p>
          <Input readOnly className={styles.messageBox}
                 addonBefore={(<Icon type="copy" style={{ width: '30px' }}></Icon>)}
                 value={agentInstallUrl}
          />
        </p>
      </div>
    ) },
  { type: 'Windows',
    support: 'Windows XP/7/8/10、Windows Server 2003/2008/2012。',
    innerLine: (
      <p>请点击下载保存<a href="#">install_agent.vbs</a>，并双击或命令执行安装（需要以管理员权限运行）</p>
    ) },
];

const createOl = (list) => {
  return (
    <div  style={{ backgroundColor: '#fff' }}>
      {list.map((node) => {
        return (
          <div>
            <h3>{node.type}</h3>
            <p><b>支持系统列表：</b>{node.support}</p>
            {node.innerLine}
            <p>安装Agent后，即可在主机管理页面中查看到该主机。</p>
          </div>
        );
      })}
    </div>
  );
};

const contentA = createOl(contentAList);

const FormItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
};

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 14, offset: 6 } },
};

const formItemList = [
  { label: 'IP地址', content: (<Input placeholder="网络设备的IP地址"/>) },
  { label: '主机名', content: (<Input placeholder="网络设备的hostname" />) },
  { label: '别名', content: (<Input placeholder="别名,可选" />) },
  { label: 'SNMP端口', content: (<InputNumber min={1} max={65535} defaultValue={161} />) },
  { label: '描述', content: (<Input placeholder="请输入这台设备的描述信息" />) },
  { label: '代理（Proxy）', extra: '选择对应的代理', content: (<Select placeholder="--请选择代理--"></Select>) },
];

const createForm = (list) => {
  return (
    <Form>
      {list.map((node) => {
        return (
          <Form.Item {...FormItemLayout} label={node.label} extra={node.extra}>
            {node.content}
          </Form.Item>
        );
      })}
      <Form.Item {...tailFormItemLayout}>
        <Button type="default" size="large" style={{ marginRight: '10px' }}>取消</Button>
        <Button type="primary" size="large">保存</Button>
      </Form.Item>
    </Form>
  );
};

const contentB = (
  <Row gutter={20}>
    <Col span={18}>
       <Card title="提示：尊敬的用户，在这里添加网络设备（交换机，防火墙）。" bodyStyle={{ padding: 10 }}>
         {createForm(formItemList)}
       </Card>
    </Col>
    <Col span={6}>
      <Card title="SNMP配置说明" bodyStyle={{ padding: 10 }}>
        <p>#configure terminal</p>
        <p>#snmp-server enable traps snmp auth</p>
        <p>#end</p>
        <p style={{ fontWeight: 'bold' }}>确认SNMP是否开启</p>
      </Card>
    </Col>
  </Row>
);

const items = [
  { title: 'Linux / Windows', content: contentA },
  { title: '网络设备', content: contentB },
  { title: '其它', content: contentA },
];

const AddDevice = () => {
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

export default Form.create()(AddDevice);
