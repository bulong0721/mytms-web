import { Row, Col, Card, Spin, Tag, Radio, Form, Select } from 'antd'
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

const BasicChart = ({ dispatch, dashboard }) => {
  const { alerts, devices, dataSource } = dashboard

  const onChange = (e) => {

  };

  const option1 = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: '直达', selected: true },
          { value: 679, name: '营销广告' },
          { value: 1548, name: '搜索引擎' }
        ]
      },
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [
          { value: 335, name: '直达' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1048, name: '百度' },
          { value: 251, name: '谷歌' },
          { value: 147, name: '必应' },
          { value: 102, name: '其他' }
        ]
      }
    ]
  };

  const FormItem = Form.Item;
  const FormFilter = Form.create()(
    props => {
      const { getFieldDecorator } = props.form;
      return (
        <Form layout="inline">
          <FormItem label="主机组" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            {getFieldDecorator('hostGroup', {})(
              <Select placeholder="请选择主机组" style={{ width: 120, marginRight: '12px' }}>
                <Select.Option value="web01">web01</Select.Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="主机" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            {getFieldDecorator('host', {})(
              <Select placeholder="请选择主机" style={{ width: 100, marginRight: '12px' }}>
                <Select.Option value="web01">web01</Select.Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="图表" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            {getFieldDecorator('chart', {})(
              <Select placeholder="请选择图表" style={{ width: 100, marginRight: '12px' }}>
                <Select.Option value="web01">web01</Select.Option>
              </Select>
            )}
          </FormItem>
        </Form>
      );
    }
  );
  return (
    <Spin spinning={false}>
      <Row>
        <Row style={{ marginBottom: '12px' }}>
          <Col span={18}>
            <FormFilter />
          </Col>
          <Col span={6} style={{ textAlign: 'right' }}>
            <Radio.Group onChange={onChange} defaultValue="1">
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
            <ReactEcharts option={option1} notMerge={true} lazyUpdate={true} />
          </Card>
        </Col>
      </Row>
    </Spin>
  );
}

function mapStateToProps({ dashboard }) {
  return {
    dashboard
  };
}

export default connect(mapStateToProps)(BasicChart);