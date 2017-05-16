import { post, get } from '../services/http';
import { Modal, notification } from 'antd';
import { MgrCtx, TabCtx } from './context';

export default {
  namespace: 'tab',

  state: {
    tabCtx: new TabCtx()
  },

  subscriptions: {
  },

  effects: {
    *importFields({ tableName }, { call, put }) {
      const url = 'http://localhost:8080/tab/listFieldsByTable';
      const data = yield call(post, url, tableName);
      if (data) {
        yield put({ type: 'showModal', action: 'importFields', fields: data.list });
      }
    }
  },

  reducers: {
    querySuccess(state, { tableName, payload }) {
      const { tabCtx } = state;
      tabCtx.importFields(payload);
      return { ...state };
    },

    hideModal(state) {
      const { tabCtx } = state;
      tabCtx.hideModal();
      return { ...state };
    },

    handleModalOk(state, action) {
      const { tabCtx } = state;
      tabCtx.handleModalOK(action);
      return { ...state };
    },

    showModal(state, action) {
      const { tabCtx } = state;
      tabCtx.showModal(action);
      return { ...state };
    },

    goNext(state) {
      const { tabCtx } = state;
      tabCtx.goNext();
      return { ...state };
    },

    goPrivous(state) {
      const { tabCtx } = state;
      tabCtx.goPrivous();
      return { ...state };
    },

    transferChange(state, { targetKeys }) {
      const { tabCtx } = state;
      tabCtx.transferChange(targetKeys);
      return { ...state };
    },
  }
}