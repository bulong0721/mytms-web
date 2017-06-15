import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Button, Icon, Tabs, Table, Modal, Tag, BackTop } from 'antd';
import { MgrCtx } from '../../models/context';
import Builder from './util/builder';
import styles from './index.less';

class Manager extends React.Component {
  // componentWillReceiveProps = (nextProps) => {
  //   const { manager: { tableName, propMap } } = nextProps;
  //   const tableName1 = this.props.route.tableName;
  //   // if (tableName === this.state.tableName) {

  //   // }
  //   let mgrCtx = propMap.get(tableName);
  //   if (null == mgrCtx) mgrCtx = new MgrCtx();
  //   this.setState({ mgrCtx, version: 1 });
  // };

  shouldComponentUpdate = (nextProps, nextState) => {
    const sholdUpdate = nextProps.route.tableName === nextProps.manager.tableName;
    return sholdUpdate;
  };

  componentDidMount = () => {
    const { dispatch, mgrCtx: { tableSchema }, tableName } = this.getMgrCtx();
    if (tableSchema && tableSchema.queryOnMount) {
      dispatch({ type: 'manager/query', tableName });
    }
  };

  componentWillUnmount = () => {
    const { dispatch, route: { tableName, path } } = this.props;
    dispatch({ type: 'manager/clear', tableName });
  }

  componentDidUpdate = () => {
    const { dispatch, mgrCtx: { formData, filter }, tableName, location } = this.getMgrCtx();
    if (filter && this.refs.query) {
      this.refs.query.resetFields();
      this.refs.query.setFieldsValue(filter);
    }
    if (formData && this.refs.editor) {
      this.refs.editor.resetFields();
      this.refs.editor.setFieldsValue(formData);
    }
  }

  handleQuery = () => {
    const { dispatch, mgrCtx: { pagination }, tableName } = this.getMgrCtx();
    const filter = this.refs.query.getFieldsValue();
    dispatch({ type: 'manager/query', tableName, filter, pagination });
  };

  toggleFilter = (e) => {
    const { dispatch, route: { tableName } } = this.props;
    dispatch({ type: 'manager/toggleFilter', tableName });
  };

  tableSelectChange = (selectedRowKeys) => {
    const { dispatch, route: { tableName } } = this.props;
    dispatch({ type: 'manager/selectedChange', tableName, payload: selectedRowKeys });
  };

  handleRowAction = ({ action, popupEditor, component, title, target, confirm }) => {
    const { dispatch, mgrCtx: { pagination, primaryKey }, tableName } = this.getMgrCtx();
    return (text, record, index) => {
      const doAction = () => {
        if (component || popupEditor) {
          dispatch({ type: 'manager/goEditor', tableName, title, action, record, component, popupEditor });
        } else {
          const filter = this.refs.query.getFieldsValue();
          dispatch({ type: action, text, record, index, tableName, pagination, primaryKey, filter });
        }
      };
      if (confirm) {
        Modal.confirm({
          title: `执行确认?`,
          content: `确定要执行${title}操作吗？`,
          onOk: doAction,
          onCancel() { },
        });
      } else {
        doAction();
      }
    };
  };

  handlePageAction = ({ action, popupEditor, component, title, target, confirm }) => {
    const { dispatch, mgrCtx: { selectedRowKeys, dataSource, pagination }, tableName } = this.getMgrCtx();
    return (e) => {
      const doAction = () => {
        if (component || popupEditor) {
          dispatch({ type: 'manager/goEditor', tableName, title, action, target, component, popupEditor });
        } else {
          const filter = this.refs.query.getFieldsValue();
          dispatch({ type: action, tableName, selectedRowKeys, dataSource, pagination, filter });
        }
      };
      if (confirm) {
        Modal.confirm({
          title: `执行确认?`,
          content: `确定要执行${title}操作吗？`,
          onOk: doAction,
          onCancel() { },
        });
      } else {
        doAction();
      }
    };
  };

  queryNested = (subField, parentRecord) => {
    const { dispatch, route: { tableName } } = this.props;
    dispatch({ type: 'manager/queryNested', tableName, subField, parentRecord });
  };

  handleModalOk = () => {
    const { dispatch, mgrCtx, mgrCtx: { editAction }, tableName } = this.getMgrCtx();
    let allError = null;
    this.refs.editor.validateFields(errors => {
      allError = errors;
    });
    if (!allError) {
      const filter = this.refs.query.getFieldsValue();
      const data = this.refs.editor.getFieldsValue();
      dispatch({ type: editAction, tableName, payload: data, filter, mgrCtx });
    }
  };

  goList = () => {
    const { dispatch, route: { tableName } } = this.props;
    dispatch({ type: 'manager/goList', tableName });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch, route: { tableName } } = this.props;
    const filter = this.refs.query.getFieldsValue();
    dispatch({ type: 'manager/query', tableName, filter, pagination });
  };

  queryForm = null;
  getQueryForm = (filters) => {
    if (null == this.queryForm) {
      this.queryForm = Builder.buildQueryForm(filters, this);
    }
    return this.queryForm;
  };

  editorForm = null;
  getEditorForm = (useEditor, editors, editComponent) => {
    if (null == this.editorForm) {
      this.editorForm = Builder.buildEditorForm(editors);
    }
    return useEditor ? this.editorForm : editComponent;
  };

  getMgrCtx = () => {
    const { dispatch, manager: { propMap }, route: { tableName }, location } = this.props;
    const mgrCtx = propMap.get(tableName) || new MgrCtx();
    propMap.set(tableName, mgrCtx);
    return { dispatch, mgrCtx, tableName, location };
  };

  render() {
    const { mgrCtx, tableName } = this.getMgrCtx();
    const { activeTab, formData, editComponent, editAction, useEditor, selectedRowKeys, dataSource, nestedFields, nestedSources, pagination } = mgrCtx;
    const { schema, primary, columns, filters, editors, actions } = Builder.parseByTable(tableName, mgrCtx, this);
    const FormQuery = this.getQueryForm(filters);
    const FormEditor = this.getEditorForm(useEditor, editors, editComponent);
    const rowSelection = { selectedRowKeys: selectedRowKeys, onChange: this.tableSelectChange, };
    const tableProps = { rowKey: primary ? primary.key : 'id', rowSelection, columns, dataSource, pagination, onChange: this.handleTableChange };
    return (
      <Tabs activeKey={activeTab} className="hide-header-tabs">
        <Tabs.TabPane tab="list" key="list">
          <Row className="ant-advanced-search-form">
            <FormQuery ref="query" />
          </Row>
          <Row className="ant-advanced-search-list">
            <Button.Group style={{ marginBottom: '8px' }}>
              {actions}
            </Button.Group>
            <Table bordered {...tableProps} />
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="edit" key="edit">
          <Row>
            <Col span={12} style={{ textAlign: 'left', marginBottom: '12px' }}>
              <Button.Group>
                <Button type="primary" icon="check" onClick={this.handleModalOk}>确定</Button>
                <Button icon="rollback" onClick={this.goList} style={{ marginLeft: '12px' }}>返回</Button>
              </Button.Group>
            </Col>
          </Row>
          <FormEditor ref="editor" />
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