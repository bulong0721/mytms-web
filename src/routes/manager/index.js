import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Button, Icon, Tabs, Table, Modal, Tag } from 'antd';
import MgrCtx from '../../models/mgrCtx';
import Builder from './util/builder';
import styles from './index.less';

class Manager extends React.Component {
  // state = {
  //   tableName: this.props.route.tableName,
  //   mgrCtx: new MgrCtx(),
  //   version: 0
  // };

  formQuery = null;
  formEditor = null;

  // componentWillReceiveProps = (nextProps) => {
  //   const { manager: { tableName, propMap } } = nextProps;
  //   const tableName1 = this.props.route.tableName;
  //   // if (tableName === this.state.tableName) {

  //   // }
  //   let mgrCtx = propMap.get(tableName);
  //   if (null == mgrCtx) mgrCtx = new MgrCtx();
  //   this.setState({ mgrCtx, version: 1 });
  // };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   const sholdUpdate = nextState.tableName === this.state.tableName;
  //   return sholdUpdate;
  // };

  handleQuery = () => {
    const { dispatch, route: { tableName } } = this.props;
    const filter = this.formQuery.getFieldsValue();
    dispatch({ type: 'manager/query', tableName, payload: filter });
  };

  toggleFilter = (e) => {
    const { dispatch, route: { tableName } } = this.props;
    dispatch({ type: 'manager/toggleFilter', tableName });
  };

  tableSelectChange = (selectedRowKeys) => {
    const { dispatch, route: { tableName } } = this.props;
    dispatch({ type: 'manager/selectedChange', tableName, payload: selectedRowKeys });
  };

  handleRowAction = ({ action, popupEditor, component, title }) => {
    const { dispatch, route: { tableName } } = this.props;
    return (text, record, index) => {
      if (component || popupEditor) {
        dispatch({ type: 'manager/goEditor', tableName, title, action, record, component, popupEditor });
      } else {
        dispatch({ type: action, payload: { text, record, index, tableName } });
      }
    };
  };

  handlePageAction = ({ action, popupEditor, component, title }) => {
    const { dispatch, mgrCtx: { selectedRowKeys, dataSource }, tableName } = this.getMgrCtx();
    return (e) => {
      if (component || popupEditor) {
        dispatch({ type: 'manager/goEditor', tableName, title, action, component, popupEditor });
      } else {
        const filter = formQuery.getFieldsValue();
        dispatch({ type: action, payload: { tableName, selectedRowKeys, dataSource, filter } });
      }
    };
  };

  newNestedRecord = (subField) => {
    const { dispatch, route: { tableName } } = this.props;
    dispatch({ type: 'manager/newNested', tableName, subField });
  };

  handleModalOk = () => {
    const { dispatch, mgrCtx: { editAction }, tableName } = this.getMgrCtx();
    let allError = null;
    this.formEditor.validateFields(errors => {
      allError = errors;
    });
    if (!allError) {
      const data = this.formEditor.getFieldsValue();
      dispatch({ type: editAction, tableName, payload: data });
    }
  };

  goList = () => {
    const { dispatch, route: { tableName } } = this.props;
    dispatch({ type: 'manager/goList', tableName });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch, route: { tableName } } = this.props;
    if (this.formQuery) {
      const filter = this.formQuery.getFieldsValue();
      dispatch({ type: 'manager/query', tableName, payload: filter, pagination });
    }
  };

  queryForm = null;
  getQueryForm = (filters) => {
    if (null == this.queryForm) {
      this.queryForm = Builder.buildQueryForm(filters, this);
    }
    return this.queryForm;
  };

  getMgrCtx = () => {
    const { dispatch, manager: { propMap }, route: { tableName } } = this.props;
    let mgrCtx = propMap.get(tableName);
    if (!mgrCtx)
      mgrCtx = new MgrCtx();
    return { dispatch, mgrCtx, tableName };
  };

  render() {
    const { mgrCtx, tableName } = this.getMgrCtx();
    const { activeTab, formData, editComponent, editAction, useEditor, selectedRowKeys, dataSource, nestedFields, nestedSources, expandAll, pagination } = mgrCtx;
    const { schema, primary, columns, filters, editors, actions } = Builder.parseByTable(tableName, mgrCtx, this);
    const FormQuery = this.getQueryForm(filters);
    const FormEditor = useEditor ? Builder.buildEditorForm(editors) : editComponent;
    const rowSelection = { selectedRowKeys: selectedRowKeys, onChange: this.tableSelectChange, };
    const tableProps = { rowKey: primary ? primary.key : 'id', rowSelection, columns, dataSource, pagination, onChange: this.handleTableChange };
    return (
      <Tabs activeKey={activeTab} className="hide-header-tabs">
        <Tabs.TabPane tab="list" key="list">
          <Row className="ant-advanced-search-form">
            <FormQuery ref={(input) => { this.formQuery = input; }} />
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
            this.formEditor = input;
            if (input && formData) {
              input.setFieldsValue(formData);
            }
          }} />
          <Row>
            <Col span={12} offset={12} style={{ textAlign: 'right' }}>
              <Button.Group>
                <Button type="primary" icon="check" onClick={this.handleModalOk}>确定</Button>
                <Button icon="rollback" onClick={this.goList} style={{ marginLeft: '12px' }}>返回</Button>
              </Button.Group>
            </Col>
          </Row>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

function mapStateToProps(state) {
  const { manager, loading } = state;
  return {
    manager,
    loading: loading.models.manager
  };
}
export default connect(mapStateToProps)(Manager);