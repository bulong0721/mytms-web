import React, { PropTypes } from 'react';
import { Row, Col, Card, Spin, Table, Tag } from 'antd'
import { connect } from 'dva';
import { NumberCard } from '../../components/widget';
import styles from './index.less';

const Dashboard = ({ dispatch, dashboard }) => {
  const { alerts, devices, dataSource } = dashboard
  const alertCards = alerts.map((item, key) =>
    <Col key={key} lg={6} md={12}>
      <NumberCard {...item} />
    </Col>
  )

  const deviceCards = devices.map((item, key) =>
    <Col key={key} lg={6} md={12}>
      <NumberCard {...item} />
    </Col>
  )

  const columns = [
    { title: '主机名', dataIndex: 'host', key: 'host' },
    { title: '告警事件', dataIndex: 'event', key: 'event' },
    { title: '发生时间', dataIndex: 'time', key: 'time' },
    { title: '持续时间', dataIndex: 'durtion', key: 'durtion' },
    { title: '告警等级', dataIndex: 'level', key: 'level', render: (text) => <Tag color="orange">{text}</Tag> },
  ];

  return (
    <Spin spinning={false}>
      <Row gutter={24}>
        {alertCards}
        {deviceCards}
      </Row>
      <Row gutter={24}>
        <Col span={18}>
          <Card title="最近20条告警" bordered={true} bodyStyle={{ padding: 0 }}>
            <Table bordered dataSource={dataSource} columns={columns} pagination={false} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="收藏图形" bordered={true} bodyStyle={{ padding: 0 }}>

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

export default connect(mapStateToProps)(Dashboard);