import { Table, Input, Popconfirm, Radio, Switch, Select, InputNumber, DatePicker, Cascader } from 'antd';

const RadioGroup = Radio.Group;
const Option = Select.Option;

class EditableCell extends React.Component {
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

  generateEditor(column, value, onChange) {
    const { key, dataIndex, $field: { showType }, $editor: { fieldProps, options } } = column;
    switch (showType) {
      case 'radio':
        return <RadioGroup>{options}</RadioGroup>;
      case 'number':
        return <InputNumber {...fieldProps} onChange={onChange} />;
      case 'datetime':
        return <DatePicker {...fieldProps} onChange={onChange} />
      case 'switch':
        return <Switch {...fieldProps} onChange={onChange} />
      case 'select':
        return <Select {...fieldProps} onChange={onChange}>{options}</Select>
      case 'cascader':
        return <Cascader {...fieldProps} onChange={onChange} />
      default:
        return <Input {...fieldProps} onChange={(e) => this.handleChange(e.target.value)} />
    }
  }

  render() {
    const { value, editable, onChange, render, column } = this.state;
    return (
      <div>
        {editable ?
          <div>
            {this.generateEditor(column, value, this.handleChange)}
            {/*<Input value={value} onChange={e => this.handleChange(e)} />*/}
          </div>
          : <span>{value}</span>
        }
      </div>
    );
  }
}

export default EditableCell;