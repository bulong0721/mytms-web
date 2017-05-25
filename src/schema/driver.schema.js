import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  "actions": [
    {
      "title": "新增",
      "icon": "plus",
      "type": "primary",
      "action": "manager/save",
      "popupEditor": true
    },
    {
      "title": "编辑",
      "icon": "edit",
      "target": "row",
      "action": "manager/save",
      "popupEditor": true
    },
    {
      "title": "删除",
      "icon": "close",
      "target": "rows",
      "action": "manager/remove",
      "popupEditor": false
    },
    {
      "title": "导入",
      "icon": "upload",
      "action": "manager/import"
    }
  ],
  "fields": [
    {
      "key": "driverName", 
      "showType": "input", 
      "title": "司机姓名", 
      "group": "基本信息", 
      "validator": [{ "required": true, "whitespace": true, "message": "请输入司机姓名" }] 
    },
    { 
      "key": "driverNo", 
      "notAsFilter": true, 
      "showType": "input", 
      "title": "驾驶证号", 
      "group": "基本信息", 
      "validator": [{ "required": true, "whitespace": true, "message": "请输入驾驶证号" }] 
    }, 
    { 
      "key": "licenseExpiredTime", 
      "notAsColumn": true, 
      "notAsFilter": true, 
      "showType": "datetime", 
      "title": "驾驶证到期日", 
      "group": "基本信息", 
      "validator": [{ "required": true, "whitespace": true, "message": "请输入驾驶证到期日" }] 
    }, 
    { 
      "key": "sex", 
      "notAsFilter": true, 
      "showType": "select", 
      "options": OptionConstants.sex, 
      "title": "性别", 
      "group": "基本信息" 
    }, 
    { 
      "key": "drivingType", 
      "notAsFilter": true, 
      "options": OptionConstants.drivingType, 
      "showType": "select", 
      "title": "准驾车型", 
      "group": "基本信息" 
    }, 
    { 
      "key": "mobile", 
      "notAsFilter": true, 
      "showType": "input", 
      "title": "手机号码", 
      "group": "基本信息", 
      "validator": [{ "required": true, "whitespace": true, "message": "请输入手机号码"}] 
    }, 
    { 
      "key": "healthNo", 
      "notAsColumn": true, 
      "notAsFilter": true, 
      "showType": "input", 
      "title": "健康证号", 
      "group": "基本信息" 
    }, 
    { 
      "key": "healthExpiredTime", 
      "notAsColumn": true, 
      "notAsFilter": true, 
      "showType": "datetime", 
      "title": "健康证到期日", 
      "group": "基本信息" 
    }, 
    { 
      "key": "domicle", 
      "notAsColumn": true, 
      "notAsFilter": true, 
      "showType": "input", 
      "title": "居住地", 
      "group": "基本信息", 
      "validator": [{ "required": true, "whitespace": true, "message": "请输入居住地"}] 
    }, 
    { 
      "key": "permanentLocation", 
      "notAsColumn": true, 
      "notAsFilter": true, 
      "showType": "input", 
      "title": "户口所在地", 
      "group": "基本信息" 
    }, 
    {
      "key": "imgDriverCard",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "notAsColumn": true,
      "notAsFilter": true,
      "showType": "image",
      "title": "驾驶证图片", 
      "group": "附件信息" 
    },
    {
      "key": "imgIdentify",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "notAsColumn": true,
      "notAsFilter": true,
      "showType": "image",
      "title": "身份证图片", 
      "group": "附件信息" 
    },
    {
      "key": "imgHealthCard",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "notAsColumn": true,
      "notAsFilter": true,
      "showType": "image",
      "title": "健康证图片", 
      "group": "附件信息" 
    },
    {
      "key": "orgId",
      "showType": "autoComplete",
      "title": "所属供应商",
      "group": null
    }
  ],
  "key": "driver",
  "title": "司机列表",
  "editorSpan": 8,
  "filterSpan": 6
}