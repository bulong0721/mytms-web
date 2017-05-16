import { Steps, Button, Transfer, Form, Row, Col, Icon, Table, Tabs, Collapse, Card, Modal, message } from 'antd';
import Builder from '../manager/util/builder';
import { MgrCtx } from '../../models/context';
import { Formatter, Parser } from '../../utils/columnRender';
import OptionConstants from '../../utils/optionConstants';
import styles from './makeTab.less';
import { connect } from 'dva';

class MakeTab extends React.Component {
  constructor(props) {
    super(props);
  }

  steps = [
    { title: '基本信息', content: 'First-content', },
    { title: '列表页面', content: 'Second-content', },
    { title: '编辑页面', content: 'Last-content', }
  ];

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
    { key: 'id', dataIndex: 'id', title: 'ID', showType: 'ID', disabled: true, },
    { key: 'key', dataIndex: 'key', title: '列名', showType: 'ID', validator: [{ required: true }], },
    { key: 'title', dataIndex: 'title', title: '标题', showType: 'input', validator: [{ required: true }], },
    { key: 'showType', dataIndex: 'showType', title: '类型', showType: 'select', options: OptionConstants.showType, defaultValue: 'input' },
    { key: 'grpTitle', dataIndex: 'grpTitle', title: '字段组', showType: 'input', },
    { key: 'notAsFilter', dataIndex: 'notAsFilter', title: '非过滤字段', showType: 'switch', render: Formatter.yesOrNo },
    { key: 'notAsColumn', dataIndex: 'notAsColumn', title: '非主表列', showType: 'switch', render: Formatter.yesOrNo },
    { key: 'notAsEditor', dataIndex: 'notAsEditor', title: '非编辑字段', showType: 'switch', render: Formatter.yesOrNo },
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

  formBasicEditor = null;
  buildBaseEditor = (mgrCtx) => {
    if (this.formBasicEditor != null) return this.formBasicEditor;
    const { schema, editors } = Builder.parseBySchema(this.tabSchema, mgrCtx, this);
    this.formBasicEditor = Builder.buildEditorForm(editors);
    return this.formBasicEditor;
  }

  buildFieldEditor = (mgrCtx) => {
    const fieldSchema = { editorSpan: 24, fields: this.fieldColumns, actions: [] };
    const { editors } = Builder.parseBySchema(fieldSchema, mgrCtx, this);
    return Builder.buildEditorForm(editors);
  }

  buildNestedTabEditor = (mgrCtx) => {
    const fields = [
      { key: 'key', title: '关联字段', showType: 'input', validator: [{ required: true }], },
      { key: 'title', title: '标题', showType: 'input', validator: [{ required: true }], },
      { key: 'actualTab', title: 'Tab页', showType: 'select', options: [], validator: [{ required: true }], },
      { key: 'disableNew', title: '禁止新增', showType: 'switch', },
      { key: 'disableEdit', title: '禁止编辑', showType: 'switch', },
      { key: 'disableRemove', title: '禁止删除', showType: 'switch', },
      { key: 'sorter', title: '顺序', showType: 'number', },
    ];
    const fieldSchema = { editorSpan: 24, fields, actions: [] };
    const { editors } = Builder.parseBySchema(fieldSchema, mgrCtx, this);
    return Builder.buildEditorForm(editors);
  }

  buildActionEditor = (mgrCtx) => {
    const fields = [
      { key: 'title', title: '标题', showType: 'input', validator: [{ required: true }], },
      { key: 'icon', title: '图标', showType: 'input', },
      { key: 'type', title: '类型', showType: 'input', },
      { key: 'action', title: '动作', showType: 'input', },
      { key: 'popupEditor', title: '默认编辑组件', showType: 'switch', },
      { key: 'component', title: '自定义编辑组件', showType: 'input', },
    ];
    const fieldSchema = { editorSpan: 24, fields, actions: [] };
    const { editors } = Builder.parseBySchema(fieldSchema, mgrCtx, this);
    return Builder.buildEditorForm(editors);
  }

