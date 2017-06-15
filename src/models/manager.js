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
    *query({ tableName, filter, pagination }, { call, put }) {
      const params = { ...filter, ...pagination };
      const data = yield call(query, tableName, params);
      if (data) {
        yield put({
          type: 'querySuccess', tableName, payload: data
        });
      }
    },
    *save({ tableName, payload, filter, mgrCtx: { formData, pagination } }, { call, put }) {
      const success = yield call(save, tableName, { ...formData, ...payload });
      if (success && success.status == 0) {
        notification.success({
          message: '数据保存',
          description: `表数据:${tableName}保存成功`,
          duration: 3,
        });
        yield put({ type: 'query', tableName, filter, pagination });
        yield put({ type: 'goList', tableName });
      } else if (success && success.status != 0) {
        Object.assign(formData, payload);
        notification.error({
          message: '数据保存',
          description: `数据保存失败：${success.statusMessage}`,
          duration: 3,
        })
      }
    },
    *delete({ tableName, filter, pagination, selectedRowKeys, record, primaryKey }, { call, put }) {
      const deleteKeys = selectedRowKeys || [record[primaryKey.key]];
      const success = yield call(remove, tableName, deleteKeys);
      if (success && success.status == 0) {
        if (selectedRowKeys) selectedRowKeys.length = 0;
        yield put({ type: 'query', tableName, filter, pagination });
        notification.success({
          message: '数据删除',
          description: `表数据:${tableName}保存删除`,
          duration: 3,
        });
      } else if (success && success.status != 0) {
        notification.error({
          message: '数据删除',
          description: `数据删除失败：${success.statusMessage}`,
          duration: 3,
        });
      }
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
    
    clear(state, { tableName }) {
      const mgrCtx = getMgrCtx(state, tableName);
      mgrCtx.clear();
      return { ...state, tableName };
    },

    store(state, { tableName, ...payload }) {
      const mgrCtx = getMgrCtx(state, tableName);
      Object.assign(mgrCtx, payload);
      return { ...state, tableName };
    },
  }
}