import React, { Component } from 'react';
import { Row, Col, Button, Icon, Table, Modal, Input } from 'antd';
import Builder from '../../routes/manager/util/builder';
import { MgrCtx } from '../../models/context';

class F7Picker extends React.Component {
  componentWillUnmount = () => {
    const { tableName } = this.props;
    console.log('componentWillUnmount', tableName);
  }

  handleQuery = () => {
    const { tableName } = this.props;
    const filter = this.formQuery.getFieldsValue();
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
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  handleModalOk = () => {
    this.setState({ modalVisible: false });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { tableName } = this.props;
    if (this.formQuery) {
      const filter = this.formQuery.getFieldsValue();
    }
  };

  formQuery = null;
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
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null,
    }
  }

  render() {
    const { tableName, width, title } = this.props;
    const { modalVisible, selectedRowKeys, dataSource, pagination } = this.state;
    const { schema, primary, columns, filters } = Builder.parseByTable(tableName, new MgrCtx(), this);
    const FormQuery = this.getQueryForm(filters);
    const rowSelection = { selectedRowKeys: selectedRowKeys, onChange: this.tableSelectChange, };
    const tableProps = { rowKey: primary ? primary.key : 'id', rowSelection, columns, dataSource, pagination, onChange: this.handleTableChange };
    return (
      <span>
        <Input suffix={<Icon type="search" />} onMouseDown={this.showModal} />
        <Modal visible={modalVisible} title={title} onOk={() => this.handleModalOk()} onCancel={this.hideModal} maskClosable={false} width={width || 650}>
          <Row>
            <FormQuery ref={(input) => { this.formQuery = input; }} />
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