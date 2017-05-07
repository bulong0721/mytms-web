import { Row, Col, Card, Spin, Tag, Radio, Form, Select, Cascader, Input, Icon } from 'antd'
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

const BasicChart = ({ dispatch, chart }) => {
  const { basicOption } = chart;

  const getGraphOption = () => {
    dispatch({ type: 'chart/queryChart', url: 'http://101.95.26.138:8100/antd/graph/groupGraph?type=3', payload: {} });
  };
  // getGraphOption();
  const FormItem = Form.Item;
  const FormFilter = Form.create()(
    props => {
      const { getFieldDecorator } = props.form;
      return (
        <Form className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
          </FormItem>
        </Form>
      );
    }
  );
  function onChange2(value) {
    dispatch({ type: 'chart/test' });
    console.log('onchange');
  }
  console.log('basicOption', basicOption);

  return (
    <Spin spinning={false}>
      <Row>
        <Row style={{ marginBottom: '12px' }}>
          <Col span={18}>
            <FormFilter />
          </Col>
          <Col span={6} style={{ textAlign: 'right' }}>
            <Radio.Group onChange={onChange2} defaultValue="1">
              <Radio.Button value="1">15分钟</Radio.Button>
              <Radio.Button value="2">1小时</Radio.Button>
              <Radio.Button value="3">6小时</Radio.Button>
              <Radio.Button value="4">1天</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Card title="自定义图表" bordered={true} bodyStyle={{ padding: '8px' }}>
            {/*<ReactEcharts option={basicOption} notMerge={false} lazyUpdate={true} />*/}
          </Card>
        </Col>
      </Row>
    </Spin>
  );
}

function mapStateToProps(state) {
  const { chart, loading } = state;
  return {
    chart,
    loading: loading.models.chart
  };
}

export default connect(mapStateToProps)(BasicChart);