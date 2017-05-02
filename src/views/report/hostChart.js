import { Row, Col, Card, Spin, Tag, Radio, Select } from 'antd'
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

const HostChart = ({ dispatch, dashboard }) => {
  const { alerts, devices, dataSource } = dashboard

  const onChange = (e) => {

  };

  const option = {
    title: {
      text: '动态数据',
      subtext: '纯属虚构'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    legend: {
      data: ['最新成交价', '预购队列']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: (function () {
          var now = new Date();
          var res = [];
          var len = 10;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            now = new Date(now - 2000);
          }
          return res;
        })()
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (function () {
          var res = [];
          var len = 10;
          while (len--) {
            res.push(len + 1);
          }
          return res;
        })()
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: '价格',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: '预购量',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: '预购队列',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: (function () {
          var res = [];
          var len = 10;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name: '最新成交价',
        type: 'line',
        data: (function () {
          var res = [];
          var len = 0;
          while (len < 10) {
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })()
      }
    ]
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
  const option2 = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ]
      }
    ]
  };
  return (
    <Spin spinning={false}>
      <Row style={{ marginBottom: '12px' }}>
        <Col span={12}>
          <Select showSearch style={{ width: 200 }} placeholder="请选择主机">
            <Select.Option value="web01">web01</Select.Option>
            <Select.Option value="web02">web02</Select.Option>
            <Select.Option value="web03">web03</Select.Option>
          </Select>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Radio.Group onChange={onChange} defaultValue="1">
            <Radio.Button value="1">15分钟</Radio.Button>
            <Radio.Button value="2">1小时</Radio.Button>
            <Radio.Button value="3">6小时</Radio.Button>
            <Radio.Button value="4">1天</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6}>
          <Card title="CPU使用率" bordered={true} bodyStyle={{ padding: '8px' }}>
            <ReactEcharts option={option2} notMerge={true} lazyUpdate={true} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="内存使用率" bordered={true} bodyStyle={{ padding: '8px' }}>
            <ReactEcharts option={option2} notMerge={true} lazyUpdate={true} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="磁盘使用率" bordered={true} bodyStyle={{ padding: '8px' }}>
            <ReactEcharts option={option2} notMerge={true} lazyUpdate={true} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="带宽使用" bordered={true} bodyStyle={{ padding: '8px' }}>
            <ReactEcharts option={option2} notMerge={true} lazyUpdate={true} />
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Card title="CPU使用状况" bordered={true} bodyStyle={{ padding: '8px' }}>
            <ReactEcharts option={option} notMerge={true} lazyUpdate={true} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="网络流量图" bordered={true} bodyStyle={{ padding: '8px' }}>
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

export default connect(mapStateToProps)(HostChart);