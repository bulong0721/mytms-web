Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  var week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};

Date.prototype.plusDays = function (num) {
  var tmp = new Date();
  tmp.setDate(this.getDate() + num);
  return tmp;
};

// 为了克服js的一些坑...
const CommonUtil = {
  isString(s) {
    return typeof (s) === 'string' || s instanceof String;
  },
  // 获取url中的所有参数
  getAllQueryParams() {
    let str = window.location.href;
    if (!str) {
      return {};
    }

    let num = str.indexOf('?');
    str = str.substr(num + 1); //取得所有参数

    const res = {};
    let name;
    let value;

    const arr = str.split('&'); //各个参数放到数组里
    for (let i = 0; i < arr.length; i++) {
      num = arr[i].indexOf('=');
      if (num > 0) {
        name = arr[i].substring(0, num).trim();
        value = arr[i].substr(num + 1).trim();
        res[name] = value;
      }
    }

    return res;
  },
};

export default CommonUtil;
