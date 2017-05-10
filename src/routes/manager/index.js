import { connect } from 'dva';
import { Row, Col, Button, Icon, Tabs, Table, Modal, Tag } from 'antd';
import Builder from './util/builder';
import styles from './index.less';

const Manager = ({ dispatch, manager, loading, route }) => {
  const { tableName } = route;
  let formQuery = null;
  let formEditor = null;

  const handleQuery = () => {
    const filter = formQuery.getFieldsValue();
    dispatch({ type: 'manager/query', tableName, payload: filter });
  };

  const handleToggle = (e) => {
    dispatch({ type: 'manager/handleToggle' });
  };

  const onTableSelectChange = (selectedRowKeys) => {
    dispatch({ type: 'manager/selectChange', payload: selectedRowKeys });
  };

  const handleRowAction = ({ action, popupEditor, component, title, $schema }) => {
    return (text, record, index) => {
      if (component || popupEditor) {
        let subDataSource = [];
        if ($schema.subTable) {
          subDataSource = record[$schema.subTable.key];
        }
        dispatch({ type: 'manager/showModal', title, action, record, component, popupEditor, subDataSource });
      } else {
        dispatch({ type: action, payload: { text, record, index, tableName } });
      }
    };
  };

  const handlePageAction = ({ action, popupEditor, component, title, $schema }) => {
    const { selectedRowKeys, dataSource } = manager;
    return (e) => {
      if (component || popupEditor) {
        dispatch({ type: 'manager/showModal', title, action, component, popupEditor });
      } else {
        const filter = formQuery.getFieldsValue();
        dispatch({ type: action, payload: { tableName, selectedRowKeys, dataSource, filter } });
      }
    };
  };

  const handleNewSub = () => {
    dispatch({ type: 'manager/handleNewSub' });
  };

  const handleModalOk = () => {
    const { modalAction } = manager;
    formEditor.validateFields(errors => {
      if (errors)
        return;
    });
    const data = formEditor.getFieldsValue();
    dispatch({ type: modalAction, tableName, payload: data });
  };

  const hideModal = () => {
    dispatch({ type: 'manager/hideModal' });
  };

  const handleTableChange = (pagination, filters, sorter) => {
    const filter = formQuery.getFieldsValue();
    dispatch({ type: 'manager/query', tableName, payload: filter, pagination });
  };

  const { expand, dataSource, subDataSource, selectedRowKeys, modalVisible, modalFormData, modalComponent, popupEditor, pagination } = manager;
  const container = { handlePageAction, handleRowAction, selectedRowKeys, subDataSource, handleNewSub };
  const { schema, primary, columns, filters, editors, actions, subPrimary, subColumns } = Builder.parseByTable(tableName, container);
  const FormQuery = Builder.buildQueryForm(filters, { expand, handleQuery, handleToggle });
  const FormEditor = popupEditor ? Builder.buildEditorForm(editors) : modalComponent;
  const rowSelection = { selectedRowKeys: selectedRowKeys, onChange: onTableSelectChange, };
  const tableProps = { rowKey: 'id', rowSelection, columns, dataSource, pagination, onChange: handleTableChange };
  return (
    <Tabs activeKey={modalVisible ? "edit" : "list"} className="hide-header-tabs">
      <Tabs.TabPane tab="list" key="list">
        <Row className="ant-advanced-search-form">
          <FormQuery ref={(input) => { formQuery = input; }} />
        </Row>
        <Row className="ant-advanced-search-list">
          <Button.Group style={{ marginBottom: '8px' }}>
            {actions}
          </Button.Group>
          <Table bordered {...tableProps} />
        </Row>
      </Tabs.TabPane>
      <Tabs.TabPane tab="edit" key="edit">
        <FormEditor ref={(input) => {
          formEditor = input;
          if (input && modalFormData) {
            input.setFieldsValue(modalFormData);
          }
        }} />
        <Row>
          <Col span={12} offset={12} style={{ textAlign: 'right' }}>
            <Button.Group>
              <Button type="primary" icon="check" onClick={handleModalOk}>确定</Button>
              <Button icon="rollback" onClick={hideModal} style={{ marginLeft: '12px' }}>返回</Button>
            </Button.Group>
          </Col>
        </Row>
      </Tabs.TabPane>
    </Tabs>
  );
}

function mapStateToProps(state) {
  const { manager, loading } = state;
  return {
    manager,
    loading: loading.models.manager
  };
}
export default connect(mapStateToProps)(Manager);