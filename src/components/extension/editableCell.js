import { Table, Input, Popconfirm } from 'antd';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: this.props.editable || false,
    handleChange: this.props.handleChange,
    render: this.props.render,
    editor: this.props.editor
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

  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  render() {
    const { value, editable, handleChange, render } = this.state;
    return (
      <div>
        {editable ?
          <Input value={value} onChange={e => this.handleChange(e)} />
          : <span>{value}</span>
        }
      </div>
    );
  }
}

export default EditableCell;