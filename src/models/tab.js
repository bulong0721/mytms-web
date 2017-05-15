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
    *importFields({ key, title }, { call, put }) {

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

    handleModalOk(state) {
      const { tabCtx } = state;
      tabCtx.handleModalOk();
      return { ...state };
    },

    showModal(state, { action }) {
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
  }
}