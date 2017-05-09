import React, { Component } from 'react';
import { Table, Input, Popconfirm, Button } from 'antd';
import EditableCell from './editableCell';

class EditableTable extends React.Component {
  state = {
    changeMap: new Map(),
    index: 0
  };

  addNew() {
    const { addNew } = this.props;
    if (addNew) {
      addNew();
    }
  }

  actionColumn = {
    title: <Button type="danger" size='small' onClick={this.addNew.bind(this)}>新增</Button>,
    width: 100,
    dataIndex: 'actions',
    render: (text, record, index) => {
      const { $editable } = record;
      return (
        <div className="editable-row-operations">
          {$editable ?
            <span>
              <a onClick={() => this.editDone(index, record, 'save')}>确定</a>
              <span className="ant-divider" />
              <Popconfirm title="确定取消吗?" onConfirm={() => this.editDone(index, record, 'cancel')}>
                <a>取消</a>
              </Popconfirm>
            </span>
            :
            <span>
              <a onClick={() => this.edit(index, record)}>编辑</a>
              <span className="ant-divider" />
              <Popconfirm title="确定删除吗?" onConfirm={() => this.editDone(index, record, 'cancel')}>
                <a>删除</a>
              </Popconfirm>
            </span>
          }
        </div>
      );
    },
  };

  constructor(props) {
    super(props);
    const { columns, dataSource } = props;
    columns.forEach((column) => {
      const renderWrapper = this.wrapper(column);
      column.render = renderWrapper;
    });
    columns.push(this.actionColumn);
  }

  wrapper(column) {
    const { $field, render, $editor, dataIndex } = column;
    if ('action' === dataIndex) return render;
    const { changeMap } = this.state;
    return (value, record, index) => {
      const handleChange = (newValue) => {
        const change = changeMap.get(index) || {};
        change[dataIndex] = newValue;
        changeMap.set(index, change);
      };
      const { $editable, $status } = record;
      return (<EditableCell editable={$editable} value={value} onChange={handleChange} status={$status} column={column} />);
    };
  }

  edit(index, record) {
    record.$editable = true;
    this.setState({ index });
  };

  editDone(index, record, type) {
    record.$editable = false;
    record.$status = type;
    this.setState({ index });
  };

  getChanges() {
    return this.state.changeMap;
  }

  render() {
    const { columns, dataSource, primary: { key } } = this.props;
    return (
      <Table bordered columns={columns} dataSource={dataSource} rowKey={key} pagination={false} />
    );
  }
};

export default EditableTable;