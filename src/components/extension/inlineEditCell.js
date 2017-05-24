import { Table, Input, Popconfirm, Radio, Switch, Select, InputNumber, DatePicker, Cascader } from 'antd';

const RadioGroup = Radio.Group;
const Option = Select.Option;

class InlineEditCell extends React.Component {
  state = {
    value: this.props.value,
    editable: this.props.editable || false,
    onChange: this.props.onChange,
    column: this.props.column
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editable !== this.state.editable) {
      this.setState({ editable: nextProps.editable });
      if (nextProps.editable) {
        this.cacheValue = this.state.value;
      }
    }
    if (nextProps.status) {
      if (nextProps.status === 'save') {
        this.props.onChange(this.state.value);
      } else if (nextProps.status === 'cancel') {
        this.setState({ value: this.cacheValue });
        this.props.onChange(this.cacheValue);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.editable !== this.state.editable ||
      nextState.value !== this.state.value;
  }

  handleChange(value) {
    this.setState({ value });
  }

  generateEditor(column, value) {
    const { key, dataIndex, $field: { showType }, $editor: { fieldProps, options } } = column;
    switch (showType) {
      case 'radio':
        return <RadioGroup>{options}</RadioGroup>;
      case 'number':
        return <InputNumber {...fieldProps} onChange={(value) => this.handleChange(value)} />;
      case 'datetime':
        return <DatePicker {...fieldProps} onChange={(value) => this.handleChange(value)} />
      case 'switch':
        return <Switch {...fieldProps} checked={value} onChange={(value) => this.handleChange(value)} />
      case 'select':
        return <Select {...fieldProps} onChange={(value) => this.handleChange(value)}>{options}</Select>
      case 'cascader':
        return <Cascader {...fieldProps} onChange={(value) => this.handleChange(value)} />
      default:
        return <Input {...fieldProps} value={value} onChange={(e) => this.handleChange(e.target.value)} />
    }
  }

  toText(value) {
    if (value !== undefined) {
      return value.toString();
    }
    return '';
  }

  render() {
    const { value, editable, onChange, render, column } = this.state;
    const { $render } = column;
    return (
      <div>
        {editable ?
          <div>
            {this.generateEditor(column, value)}
          </div>
          : <span>{$render ? $render(value) : this.toText(value)}</span>
        }
      </div>
    );
  }
}

export default InlineEditCell;