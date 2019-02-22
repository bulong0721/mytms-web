module.exports = {
  name: '客户管理平台',
  prefix: 'maintenance',
  footerText: 'Copyright © 2015-2020 上海壹米滴答供应链管理有限公司. All rights reserved. 沪ICP备15046748号',
  logoSrc: 'images/antd.png',
  logoText: '客户管理平台',
  needLogin: true,
  
  api: {  // 对后端请求的相关配置
    host: 'http://localhost:8080',  // 调用ajax接口的地址, 默认值空, 如果是跨域的, 服务端要支持CORS
    path: '',  // ajax请求的路径
    timeout: 15000,  // 请求的超时时间, 单位毫秒
  },

  login: {  // 登录相关配置
    getCurrentUser: '/user/getCurrentUser',  // 后端必须要提供接口校验当前用户的身份, 如果拿不到用户信息, 才会尝试登录
    // 登录有两种情况:
    // 1. 使用sso登录, 直接跳转就可以了
    sso: '',
    // 2. 不使用sso, 使用我提供的一个登录界面
    validate: '/login',  // 校验用户信息, 表单的submit地址. 如果登录成功, 必须返回用户名
    logout: '/logout',  // 退出的url, 用户点击退出时, 浏览器会直接跳转到这个链接
  },

  upload: {  // 上传相关配置
    // 上传图片和上传普通文件分别配置
    image: '/uploadImage',  // 默认的上传图片接口
    imageSizeLimit: 1500,  // 默认的图片大小限制, 单位KB
    file: '/uploadFile',  // 默认的上传文件的接口
    fileSizeLimit: 10240,  // 默认的文件大小限制, 单位KB
  },

  sidebar: {  // 侧边栏相关配置
    collapsible: true,  // 是否显示折叠侧边栏的按钮
    autoMenuSwitch: true,  // 只展开一个顶级菜单, 其他顶级菜单自动折叠
  },
  /**
   * 是否要跨域请求
   *
   * @returns {boolean}
   */
  isCrossDomain() {
    if (this.api.host && this.api.host !== '') {
      return true;
    } else {
      return false;
    }
  },

  /**
   * 是否单点登录
   *
   * @returns {boolean}
   */
  isSSO() {
    if (this.login.sso && this.login.sso !== '') {
      return true;
    } else {
      return false;
    }
  },

  /**
   * 获得api请求的路径
   *
   * @returns {*}
   */
  getAPIPath() {
    if (this.tmpApiPath) { // 缓存
      return this.tmpApiPath;
    }

    const paths = [];

    // js的字符串处理真是麻烦
    if (this.isCrossDomain()) {
      // 去除结尾的'/'
      const tmp = this.api.host;
      let index = tmp.length - 1;
      // 如果超出指定的 index 范围，charAt返回一个空字符串
      while (tmp.charAt(index) === '/') {
        index--;
      }
      if (index < 0)
        paths.push('');
      else
        paths.push(tmp.substring(0, index + 1));
    } else {
      paths.push('');
    }

    if (this.api.path) {
      const tmp = this.api.path;
      let begin = 0;
      let end = tmp.length - 1;

      while (tmp.charAt(begin) === '/') {
        begin++;
      }
      while (tmp.charAt(end) === '/') {
        end--;
      }
      if (begin > end)
        paths.push('');
      else
        paths.push(tmp.substring(begin, end + 1));
    } else {
      paths.push('');
    }

    const tmpApiPath = paths.join('/');
    this.tmpApiPath = tmpApiPath;
    return tmpApiPath;
  },
}
