import React from 'react';
import { Form, Input, Row, Col, DatePicker, Switch, Select, Icon, Radio, Collapse, Table, InputNumber, Checkbox, Cascader, Button, notification } from 'antd';
import moment from 'moment';
import Renders from './renders';

const schemaMap = new Map();
const formMap = new Map();

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const Builder = {

  getLocalSchema(tableName) {
    const ignoreCache = this.shouldIgnoreSchemaCache(tableName);
    let schema = {};
    try {
      schema = require(`../../../schema/${tableName}.schema.js`);
      schema.tableName = tableName;
    } catch (e) {
      notification.error({
        message: '出错啦!',
        description: `加载页面配置错误：${tableName}.schema.js`,
      });
    }
    if (!ignoreCache) {
      schemaMap.set(tableName, schema);
    }
    return schema;
  },

  shouldIgnoreSchemaCache(tableName) {
    return true;
  },

  buildQueryForm(filterFields, container) {
    const { handleQuery, handleToggle, expand } = container;
    return Form.create()(
      props => {
        const { getFieldDecorator } = props.form;
        const children = filterFields.map(field => field(getFieldDecorator));
        const count = expand ? 100 : 8;
        const handleReset = () => props.form.resetFields();
        return (
          <Form>
            <Row gutter={18}>
              {children.slice(0, count)}
            </Row>
            <Row>
              <Col span={12} offset={12} style={{ textAlign: 'right' }}>
                <Button.Group>
                  <Button type="primary" onClick={handleQuery}><Icon type="search" />查询</Button>
                  <Button onClick={handleReset}><Icon type="cross" />清除</Button>
                  <Button onClick={handleToggle}>{expand ? '精简' : '更多'}<Icon type={expand ? 'up' : 'down'} /></Button>
                </Button.Group>
              </Col>
            </Row>
          </Form>
        );
      }
    );
  },

  buildEditorForm(editorFields) {
    return Form.create()(
      props => {
        const { getFieldDecorator } = props.form;
        const children = editorFields.map(field => field(getFieldDecorator));
        return (
          <Form layout="horizontal" className="ant-advanced-search-edit">
            {children}
          </Form>
        );
      }
    );
  },

  parseByTable(tableName, component) {
    const schema = this.getLocalSchema(tableName);
    const result = this.parseBySchema(schema, component);
    const { primary, columns, filters, editors, actions } = result;
    Renders.bindRender(tableName, columns, { ...component, primary, schema });
    return result;
  },

  parseBySchema(schema, component) {
    const { handlePageAction, handleRowAction, selectedRowKeys, subDataSource } = component;
    const { tableName } = schema;
    let columns = [];
    let filters = [];
    let editors = [];
    let actions = [];
    let primary = null;
    let subPrimary = null;
    let subColumns = [];
    schema.fields.forEach((field) => {
      this.generateElement(field, columns, filters, editors);
      if ('ID' === field.showType) {
        primary = field;
      }
      if (field.child) {
        const subEditors = [];
        field.child.forEach((subField) => {
          this.generateElement(subField, columns, filters, subEditors);
        });
        editors.push(this.buildCollapse(field, subEditors));
      }
    });
    if (schema.subTable) {
      const subFields = schema.subTable.child;
      subFields.forEach((subField) => {
        if ('ID' === subField.showType) {
          subPrimary = subField;
        }
        this.generateElement(subField, subColumns, [], []);
      });
      Renders.bindRender(`${tableName}_${schema.subTable.key}`, subColumns, { ...component, subPrimary, schema });
      editors.push(this.buildSubTable(schema.subTable, subPrimary, subColumns, subDataSource));
    }
    actions = schema.actions.map((action, index) => {
      action.$schema = schema;
      const { icon, title, type, target } = action;
      const disabled = 'rows' === target ? selectedRowKeys.length <= 0 : false;
      return (
        <Button type={type} disabled={disabled} onClick={handlePageAction(action)} key={index}>
          <Icon type={icon} />{title}
        </Button>
      );
    });
    return {
      schema,
      primary,
      columns,
      filters,
      editors,
      actions,
      subPrimary,
      subColumns,
    };
  },

  buildSubTable(field, primary, columns, dataSource) {
    return getFieldDecorator => (
      <Collapse defaultActiveKey={field.activeKey || '1'} key={field.title}>
        <Collapse.Panel header={field.title} key="1" className="collapse-space-table">
          <Table rowKey="id" bordered dataSource={dataSource} pagination={false} columns={columns} />
        </Collapse.Panel>
      </Collapse>
    );
  },

  generateElement(field, columns, filters, editors) {
    let filterField, editorField;
    switch (field.showType) {
      case 'radio':
        filterField = this.buildRadio(field, 'filter');
        editorField = this.buildRadio(field, 'editor');
        break;
      case 'number':
        filterField = this.buildNumber(field, 'filter');
        editorField = this.buildNumber(field, 'editor');
        break;
      case 'datetime':
        filterField = this.buildDatetime(field, 'filter');
        editorField = this.buildDatetime(field, 'editor');
        break;
      case 'switch':
        filterField = this.buildSwitch(field, 'filter');
        editorField = this.buildSwitch(field, 'editor');
        break;
      case 'select':
        filterField = this.buildSelect(field, 'filter');
        editorField = this.buildSelect(field, 'editor');
        break;
      case 'cascader':
        filterField = this.buildCascader(field, 'filter');
        editorField = this.buildCascader(field, 'editor');
        break;
      case 'placeholder':
        filterField = this.buildPlaceholder(field, 'filter');
        editorField = this.buildPlaceholder(field, 'editor');
        field.notAsColumn = true;
        break;
      case 'actions':
        field.notAsFilter = true;
        field.notAsEditor = true;
        break;
      case 'collapse':
        return;
      default:
        filterField = this.buildInput(field, 'filter');
        editorField = this.buildInput(field, 'editor');
        break;
    }
    if (!field.notAsFilter && field.showType != 'collapse') {
      filters.push(filterField);
    }
    if (!field.notAsEditor) {
      editors.push(editorField);
    }
    if (!field.notAsColumn) {
      const column = {};
      column.key = field.key;
      column.dataIndex = field.key;
      column.title = field.columnTitle || field.title;
      column.width = field.width;
      column.sorter = field.sorter;
      column.$field = field;
      column.$editor = editorField;
      columns.push(column);
    }
  },

  buildCollapse(field, subEditors) {
    return getFieldDecorator => {
      const children = subEditors.map(subEditor => subEditor(getFieldDecorator));
      return (
        <Collapse defaultActiveKey={field.activeKey || '1'} key={field.title}>
          <Collapse.Panel header={field.title} key="1" className="collapse-space">
            {children}
          </Collapse.Panel>
        </Collapse>
      );
    };
  },

  colWrapper(formItem, field, useFor) {
    const forFilter = useFor === 'filter';
    return getFieldDecorator => (
      <Col key={field.key} span={forFilter ? 6 : 12}>
        <FormItem key={field.key} label={field.title} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          {formItem(getFieldDecorator)}
        </FormItem>
      </Col>
    );
  },

  getOptions(useFor, field) {
    const forFilter = useFor === 'filter';
    const options = this.cloneFieldDef(field);
    return {
      initialValue: field.defaultValue,
      disabled: forFilter ? undefined : field.disabled,
      rules: forFilter ? undefined : field.validator,
      options
    };
  },

  cloneFieldDef(field) {
    const option = Object.assign({}, field);
    delete option.defaultValue;
    delete option.notAsFilter;
    delete option.notAsColumn;
    delete option.notAsEditor;
    delete option.disabled;
    return option;
  },

  buildRadio(field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const options = field.options.map((option) =>
      <Radio disabled={fieldOpts.disabled} key={option.key} value={option.key}>{option.value}</Radio>
    );

    return this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <RadioGroup>{options}</RadioGroup>
    ), field, useFor);
  },

  buildNumber(field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    return this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <InputNumber disabled={fieldOpts.disabled} {...fieldOpts.options} />
    ), field, useFor);
  },

  buildPlaceholder(field, useFor) {
    return this.colWrapper(getFieldDecorator => <span key={field.key}>&nbsp;</span>, field, useFor);
  },

  buildDatetime(field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    return this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts ? moment(field.defaultValue) : null })(
      <DatePicker disabled={fieldOpts.disabled} {...fieldOpts.options} />
    ), field, useFor);
  },

  buildSwitch(field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const { options } = fieldOpts;
    const fieldProps = { onChange: options.onChange, checkedChildren: options.checkedChildren, unCheckedChildren: options.unCheckedChildren, size: 'small' };
    return this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <Switch disabled={fieldOpts.disabled} {...fieldProps} />
    ), field, useFor);
  },

  buildSelect(field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const options = field.options.map((option) =>
      <Option disabled={fieldOpts.disabled} key={option.key} value={option.key}>{option.value}</Option>
    );
    return this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <Select disabled={fieldOpts.disabled} {...fieldOpts.options}>
        {options}
      </Select>
    ), field, useFor);
  },

  buildCascader(field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    return this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <Cascader disabled={fieldOpts.disabled} {...fieldOpts.options} />
    ), field, useFor);
  },

  buildInput(field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const { options } = fieldOpts;
    const fieldProps = { type: options.type, size: options.size, addonBefore: options.addonBefore, addonAfter: options.addonAfter, prefix: options.prefix, suffix: options.suffix, onPressEnter: options.onPressEnter, autosize: options.autosize };
    return this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <Input disabled={fieldOpts.disabled} {...fieldProps} />
    ), field, useFor);
  }
};

export default Builder;
