import React, { Component } from 'react';

class FormItemWrapper extends React.Component {
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({ value: nextProps.value });
    }
  }

  state = {
    value: null,
  }

  handleChange = (value) => {
    this.props.onChange(value);
    this.setState({ value });
  }

  render() {
    const { children, ...itemProps } = this.props;
    const { value } = this.state;
    const FormItem = children;
    return (
      <FormItem value {...itemProps} onChange={handleChange} />
    );
  }
}

export default FormItemWrapper;