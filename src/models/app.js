import { notification } from 'antd';
import { get, post } from '../services/http';
import config from '../config';
const { prefix } = config;

export default {
  namespace: 'app',

  state: {
    login: false,
    user: {
      name: '吴彦祖',
    },
    loginButtonLoading: false,
    menuPopoverVisible: false,
    siderFold: localStorage.getItem('antdAdminSiderFold') === 'true',
    darkTheme: localStorage.getItem('antdAdminDarkTheme') !== 'false',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(localStorage.getItem(`${prefix}navOpenKeys`)) || [],
  },

  subscriptions: {
    setup({ dispatch }) {
      //dispatch({ type: 'launch' });
    }
  },

  effects: {
    *launch({}, { call, put }) {
      const dicMap = JSON.parse(localStorage.getItem('dictionary1'));
      if (dicMap.length === 0) {
        const resp = yield call(post, 'http://localhost:8080/entry/dictionary');
        resp.list.forEach(({ key, value, groupId }) => {
          const opts = dicMap.get(groupId) || [];
          opts.push({ key, value });
          dicMap.set(groupId, opts);
        });
        localStorage.setItem('dictionary1', JSON.stringify(dicMap));
      }
    },
    *login({ payload }, { call, put }) {
      yield put({ type: 'showLoginButtonLoading' });
      yield put({
        type: 'loginSuccess',
        payload: {
          user: { name: payload.username }
        }
      });
    },
    *changeTheme({ payload }, { put }) {
      yield put({ type: 'handleChangeTheme' });
    },
    *logout({ payload }, { call, put }) {
      yield put({ type: 'logoutSuccess' });
    },
    *changeNavbar({ payload }, { put }) {
      if (document.body.clientWidth < 769) {
        yield put({ type: 'showNavbar' })
      } else {
        yield put({ type: 'hideNavbar' })
      }
    },
    *switchSider({ payload }, { put }) {
      yield put({
        type: 'handleSwitchSider',
      })
    },
    *switchMenuPopver({ payload }, { put }) {
      yield put({
        type: 'handleSwitchMenuPopver',
      })
    },
  },

  reducers: {
    loginSuccess(state, action) {
      return {
        ...state,
        ...action.payload,
        login: true,
        showLoginButtonLoading: false
      };
    },
    logoutSuccess(state, action) {
      return {
        ...state,
        login: false
      };
    },
    showLoginButtonLoading(state) {
      return {
        ...state,
        loginButtonLoading: false
      };
    },
    handleSwitchSider(state) {
      localStorage.setItem('antdAdminSiderFold', !state.siderFold)
      return {
        ...state,
        siderFold: !state.siderFold,
      }
    },
    handleChangeTheme(state) {
      localStorage.setItem('antdAdminDarkTheme', !state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme,
      }
    },
    showNavbar(state) {
      return {
        ...state,
        isNavbar: true,
      }
    },
    hideNavbar(state) {
      return {
        ...state,
        isNavbar: false,
      }
    },
    handleSwitchMenuPopver(state) {
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible,
      }
    },
    handleNavOpenKeys(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  }
}
