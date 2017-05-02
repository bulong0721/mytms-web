export default {
  namespace: 'dashboard',
  state: {
    alerts: [
      { icon: 'exclamation-circle-o', color: '#f8c82e', title: '普通告警', number: 10, },
      { icon: 'close-circle-o', color: '#f69899', title: '严重告警', number: 15, },
    ],
    devices: [
      { icon: 'hdd', color: '#d897eb', title: '设备总数', number: 102, },
      { icon: 'exception', color: '#f69899', title: '告警设备', number: 27, },
    ],
    dataSource: [
      { host: 'vincentpc', event: 'Zabbix agent on {HOST.NAME} is unreachable for 5 minutes', time: '2017-04-21 18:23:00', durtion: '1天22小时39分', level: '一般严重' }
    ]
  },
  subscriptions: {
    setup({ dispatch }) {
    }
  },
  effects: {
    *query({ payload, }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({ type: 'queryWeather', payload: { ...data } })
    },
  },
  reducers: {
  }
}

