import { query, save, remove } from '../services/manager';
import { Modal, notification } from 'antd';
import { MgrCtx } from './context';

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
    *save({ tableName, payload, mgrCtx: { formData } }, { call, put }) {
      const success = yield call(save, tableName, { ...formData, ...payload });
      if (success) {
        notification.success({
          message: '保存成功',
          description: `表数据:${tableName}保存成功`,
          duration: 3,
        })
        yield put({ type: 'goList', tableName });
      }
    },
    *delete({ tableName, selectedRowKeys }, { call, put }) {
      const success = yield call(remove, tableName, selectedRowKeys);
      if (success) {
        notification.success({
          message: '保存删除',
          description: `表数据:${tableName}保存删除`,
          duration: 3,
        })
      };
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

    removeNestedAt(state, { tableName, subField, index }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.removeNestedAt(subField);
      return { ...state };
    },
    activeNestedTab(state, { tableName, subField }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.activeNestedTab(subField);
      return { ...state };
    },
    activeGroupTab(state, { tableName, group }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.activeGroupTab(group);
      return { ...state };
    },
  }
}