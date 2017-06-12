import React, { Component } from 'react';
import { Row, Col, Button, Icon, Table, Modal, Input, notification } from 'antd';
import Builder from '../../routes/manager/util/builder';
import { MgrCtx } from '../../models/context';
import config from '../../config';
import { post } from '../../services/http';

class F7Picker extends React.Component {
  componentWillUnmount = () => {
    const { tableName } = this.props;
    console.log('componentWillUnmount', tableName);
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState(this.extraFromProps(nextProps.value || {}));
    }
  }

  extraFromProps(data) {
    const { labelField, valueField } = this.props;
    return { label: data[labelField || 'name'], value: data[valueField || 'value'] };
  }

  async handleQuery() {
    const { tableName, queryUrl } = this.props;
    const filter = this.refs.query.getFieldsValue();
    const url = `${config.api.host}${queryUrl}`;
    const data = await post(url, filter);
    if (data && data.status == 0) {
      const { pagination } = this.state;
      pagination.total = data.total;
      pagination.current = data.current || 1;
      this.setState({ dataSource: data.rows, pagination });
    }
  };

  tableSelectChange = (selectedRowKeys) => {
    const { tableName } = this.props;
    this.setState({ selectedRowKeys });
  };

  handleRowAction = ({ action, popupEditor, component, title }) => {
  };

  handlePageAction = ({ action, popupEditor, component, title, target, confirm }) => {
  };

  showModal = () => {
    this.setState({ modalVisible: true }, this.handleQuery);
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  handleModalOk = () => {
    const { selectedRowKeys } = this.state;
    if (selectedRowKeys.length == 1) {
      const data = this.extraFromRow(selectedRowKeys[0]);
      this.props.onChange(data);
      this.setState({ modalVisible: false, ...data });

    } else {
      notification.warn({
        message: '确认提示',
        description: `请先选中一条记录`,
        duration: 3,
      });
    }
  };

  handleRowSelect(data) {
    const { labelColumn, valueColumn, labelField, valueField } = this.props;
    const label = data[labelColumn || 'name'];
    const value = data[valueColumn || 'value'];
    const result = { label, value };
    result[labelField || 'name'] = label;
    result[valueField || 'value'] = value;
    this.props.onChange(result);
    this.setState({ modalVisible: false, ...result });
  }

  wrapperColumns(columns) {
    const { labelColumn, valueColumn } = this.props;
    columns.forEach(column => {
      if (column.key == labelColumn || column.key == valueColumn) {
        column.render = (text, record, index) => {
          return <a onClick={() => this.handleRowSelect(record)}>{text}</a>
        };
      }
    });
  };

  extraFromRow(selectedRowKey) {
    const key = this.primaryKey.key || 'id';
    const data = this.state.dataSource.filter(elem => selectedRowKey == elem[key])[0];
    const { labelColumn, valueColumn, labelField, valueField } = this.props;
    const label = data[labelColumn || 'name'];
    const value = data[valueColumn || 'value'];
    const result = { label, value };
    result[labelField || 'name'] = label;
    result[valueField || 'value'] = value;
    return result;
  }

  async handleTableChange(pagination, filters, sorter) {
    const { tableName, queryUrl } = this.props;
    const filter = this.refs.query.getFieldsValue();
    const url = `${config.api.host}${queryUrl}`;
    const data = await post(url, { ...filter, ...pagination });
    if (data && data.status == 0) {
      const { pagination } = this.state;
      pagination.total = data.total;
      pagination.current = data.current || 1;
      this.setState({ dataSource: data.rows, pagination });
    }
  };

  queryForm = null;
  getQueryForm = (filters) => {
    if (null == this.queryForm) {
      this.queryForm = Builder.buildQueryHeader(filters, this);
    }
    return this.queryForm;
  };

  state = {
    modalVisible: false,
    selectedRowKeys: [],
    dataSource: [],
    label: '',
    value: null,
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null,
    }
  }
  primaryKey = null;

  handleChange(e) {
    
  }

  render() {
    const { tableName, width, title } = this.props;
    const { modalVisible, selectedRowKeys, label, value, dataSource, pagination } = this.state;
    const { schema, primary, columns, filters } = Builder.parseByTable(tableName, new MgrCtx(), this);
    const FormQuery = this.getQueryForm(filters);
    const rowSelection = { selectedRowKeys: selectedRowKeys, onChange: this.tableSelectChange, };
    this.primaryKey = primary;
    this.wrapperColumns(columns);
    const tableProps = { rowKey: primary ? primary.key : 'id', rowSelection, columns, dataSource, pagination, onChange: this.handleTableChange.bind(this) };
    return (
      <span>
        <Input suffix={<Icon type="search" />} onChange={this.handleChange} value={label} onMouseDown={this.showModal} ref="input" />
        <Modal visible={modalVisible} title={title} onOk={this.handleModalOk.bind(this)} onCancel={this.hideModal} maskClosable={false} width={width || 650}>
          <Row>
            <FormQuery ref="query" />
          </Row>
          <Row>
            <Table bordered {...tableProps} />
          </Row>
        </Modal>
      </span>
    );
  }
}

export default F7Picker;