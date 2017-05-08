import { query, save } from '../services/manager';
import { Modal, notification } from 'antd';

export default {
  namespace: 'manager',

  state: {
    modalVisible: false,
    modalTitle: '新增',
    modalAction: '',
    modalFormData: {},
    modalComponent: null,
    popupEditor: true,
    selectedRowKeys: [],
    dataSource: [],
    subDataSource: [],
    previewVisible: false,
    previewImages: [],
    expand: false,
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null,
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      let last = null;
      history.listen(location => {
        if (location != last) {
          dispatch({ type: 'tableChanged', });
        }
        last = location;
      });
    }
  },

  effects: {
    *query({ tableName, payload }, { call, put }) {
      const data = yield call(query, tableName, payload);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: data.list
          }
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
          console.log('OK');
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
    tableChanged(state, action) {
      return {
        modalVisible: false,
        modalTitle: '新增',
        modalAction: '',
        modalFormData: {},
        modalComponent: null,
        popupEditor: true,
        selectedRowKeys: [],
        dataSource: [],
        subDataSource: [],
        previewVisible: false,
        previewImages: [],
        expand: false,
        pagination: {
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: total => `共 ${total} 条`,
          current: 1,
          total: null,
        },
      };
    },
    querySuccess(state, action) {
      return {
        ...state,
        dataSource: action.payload.data
      };
    },
    handleToggle(state, action) {
      return {
        ...state,
        expand: !state.expand
      };
    },
    selectChange(state, action) {
      return {
        ...state,
        selectedRowKeys: action.payload
      }
    },
    showModal(state, action) {
      return {
        ...state,
        popupEditor: action.popupEditor,
        modalVisible: true,
        modalTitle: action.title,
        modalAction: action.action,
        modalFormData: action.payload || action.record,
        subDataSource: action.subDataSource,
        modalComponent: action.component
      }
    },
    hideModal(state, action) {
      return {
        ...state,
        modalVisible: false,
        modalFormData: {}
      };
    },
  }
}