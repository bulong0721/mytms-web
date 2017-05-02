import React, { PropTypes } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.less';
import config from '../../config';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onOk(values)
      }
    });
  }

  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    const { loginButtonLoading } = this.props;
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logoSrc} height="50" />
          <span>{config.name}</span>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: '请填写用户名!'
              }],
            })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: '请填写密码!'
              }],
            })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住我</Checkbox>)}
            <a className={styles.forgot}>忘记密码</a>
            <Button type="primary" htmlType="submit" loading={loginButtonLoading}>
              登 录
          </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func,
}

export default Form.create()(Login);