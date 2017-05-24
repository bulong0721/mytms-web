import React, { Component } from 'react';
import { Table, Input, Popconfirm, Button, Modal } from 'antd';
import Builder from '../../routes/manager/util/builder';

class DialogEditTable extends React.Component {
  state = {
    modalVisible: false,
    modalTitle: '新增',
    modalRecord: null,
  };

  addNew() {
    const { dataSource } = this.props;
    const newRecord = {};
    dataSource.push(newRecord);
    this.setState({ modalVisible: true, modalTitle: '新增', modalRecord: newRecord });
  }

  removeAt(index) {
    const { removeAt, parentKey } = this.props;
    if (removeAt) {
      removeAt(parentKey, index);
    }
  }

  formEditor = null;
  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  handleModalOk = () => {
    let allError = null;
    this.formEditor.validateFields(errors => {
      allError = errors;
    });
    if (!allError) {
      const { modalRecord } = this.state;
      const data = this.formEditor.getFieldsValue();
      Object.assign(modalRecord, data);
      this.setState({ modalVisible: false });
    }
  };

  getActionColumn = ({ disableNew, disableEdit, disableRemove }) => {
    return {
      title: disableNew ? '操作' : <Button type="danger" size='small' onClick={this.addNew.bind(this)}>新增</Button>,
      width: 100,
      dataIndex: 'actions',
      render: (text, record, index) => {
        return (
          <span>
            {disableEdit && disableNew ? '' : <a onClick={() => this.edit(index, record)}>编辑</a>}
            {disableEdit && disableRemove ? '' : <span className="ant-divider" />}
            {disableRemove ? '' :
              <Popconfirm title="确定删除吗?" onConfirm={() => this.removeAt(index)}>
                <a>删除</a>
              </Popconfirm>}
          </span>
        );
      },
    };
  };

  constructor(props) {
    super(props);
    const { columns, disableNew, disableEdit, disableRemove } = props;
    if (disableNew && disableEdit && disableRemove) {
      return;
    }
    columns.push(this.getActionColumn(props));
  }

  edit(index, record) {
    if (null != this.formEditor) {
      this.formEditor.setFieldsValue(record);
    }
    this.setState({ modalVisible: true, modalTitle: '编辑', modalRecord: record });
  };

  render() {
    const { columns, editors, dataSource, primary: { key } } = this.props;
    const { modalVisible, modalTitle, modalRecord } = this.state;
    const FormEditor = Builder.buildEditorForm(editors);
    return (
      <div className="editable-row-operations">
        <Table bordered columns={columns} dataSource={dataSource} rowKey={key} pagination={false} />
        <Modal visible={modalVisible} title={modalTitle} onOk={() => this.handleModalOk()} onCancel={this.hideModal} maskClosable={false} width={610}>
          <FormEditor ref={(input) => {
            this.formEditor = input
            if (input && modalRecord) {
              input.setFieldsValue(modalRecord);
            }
          }} />
        </Modal>
      </div>
    );
  }
};

export default DialogEditTable;