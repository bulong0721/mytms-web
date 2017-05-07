import React, { Component } from 'react';
import { Table, Input } from 'antd';
import EditCell from './editCell';

const EditTable = ({ editable, columns, dataSource }) => {
  const changeMap = new Map();
  const wrapper = (column) => {
    const { $field, $render, $editor, dataIndex } = column;
    if (editable) {
      return editRender(column);
    } else {
      return $render || noopsRender;
    }
  };

  const noopsRender = (value, record, index) => value;

  const editRender = (column) => {
    const { $editor, dataIndex } = column;
    return (value, record, index) => {
      const handleChange = (newValue) => {
        const change = changeMap.get(index) || {};
        change[dataIndex] = newValue;
        changeMap.set(index, change);
      };
      return (<EditCell editable={editable} value={value} onChange={handleChange} />);
    };
  };

  const getChanges = () => {
    return changeMap;
  };

  columns.forEach((column) => {
    const renderWrapper = wrapper(column);
    column.render = renderWrapper;
  });

  return (
    <Table bordered columns={columns} dataSource={dataSource} rowKey="name" />
  );
};

class EditTable2 extends React.Component {
  state = {
    changeMap: new Map()
  };

  constructor(props) {
    super(props);
  }

  wrapper(column) {
    const { $field, $render, $editor, dataIndex } = column;
    if (editable) {
      return editRender(column);
    } else {
      return $render || noopsRender;
    }
  }

  noopsRender(value, record, index) {
    return value;
  }

  editRender(column) {
    const { $editor, dataIndex } = column;
    return (value, record, index) => {
      const handleChange = (newValue) => {
        const change = changeMap.get(index) || {};
        change[dataIndex] = newValue;
        changeMap.set(index, change);
      };
      return (<EditCell editable={editable} value={value} onChange={handleChange} />);
    };
  }

  getChanges() {
    return changeMap;
  }

  render() {
    return (
      <Table bordered columns={columns} dataSource={dataSource} rowKey="name" />
    );
  }
};

export default EditTable;