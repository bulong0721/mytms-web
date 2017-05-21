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
      const data = yield call(post, url, { tableName });
      console.log(data);
      if (data) {
        console.log('showModal', data);
        yield put({ type: 'showModal', action: 'importFields', fields: data.list });
      }
    },
    *nestedTabs({ }, { call, put }) {
      const url = 'http://localhost:8080/tab/listTabs';
      const data = yield call(post, url, {});
      console.log(data);
      if (data) {
        console.log('showModal', data);
        yield put({ type: 'showModal', action: 'nestedTabs', tabs: data.list });
      }
    },
    *saveSchema({ tabCtx, tabCtx: { targetSchema } }, { call, put }) {
      const url = 'http://localhost:8080/tab/saveSchema';
      console.log('schema', targetSchema);
      const data = yield call(post, url, targetSchema);
      if (data) {
        tabCtx.updateSchema(data);
        notification.info({
          message: '保存成功',
          description: `Tab配置保存成功`,
          duration: 3,
        });
      }
    },
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

    goNext(state, action) {
      const { tabCtx } = state;
      tabCtx.goNext(action);
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

    loadSchema(state, action) {
      const { tabCtx } = state;
      tabCtx.loadSchema(action);
      return { ...state };
    }
  }
}