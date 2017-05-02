import { hashHistory } from 'react-router';

export default {
  namespace: 'monitor',
  state: {
  },
  subscriptions: {
  },
  effects: {
    *query({ payload, }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({ type: 'queryWeather', payload: { ...data } })
    },
    *toHostGroup({ payload, }, { call, put }) {
      hashHistory.push('/system/hostGroup');
    }
  },
  reducers: {
    queryWeather(state, action) {
      return {
        ...state,
      };
    },
  }
}

