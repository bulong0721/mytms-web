import { query, save } from '../services/manager';
import { Modal, notification } from 'antd';
import MgrCtx from './mgrCtx';

const getMgrCtx = (state, tableName) => {
  state.tableName = tableName;
  const { propMap } = state;
  let mgrCtx = propMap.get(tableName);
  if (!mgrCtx) {
    mgrCtx = new MgrCtx();
    propMap.set(tableName, mgrCtx);
  }
  return mgrCtx;
};

export default {
  namespace: 'manager',

  state: {
    tableName: null,
    propMap: new Map()
  },

  subscriptions: {
  },

  effects: {
    *query({ tableName, payload, pagination }, { call, put }) {
      const params = { ...payload, ...pagination };
      const data = yield call(query, tableName, params);
      if (data) {
        yield put({
          type: 'querySuccess', tableName, payload: data
        });
      }
    },
    *save({ tableName, payload }, { call, put }) {
      yield put({ type: 'hideModal' });
      const success = yield call(save, tableName, payload);
    },
    *delete({ tableName, payload }, { call, put }) {
      Modal.confirm({
        title: '确定要删除记录吗?',
        content: 'xxxxx',
        onOk() {

        },
        onCancel() { },
      })
    },
    *export({ tableName, payload }, { call, put }) {
      notification.info({
        message: '数据导出',
        description: `还没有实现代码：manager/export`,
        duration: 3,
      });
    },
    *noops({ tableName, payload }, { call, put }) {
      notification.info({
        message: '没有操作',
        description: `不需要实现代码：manager/noops`,
        duration: 3,
      });
    },
  },

  reducers: {
    querySuccess(state, { tableName, payload }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.setMainSource(payload);
      return { ...state };
    },

    toggleFilter(state, { tableName }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.toggleFilter();
      return { ...state };
    },

    selectedChange(state, { tableName, payload }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.selectedChange(payload);
      return { ...state };
    },

    goEditor(state, { tableName, ...payload }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.goEditor(payload);
      return { ...state };
    },

    goList(state, { tableName, payload }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.goList(payload);
      return { ...state };
    },

    newNested(state, { tableName, subField }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.newNested(subField);
      return { ...state };
    },
  }
}