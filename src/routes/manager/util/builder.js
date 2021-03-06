import React from 'react';
import { Tabs, Form, BackTop, Input, Row, Col, DatePicker, Switch, Select, Icon, Radio, Collapse, Table, InputNumber, Checkbox, Cascader, Button, Upload, AutoComplete, notification } from 'antd';
import moment from 'moment';
import Renders from './renders';
import DialogEditTable from '../../../components/extension/dialogEditTable';
import F7Picker from '../../../components/widget/f7Picker';

const schemaMap = new Map();
const formMap = new Map();

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const Builder = {

  getLocalSchema(tableName) {
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
    return schema;
  },

  buildQueryHeader(filterFields, container) {
    const { handleQuery } = container;
    return Form.create()(
      props => {
        const { getFieldDecorator } = props.form;
        const children = filterFields.map(field => field(getFieldDecorator));
        const handleReset = () => props.form.resetFields();
        return (
          <Form>
            <Row gutter={12}>
              {children}
              <Col span={6} style={{ textAlign: 'right' }}>
                <Button.Group>
                  <Button type="primary" onClick={handleQuery.bind(container)}><Icon type="search" />查询</Button>
                  <Button onClick={handleReset}><Icon type="cross" />清除</Button>
                </Button.Group>
              </Col>
            </Row>
          </Form>
        );
      }
    );
  },

  buildQueryForm(filterFields, container) {
    const { handleQuery } = container;
    return Form.create()(
      props => {
        const { getFieldDecorator } = props.form;
        const children = filterFields.map(field => field(getFieldDecorator));
        const handleReset = () => props.form.resetFields();
        return (
          <Form>
            <Row gutter={12}>
              {children}
            </Row>
            <Row>
              <Col span={12} offset={12} style={{ textAlign: 'right' }}>
                <Button.Group>
                  <Button type="primary" onClick={handleQuery}><Icon type="search" />查询</Button>
                  <Button onClick={handleReset}><Icon type="cross" />清除</Button>
                </Button.Group>
              </Col>
            </Row>
          </Form>
        );
      }
    );
  },

  buildEditorForm(editorFields) {
    return Form.create({
      onFieldsChange: (props, fields) => console.log('onFieldsChange', fields),
      onValuesChange: (props, values) => console.log('onValuesChange', values),
    })(
      props => {
        const { getFieldDecorator } = props.form;
        const children = editorFields.map(field => field(getFieldDecorator));
        return (
          <Form layout="horizontal" className="ant-advanced-search-edit">
            <Row>
              {children}
            </Row>
          </Form>
        );
      }
    );
  },

  parseByTable(tableName, context, component) {
    const schema = context.tableSchema || this.getLocalSchema(tableName);
    context.tableSchema = schema;
    return this.parseBySchema(schema, context, component);
  },

  build4Table(table, context, component) {
    let columns = [];
    let filters = [];
    let editors = [];
    let primary = null;
    const { key, fields, useGroupTab } = table;
    const groupMap = new Map();
    fields.forEach((field) => {
      this.generateElement(table, field, columns, filters, editors);
      if ('ID' === field.showType) {
        primary = field;
      }
      if (field.group && !field.notAsEditor) {
        const groupEditors = groupMap.get(field.group) || [];
        groupEditors.push(editors.slice(-1)[0]);
        groupMap.set(field.group, groupEditors);
      }
    });
    const groupEditors = [];
    groupMap.forEach((subEditors, title) => {
      groupEditors.push(this.buildCollapse(title, subEditors));
    });
    if (groupEditors.length > 0) {
      editors = this.buildGroupEditor(groupMap, useGroupTab, context, component);
    }
    Renders.bindRender(key, columns, { ...component, primary });
    return { table, primary, columns, filters, editors, groupMap };
  },

  buildGroupEditor(groupMap, useGroupTab, context, component) {
    const groupEditors = [];
    if (groupMap.size > 1 && useGroupTab) {
      const tabEditor = getFieldDecorator => {
        const children = [];
        groupMap.forEach((subEditors, title) => {
          children.push(
            <Tabs.TabPane tab={title} key={title} style={{ padding: '12px', backgroundColor: '#fff' }}>
              {subEditors.map(subEditor => subEditor(getFieldDecorator))}
            </Tabs.TabPane>
          );
        });
        return <Tabs key="groups">
          {children}
        </Tabs>
      };
      groupEditors.push(tabEditor);
    } else {
      groupMap.forEach((subEditors, title) => {
        const collapse = getFieldDecorator => (
          <Collapse defaultActiveKey={title} key={title}>
            <Collapse.Panel header={title} key={title} className="collapse-space">
              {subEditors.map(subEditor => subEditor(getFieldDecorator))}
            </Collapse.Panel>
          </Collapse>
        );
        groupEditors.push(collapse);
      });
    }
    return groupEditors;
  },

  buildNestedEditor(nesteds, context, component) {
    const buildNestedTable = (nested) => {
      const { table: { key, title, disableNew, disableEdit, disableRemove }, primary, columns, filters, editors } = nested;
      const dataSource = context.getNestedSource(key);
      const tableProps = {
        parentKey: key, dataSource, columns, primary, editors,
        disableNew, disableEdit, disableRemove
      };
      return <DialogEditTable bordered {...tableProps} />;
    };
    return getFieldDecorator => (
      <Tabs type="card" className="ant-layout-tab" key="nesteds">
        {nesteds.map(nested => {
          const { table: { key, title } } = nested;
          return (
            <Tabs.TabPane tab={title} key={key}>
              {buildNestedTable(nested)}
            </Tabs.TabPane>
          );
        })
        }
      </Tabs>
    );
  },

  parseBySchema(schema, context, component) {
    const { handlePageAction, handleRowAction } = component;
    const { selectedRowKeys, nestedFields } = context;
    const { nesteds, nestedIndex } = schema;
    let mainTable = this.build4Table(schema, context, component);
    const { editors } = mainTable;
    if (nesteds) {
      const nestedTabs = nesteds.map(table => {
        nestedFields.add(table.key);
        return this.build4Table(table, context, component);
      });
      editors.splice(nestedIndex || editors.length, 0, this.buildNestedEditor(nestedTabs, context, component));
    }
    const actions = schema.actions.map((action, index) => {
      const { icon, title, type, target } = action;
      let disabled = false;
      if ('rows' === target) {
        disabled = selectedRowKeys.length <= 0;
      } else if ('row' === target) {
        disabled = selectedRowKeys.length != 1;
      }
      return (
        <Button type={type} disabled={disabled} onClick={handlePageAction(action)} key={index}>
          <Icon type={icon} />{title}
        </Button>
      );
    });
    context.setPrimaryKey(mainTable.primary);
    return {
      schema, actions, ...mainTable
    };
  },

  generateElement(table, field, columns, filters, editors) {
    let filterField, editorField;
    switch (field.showType) {
      case 'radio':
        filterField = this.buildRadio(table, field, 'filter');
        editorField = this.buildRadio(table, field, 'editor');
        break;
      case 'checkbox':
        filterField = this.buildCheckbox(table, field, 'filter');
        editorField = this.buildCheckbox(table, field, 'editor');
        break;
      case 'number':
        filterField = this.buildNumber(table, field, 'filter');
        editorField = this.buildNumber(table, field, 'editor');
        break;
      case 'datetime':
        filterField = this.buildDatetime(table, field, 'filter');
        editorField = this.buildDatetime(table, field, 'editor');
        break;
      case 'switch':
        filterField = this.buildSwitch(table, field, 'filter');
        editorField = this.buildSwitch(table, field, 'editor');
        break;
      case 'select':
        filterField = this.buildSelect(table, field, 'filter');
        editorField = this.buildSelect(table, field, 'editor');
        break;
      case 'cascader':
        filterField = this.buildCascader(table, field, 'filter');
        editorField = this.buildCascader(table, field, 'editor');
        break;
      case 'placeholder':
        filterField = this.buildPlaceholder(table, field, 'filter');
        editorField = this.buildPlaceholder(table, field, 'editor');
        field.notAsColumn = true;
        break;
      case 'isolation':
        filterField = this.buildIsolation(table, field, 'filter');
        editorField = this.buildIsolation(table, field, 'editor');
        field.notAsColumn = true;
        break;
      case 'image':
        filterField = this.buildImage(table, field, 'filter');
        editorField = this.buildImage(table, field, 'editor');
        field.notAsFilter = true;
        break;
      case 'f7Picker':
        filterField = this.buildF7Picker(table, field, 'filter');
        editorField = this.buildF7Picker(table, field, 'editor');
        break;
      case 'actions':
        field.notAsFilter = true;
        field.notAsEditor = true;
        break;
      default:
        filterField = this.buildInput(table, field, 'filter');
        editorField = this.buildInput(table, field, 'editor');
        break;
    }
    if (!field.notAsFilter && field.showType != 'collapse') {
      filters.push(filterField.wrapper);
    }
    if (!field.notAsEditor) {
      editors.push(editorField.wrapper);
    }
    if (!field.notAsColumn) {
      const column = {};
      column.key = field.key;
      column.dataIndex = field.key;
      column.title = field.columnTitle || field.title;
      column.width = field.width;
      column.sorter = field.sorter;
      column.$render = field.render;
      column.$field = field;
      if (editorField) {
        column.$editor = editorField;
      }
      columns.push(column);
    }
  },

  buildCollapse(title, subEditors) {
    return getFieldDecorator => {
      const children = subEditors.map(subEditor => subEditor(getFieldDecorator));
      return (
        <Collapse defaultActiveKey={'1'} key={title}>
          <Collapse.Panel header={title} key='1' className="collapse-space">
            {children}
          </Collapse.Panel>
        </Collapse>
      );
    };
  },

  colWrapper(formItem, table, field, useFor) {
    const forFilter = useFor === 'filter';
    const { filterSpan, editorSpan } = table;
    const fieldSpan = forFilter ? filterSpan || 6 : editorSpan || 12;
    const { key, title, layout } = field;
    let colSpan = fieldSpan;
    let labelSpan = 8;
    let wrapperSpan = 16;
    if (layout) {
      colSpan = layout.colSpan;
      labelSpan = layout.labelSpan;
      wrapperSpan = layout.wrapperSpan;
    }
    return getFieldDecorator => (
      <Col key={key} span={colSpan}>
        <FormItem key={key} label={title} labelCol={{ span: labelSpan }} wrapperCol={{ span: wrapperSpan }}>
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
      ...options
    };
  },

  cloneFieldDef(field) {
    const option = Object.assign({}, field);
    delete option.notAsFilter;
    delete option.notAsColumn;
    delete option.notAsEditor;
    delete option.disabled;
    delete option.defaultValue;
    return option;
  },

  buildRadio(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const options = field.options.map((option) =>
      <Radio disabled={fieldOpts.disabled} key={option.key} value={option.key}>{option.value}</Radio>
    );
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <RadioGroup>{options}</RadioGroup>
    ), table, field, useFor);
    return { fieldProps: fieldOpts, wrapper, options };
  },

  buildNumber(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <InputNumber {...fieldOpts} />
    ), table, field, useFor);
    return { fieldProps: fieldOpts, wrapper };
  },

  buildF7Picker(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <F7Picker { ...fieldOpts } />
    ), table, field, useFor);
    return { fieldProps: fieldOpts, wrapper };
  },

  buildImage(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <Upload action='//jsonplaceholder.typicode.com/posts/' listType='picture'>
        <Button type='dashed'><Icon type="upload" />添加图片</Button><span style={{ marginLeft: '12px' }}>图片大小不超过3M，最多1张，支持JPG，JPEG，PNG，BMP格式</span>
      </Upload>
    ), table, field, useFor);
    return { fieldProps: fieldOpts, wrapper };
  },

  buildPlaceholder(table, field, useFor) {
    const wrapper = this.colWrapper(getFieldDecorator => <span key={field.key}>&nbsp;</span>, table, field, useFor);
    return { fieldProps: {}, wrapper };
  },

  buildIsolation(table, field, useFor) {
    field.layout = { colSpan: 24, labelSpan: 0, wrapperSpan: 24 };
    const wrapper = this.colWrapper(getFieldDecorator => <Row className="field-isolation-stript" key={field.key}><h3>{field.title}</h3></Row>, table, field, useFor);
    return { fieldProps: {}, wrapper };
  },

  buildDatetime(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts ? moment(field.defaultValue) : null })(
      <DatePicker {...fieldOpts} />
    ), table, field, useFor);
    return { fieldProps: fieldOpts, wrapper };
  },

  buildSwitch(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const fieldProps = { onChange: fieldOpts.onChange, checkedChildren: fieldOpts.checkedChildren, unCheckedChildren: fieldOpts.unCheckedChildren };
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts, valuePropName: 'checked' })(
      <Switch {...fieldProps} />
    ), table, field, useFor);
    return { fieldProps, wrapper };
  },

  buildCheckbox(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const options = (field.options || []).map(({ key, value }) => {
      return { label: key, value }
    });
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <Checkbox.Group options={options} />
    ), table, field, useFor);
    return { fieldProps: fieldOpts, wrapper, options };
  },

  buildSelect(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const options = (field.options || []).map((option) =>
      <Option disabled={fieldOpts.disabled} key={option.key}>{option.value}</Option>
    );
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <Select allowClear={true} {...fieldOpts}>{options}</Select>
    ), table, field, useFor);
    return { fieldProps: fieldOpts, wrapper, options };
  },

  buildCascader(table, field, useFor) {
    const fieldOpts = this.getOptions(useFor, field);
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...fieldOpts })(
      <Cascader {...fieldOpts} />
    ), table, field, useFor);
    return { fieldProps: fieldOpts, wrapper };
  },

  buildInput(table, field, useFor) {
    const options = this.getOptions(useFor, field);
    const fieldProps = { disabled: options.disabled, type: options.type, size: options.size, addonBefore: options.addonBefore, addonAfter: options.addonAfter, prefix: options.prefix, suffix: options.suffix, onPressEnter: options.onPressEnter, autosize: options.autosize };
    const wrapper = this.colWrapper(getFieldDecorator => getFieldDecorator(field.key, { ...options })(
      <Input {...fieldProps} />
    ), table, field, useFor);
    return { fieldProps, wrapper };
  }
};

export default Builder;