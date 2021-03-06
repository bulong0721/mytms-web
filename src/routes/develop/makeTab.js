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
      { key: 'id', title: 'ID', group: 'Tab页信息', showType: 'ID', disabled: true, },
      { key: 'title', title: '窗体名', group: 'Tab页信息', showType: 'input', validator: [{ required: true }], },
      { key: 'key', title: '映射表名', group: 'Tab页信息', showType: 'input', validator: [{ required: true }], },
      { key: 'p01', notAsFilter: true, group: 'Tab页信息', showType: 'placeholder', },
      { key: 'filterSpan', group: 'Tab页信息', title: '过滤列宽', showType: 'number', defaultValue: 6, min: 4, max: 24 },
      { key: 'editorSpan', group: 'Tab页信息', title: '编辑列宽', showType: 'number', defaultValue: 8, min: 4, max: 24 },
      { key: 'nested', group: 'Tab页信息', title: '内嵌窗体', showType: 'switch', render: Formatter.yesOrNo },
      { key: 'parentKey', group: 'Tab页信息', title: '关联字段', showType: 'input' },
    ]
  };

  fieldColumns = [
    { key: 'id', dataIndex: 'id', title: 'ID', showType: 'ID', disabled: true, },
    { key: 'key', dataIndex: 'key', title: '列名', showType: 'ID', validator: [{ required: true }], },
    { key: 'title', dataIndex: 'title', title: '标题', showType: 'input', validator: [{ required: true }], },
    { key: 'showType', dataIndex: 'showType', title: '类型', showType: 'select', options: OptionConstants.showType, defaultValue: 'input' },
    { key: 'group', dataIndex: 'group', title: '字段组', showType: 'input', },
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

  buildActionEditor = (mgrCtx) => {
    const fields = [
      { key: 'title', title: '标题', showType: 'input', validator: [{ required: true }], },
      { key: 'icon', title: '图标', showType: 'input', },
      { key: 'type', title: '按钮风格', showType: 'input', },
      { key: 'target', title: '可用性', showType: 'select', options: OptionConstants.actionTarget },
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

  showModal = (action, group) => {
    const { dispatch } = this.props;
    dispatch({ type: 'tab/showModal', action, group });
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

  loadSchema = () => {
    if (this.formBasic) {
      let allError = null;
      this.formBasic.validateFields(errors => {
        allError = errors;
      });
      if (!allError) {
        const { key } = this.formBasic.getFieldsValue();
        const { dispatch } = this.props;
        dispatch({ type: 'tab/loadSchema', tableName: key });
      }
    }
  }

  nestedTabs = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'tab/nestedTabs' });
  }

  importNesteds = () => {
  }

  onTabRemove = (targetKey) => {
  }

  onTabChange = (activeKey) => {
  }

  goNext = () => {
    const { dispatch, tab: { tabCtx: { currentStep, fieldMap, targetSchema } } } = this.props;
    let basicData = null;
    switch (currentStep) {
      case 0:
        if (fieldMap.size <= 0 && targetSchema.fields.length == 0) {
          message.error("请先导入或创建字段");
          return;
        }
        if (this.formBasic) {
          let allError = null;
          this.formBasic.validateFields(errors => {
            allError = errors;
          });
          if (allError) {
            return;
          }
          basicData = this.formBasic.getFieldsValue();
        }
        break;
      case 1:
        let count = 0;
        fieldMap.forEach((value, index) => {
          if (value.group != null) {
            count++;
          }
        });
        if (count == 0 && targetSchema.fields.length == 0) {
          message.error("请先填充编辑字段");
          return;
        }
        break;
      case 2:
        console.log('targetSchema', targetSchema);
        break;
    }
    dispatch({ type: 'tab/goNext', basicData });
  }

  goPrivous = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'tab/goPrivous' });
  }

  saveSchema = () => {
    const { dispatch, tab: { tabCtx } } = this.props;
    dispatch({ type: 'tab/saveSchema', tabCtx });
  }

  exportSchema = () => {
    const { tabCtx: { targetSchema, targetSchema: { key } } } = this.props.tab;
    const json = JSON.stringify(targetSchema, null, 2);
    const fileContent = `import { Formatter, Parser } from '../utils/columnRender';\nimport OptionConstants from '../utils/optionConstants';\n\nmodule.exports = ${json}`;
    const a = document.createElement('a');
    a.textContent = 'download';
    a.download = `${key}.schema.js`;
    a.href = `data:application/js;charset=utf-8,${encodeURIComponent(fileContent)}`;
    a.click();
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

  columnAdd = { title: <a onClick={() => this.showModal("addColumns")} style={{ color: 'red' }}><Icon type="plus" />填充列</a> };
  filterAdd = ({ filterSpan }) => {
    const span = filterSpan || 6;
    return getFieldDecorator => <Col key="addFilter" span={span} style={{ textAlign: 'right' }}>
      <Button style={{ width: '75%', color: 'red' }} type="dashed" onClick={() => this.showModal("addFilters")}><Icon type="plus" />填充字段</Button>
    </Col>;
  }
  editorAdd = ({ editorSpan }) => {
    const span = editorSpan || 12;
    return (group, getFieldDecorator) =>
      <Col key="addEditor" span={span} style={{ textAlign: 'right' }}>
        <Button style={{ width: '75%', color: 'red' }} type="dashed" onClick={() => this.showModal("addEditors", group)}><Icon type="plus" />填充字段</Button>
      </Col>;
  }

  formBasic = null;
  formModal = null;
  render() {
    const { tabCtx: { targetSchema, modalAction, fieldSource, tabSource, modalVisible, modalTitle, modalActiveKey, transferSource, targetSource, currentStep } } = this.props.tab;
    const mgrCtx = new MgrCtx();
    const { schema, columns, filters, editors, actions, groupMap } = Builder.parseBySchema(targetSchema, mgrCtx, this);
    groupMap.forEach((groupEditors, group) => {
      groupEditors.push(getFieldDecorator => this.editorAdd(targetSchema)(group, getFieldDecorator));
    });
    columns.push(this.columnAdd);
    filters.push(this.filterAdd(targetSchema));
    const FormBasic = this.buildBaseEditor(mgrCtx);
    const FormQuery = this.buildQueryForm(filters);
    const FormField = this.buildFieldEditor(mgrCtx);

    const FormAction = this.buildActionEditor(mgrCtx);
    const FormFieldGroup = this.buildFieldGroupEditor(mgrCtx);

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
                  <Button type="dashed" style={{ color: 'red' }} onClick={() => this.showModal("addActions")}><Icon type="plus" />填充动作</Button>
                </Button.Group>
                <Table bordered columns={columns} pagination={false} />
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="edit" key={'1'}>
              <FormEditor />
              <Row style={{ textAlign: 'center', marginBottom: '12px' }}>
                <Button style={{ width: '100%', color: 'red' }} type="dashed" onClick={() => this.showModal("addFieldGroup")}><Icon type="plus" />新建字段组</Button>
              </Row>
              <Row style={{ textAlign: 'center' }}>
                <Tabs type="editable-card" onEdit={this.onTabRemove} hideAdd onChange={this.onTabChange} className="ant-layout-tab">
                  <Tabs.TabPane closable={false} tab="内嵌页" key="empty">
                    <Button style={{ width: '100%', color: 'red' }} type="dashed" onClick={() => this.nestedTabs()}><Icon type="plus" />配置内嵌页</Button>
                  </Tabs.TabPane>
                </Tabs>
              </Row>
            </Tabs.TabPane>
          </Tabs>
        </Row>
        <Row>
          <Col span={12} style={{ textAlign: 'left' }}>
            {currentStep == 0 ?
              <Button onClick={this.loadSchema} type='primary'><Icon type="upload" />加载</Button>
              : ''}
            {currentStep == 2 ?
              <Button.Group>
                <Button onClick={this.saveSchema} type='primary'><Icon type="save" />保存</Button>
                <Button onClick={this.exportSchema}><Icon type="download" />导出</Button>
              </Button.Group>
              : ''}
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
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