  buildFieldGroupEditor = (mgrCtx) => {
    const fields = [
      { key: 'title', dataIndex: 'title', title: '字段组名', showType: 'input', validator: [{ required: true }], }
    ];
    const fieldSchema = { editorSpan: 24, fields, actions: [] };
    const { editors } = Builder.parseBySchema(fieldSchema, mgrCtx, this);
    return Builder.buildEditorForm(editors);
  }

  hideModal = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'tab/hideModal' });
  };

  handleModalOk = () => {
    const { dispatch } = this.props;
    let modalValues = null;
    if (this.formModal) {
      modalValues = this.formModal.getFieldsValue();
    }
    dispatch({ type: 'tab/handleModalOk', modalValues });
  };

  showModal = (action, field) => {
    const { dispatch } = this.props;
    dispatch({ type: 'tab/showModal', action, field });
  }

  importFields = () => {
    if (this.formBasic) {
      let allError = null;
      this.formBasic.validateFields(errors => {
        allError = errors;
      });
      if (!allError) {
        const { key } = this.formBasic.getFieldsValue();
        const { dispatch } = this.props;
        dispatch({ type: 'tab/importFields', tableName: key });
      }
    }
  }

  importNesteds = () => {
  }

  onTabRemove = (targetKey) => {
  }

  onTabChange = (activeKey) => {
  }

  goNext = () => {
    const { dispatch, tab: { tabCtx: { currentStep, fieldMap, targetSchema } } } = this.props;
    switch (currentStep) {
      case 0:
        if (fieldMap.size <= 0) {
          message.error("请先导入或创建字段");
          return;
        }
        break;
      case 1:
        let count = 0;
        fieldMap.forEach((value, index) => {
          if (value.grpTitle != null) {
            count++;
          }
        });
        if (count == 0) {
          message.error("请先填充编辑字段");
          return;
        }
        break;
      case 2:
        console.log('targetSchema', targetSchema);
        break;
    }
    dispatch({ type: 'tab/goNext' });
  }

  goPrivous = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'tab/goPrivous' });
  }

  handleTransferChange = (targetKeys, direction, moveKeys) => {
    const { dispatch } = this.props;
    dispatch({ type: 'tab/transferChange', targetKeys });
  }

  setModalForm = (input, activeKey) => {
    const { tabCtx: { modalActiveKey } } = this.props.tab;
    if (activeKey === modalActiveKey) {
      this.formModal = input;
    }
  }

  handlePageAction = ({ action, popupEditor, component, title }) => {
    console.log(title);
  }

  columnAdd = { title: <a onClick={() => this.showModal("addColumns")} style={{ color: 'red', fontWeight: '600' }}><Icon type="plus" />填充列</a> };
  filterAdd = getFieldDecorator => <Col key="addFilter" span={6}><Button style={{ width: '80%' }} type="dashed" onClick={() => this.showModal("addFilters")}><Icon type="plus" />填充字段</Button></Col>;
  editorAdd = (field, getFieldDecorator) => <Col key="addEditor" span={12} style={{ textAlign: 'center' }}><Button style={{ width: '80%' }} type="dashed" onClick={() => this.showModal("addEditors", field)}><Icon type="plus" />填充字段</Button></Col>;

  formBasic = null;
  formModal = null;
  render() {
    const { tabCtx: { targetSchema, modalAction, fieldSource, tabSource, modalVisible, modalTitle, modalActiveKey, transferSource, targetSource, currentStep } } = this.props.tab;
    const mgrCtx = new MgrCtx();
    const { schema, columns, filters, editors, actions } = Builder.parseBySchema(targetSchema, mgrCtx, this);
    schema.fields.forEach(field => {
      if (field.$subEditors) {
        field.$subEditors.push(getFieldDecorator => this.editorAdd(field, getFieldDecorator));
      }
    });
    columns.push(this.columnAdd);
    filters.push(this.filterAdd);
    const FormBasic = this.buildBaseEditor(mgrCtx);
    const FormQuery = this.buildQueryForm(filters);
    const FormField = this.buildFieldEditor(mgrCtx);

    const FormAction = this.buildActionEditor(mgrCtx);
    const FormFieldGroup = this.buildFieldGroupEditor(mgrCtx);
    const FormNestedTab = this.buildNestedTabEditor(mgrCtx);

    const FormEditor = Builder.buildEditorForm(editors);
    return (
      <div>
        <Row>
          <Steps current={currentStep} style={{ marginBottom: '12px' }}>
            <Steps.Step title="基本信息" />
            <Steps.Step title="编辑页面" />
            <Steps.Step title="列表页面" />
          </Steps>
        </Row>
        <Row className={styles.basic}>
          <Tabs activeKey={currentStep.toString()} className="hide-header-tabs">
            <Tabs.TabPane tab="base" key={'0'}>
              <FormBasic ref={(input) => this.formBasic = input} />
              <Card title="页面字段" extra={<span>
                <a onClick={() => this.showModal("newField")}>新增</a>
                <span className="ant-divider" />
                <a onClick={() => this.importFields()}>导入</a>
                <span className="ant-divider" />
                <a onClick={() => this.showModal("editField")}>编辑</a>
                <span className="ant-divider" />
                <a>删除</a>
              </span>}>
                <Table bordered columns={this.fieldColumns} dataSource={fieldSource} />
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="list" key={'2'}>
              <Row className="ant-advanced-search-form">
                <FormQuery />
              </Row>
              <Row className="ant-advanced-search-list">
                <Button.Group style={{ marginBottom: '8px' }}>
                  {actions}
                  <Button type="dashed" onClick={() => this.showModal("addActions")}><Icon type="plus" />填充动作</Button>
                </Button.Group>
                <Table bordered columns={columns} pagination={false} />
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="edit" key={'1'}>
              <FormEditor />
              <Row style={{ textAlign: 'center', marginBottom: '12px' }}>
                <Button style={{ width: '100%' }} type="dashed" onClick={() => this.showModal("addFieldGroup")}><Icon type="plus" />新建字段组</Button>
              </Row>
              <Row style={{ textAlign: 'center' }}>
                <Tabs type="editable-card" onEdit={this.onTabRemove} hideAdd onChange={this.onTabChange} className="ant-layout-tab">
                  <Tabs.TabPane closable={false} tab="内嵌页" key="empty">
                    <Button style={{ width: '100%' }} type="dashed" onClick={() => this.showModal("nestedTabs")}><Icon type="plus" />配置内嵌页</Button>
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
        <Modal visible={modalVisible} title={modalTitle} onOk={this.handleModalOk} onCancel={this.hideModal} maskClosable={false} width={610}>
          <Tabs activeKey={modalActiveKey} className="hide-header-tabs">
            <Tabs.TabPane tab="transfer" key="transfer">
              <Transfer listStyle={{ width: 265, height: 400 }} onChange={this.handleTransferChange} dataSource={transferSource} showSearch targetKeys={targetSource} render={item => `${item.title}(${item.key})`} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="field" key="field">
              <FormField ref={(input) => this.setModalForm(input, 'field')} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="action" key="action">
              <FormAction ref={(input) => this.setModalForm(input, 'action')} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="fieldGroup" key="fieldGroup">
              <FormFieldGroup ref={(input) => this.setModalForm(input, 'fieldGroup')} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="nested" key="nested">
              <FormNestedTab ref={(input) => this.setModalForm(input, 'nested')} />
            </Tabs.TabPane>
          </Tabs>
        </Modal>
      </div >
    );
  }
}



function mapStateToProps(state) {
  const { tab, loading } = state;
  return {
    tab,
    loading: loading.models.tab
  };
}

export default connect(mapStateToProps)(MakeTab);