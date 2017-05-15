import { Steps, Button, Transfer, Form, Row, Col, Icon, Table, Tabs, Collapse, Card, message } from 'antd';
import Builder from '../manager/util/builder';
import MgrCtx from '../../models/mgrCtx';
import { Formatter, Parser } from '../../utils/columnRender';
import OptionConstants from '../../utils/optionConstants';
import styles from './makeTab.less';

class MakeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  steps = [
    { title: '基本信息', content: 'First-content', },
    { title: '列表页面', content: 'Second-content', },
    { title: '编辑页面', content: 'Last-content', }
  ];

  targetSchema = {
    actions: [
    ],
    fields: [
      {
        title: '基本信息',
        showType: 'collapse',
        child: [
          { key: 'title', title: '标题', showType: 'input', },
        ]
      }
    ],
  };

  tabSchema = {
    actions: [],
    fields: [
      {
        title: '基本信息',
        showType: 'collapse',
        child: [
          { key: 'id', title: 'ID', showType: 'ID', disabled: true, },
          { key: 'title', title: '窗体名', showType: 'input', validator: [{ required: true }], },
          { key: 'key', title: '映射表名', showType: 'input', validator: [{ required: true }], },
          { key: 'p01', notAsFilter: true, showType: 'placeholder', },
          { key: 'filterSpan', title: '过滤列宽', showType: 'number', defaultValue: 6, min: 4, max: 24 },
          { key: 'editorSpan', title: '编辑列宽', showType: 'number', defaultValue: 8, min: 4, max: 24 },
          { key: 'nested', title: '内嵌窗体', showType: 'switch', render: Formatter.yesOrNo },
        ]
      }
    ]
  };

  fieldColumns = [
    { key: 'id', title: 'ID', showType: 'ID', disabled: true, },
    { key: 'key', title: '列名', showType: 'input', },
    { key: 'title', title: '注释', showType: 'input', },
    { key: 'javaType', title: '类型', showType: 'select', options: OptionConstants.showType, defaultValue: 'input' },
    { key: 'size', title: '大小', showType: 'number', },
    { key: 'primary', title: '主键', showType: 'switch', render: Formatter.yesOrNo },
    { key: 'notNull', title: '必需', showType: 'switch', render: Formatter.yesOrNo },
  ];

  buildQueryForm = (filterFields) => {
    return Form.create()(
      props => {
        const { getFieldDecorator } = props.form;
        const children = filterFields.map(field => field(getFieldDecorator));
        const handleReset = () => props.form.resetFields();
        return (
          <Form>
            <Row gutter={18}>
              {children}
            </Row>
            <Row>
              <Col span={12} offset={12} style={{ textAlign: 'right' }}>
                <Button.Group>
                  <Button type="primary"><Icon type="search" />查询</Button>
                  <Button><Icon type="cross" />清除</Button>
                </Button.Group>
              </Col>
            </Row>
          </Form>
        );
      }
    );
  }

  buildBaseEditor = (mgrCtx) => {
    const { schema, editors } = Builder.parseBySchema(this.tabSchema, mgrCtx, this);
    return Builder.buildEditorForm(editors);
  }

  addAction = () => {

  }

  addColumn = () => {

  }

  addFilterField = () => {

  }

  addEditorField = () => {

  }

  addNestedTab = () => {

  }

  addFieldGroup = () => {

  }

  onTabRemove = (targetKey) => {
  }

  onTabChange = (activeKey) => {
  }

  goNext = () => {
    let nextIndex = this.state.currentIndex + 1;
    if (nextIndex >= 3) return
    this.setState({
      currentIndex: nextIndex
    });
  }

  goPrivous = () => {
    let nextIndex = this.state.currentIndex - 1;
    if (nextIndex < 0) return
    this.setState({
      currentIndex: nextIndex
    });
  }

  actionAdd = <Button type="dashed" key="addAction" onClick={this.addAction}><Icon type="plus" />填充动作</Button>;
  columnAdd = { title: <a onClick={this.addColumn} style={{ color: 'red', fontWeight: '600' }}><Icon type="plus" />填充列</a> };
  filterAdd = getFieldDecorator => <Col key="addFilter" span={6}><Button style={{ width: '80%' }} type="dashed" onClick={this.addFilterField}><Icon type="plus" />填充字段</Button></Col>;
  editorAdd = getFieldDecorator => <Col key="addEditor" span={12} style={{ textAlign: 'center' }}><Button style={{ width: '80%' }} type="dashed" onClick={this.addEditorField}><Icon type="plus" />填充字段</Button></Col>;
  nestedAdd = {};

  render() {
    const mgrCtx = new MgrCtx();
    const { schema, columns, filters, editors, actions } = Builder.parseBySchema(this.targetSchema, mgrCtx, this);
    schema.fields.forEach(field => {
      if (field.$subEditors) {
        field.$subEditors.push(this.editorAdd);
      }
    });
    actions.push(this.actionAdd);
    columns.push(this.columnAdd);
    filters.push(this.filterAdd);
    const FormBasic = this.buildBaseEditor(mgrCtx);
    const FormQuery = this.buildQueryForm(filters);
    const FormEditor = Builder.buildEditorForm(editors);
    return (
      <div>
        <Row>
          <Steps current={this.state.currentIndex} style={{ marginBottom: '12px' }}>
            <Steps.Step title="基本信息" />
            <Steps.Step title="列表页面" />
            <Steps.Step title="编辑页面" />
          </Steps>
        </Row>
        <Row className={styles.basic}>
          <Tabs activeKey={this.state.currentIndex.toString()} className="hide-header-tabs">
            <Tabs.TabPane tab="base" key={'0'}>
              <FormBasic />
              <Card title="页面字段" extra={<span>
                <a>新增</a>
                <span className="ant-divider" />
                <a>导入</a>
                <span className="ant-divider" />
                <a>编辑</a>
                <span className="ant-divider" />
                <a>删除</a>
              </span>}>
                <Table bordered columns={this.fieldColumns} pagination={false} />
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="list" key={'1'}>
              <Row className="ant-advanced-search-form">
                <FormQuery />
              </Row>
              <Row className="ant-advanced-search-list">
                <Button.Group style={{ marginBottom: '8px' }}>
                  {actions}
                </Button.Group>
                <Table bordered columns={columns} pagination={false} />
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="edit" key={'2'}>
              <FormEditor />
              <Row style={{ textAlign: 'center', marginBottom: '12px' }}>
                <Button style={{ width: '100%' }} type="dashed" onClick={this.addFilterField}><Icon type="plus" />新建字段组</Button>
              </Row>
              <Row style={{ textAlign: 'center' }}>
                <Tabs type="editable-card" onEdit={this.onTabRemove} hideAdd onChange={this.onTabChange} className="ant-layout-tab">
                  <Tabs.TabPane closable={false} tab="内嵌页" key="empty">
                    <Button style={{ width: '100%' }} type="dashed" onClick={this.addFilterField}><Icon type="plus" />配置内嵌页</Button>
                  </Tabs.TabPane>
                </Tabs>
              </Row>
            </Tabs.TabPane>
          </Tabs>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button.Group>
              <Button onClick={this.goPrivous} style={{ marginRight: '12px' }}><Icon type="left" />上一步</Button>
              <Button onClick={this.goNext}>下一步<Icon type="right" /></Button>
            </Button.Group>
          </Col>
        </Row>
      </div >
    );
  }
}

export default MakeTab;