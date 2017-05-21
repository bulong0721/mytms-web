import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  "actions": [
    {
      "title": "新增",
      "icon": "plus",
      "type": "primary",
      "action": "driver/save",
      "popupEditor": true
    },
    {
      "title": "编辑",
      "icon": "edit",
      "target": "row",
      "action": "driver/save",
      "popupEditor": true
    },
    {
      "title": "删除",
      "icon": "close",
      "target": "rows",
      "action": "driver/remove",
      "popupEditor": false
    },
    {
      "title": "导入",
      "icon": "upload",
      "action": "driver/import"
    }
  ],
  "fields": [
    {
      "key": "driverName",
      "showType": "input",
      "title": "司机姓名",
      "group": "基本信息"
    },
    {
      "key": "sex",
      "notAsFilter": true,
      "showType": "switch",
      "title": "性别",
      "group": "基本信息"
    },
    {
      "key": "mobile",
      "notAsFilter": true,
      "showType": "input",
      "title": "手机号码",
      "group": "基本信息"
    },
    {
      "key": "driverNo",
      "notAsFilter": true,
      "showType": "input",
      "title": "行驶证号",
      "group": "基本信息"
    },
    {
      "key": "licensePeriodType",
      "notAsColumn": true,
      "notAsFilter": true,
      "options": [],
      "showType": "select",
      "title": "驾驶证有效期",
      "group": "基本信息"
    },
    {
      "key": "drivingType",
      "notAsFilter": true,
      "options": [],
      "showType": "select",
      "title": "准驾车型",
      "group": "基本信息"
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
      "key": "domicle",
      "notAsColumn": true,
      "notAsFilter": true,
      "showType": "input",
      "title": "居住地",
      "group": "基本信息"
    },
    {
      "key": "auditor",
      "notAsEditor": true,
      "notAsFilter": true,
      "showType": "input",
      "title": "审核人",
      "group": null
    },
    {
      "key": "auditStatus",
      "notAsEditor": true,
      "options": [],
      "showType": "select",
      "title": "审核状态",
      "group": null
    },
    {
      "key": "remark",
      "notAsColumn": true,
      "notAsFilter": true,
      "showType": "input",
      "title": "备注",
      "group": "基本信息"
    },
    {
      "key": "imgIdentify",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "notAsColumn": true,
      "notAsFilter": true,
      "showType": "image",
      "title": "身份证图片",
      "group": "证照信息"
    },
    {
      "key": "imgDriverCard",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "notAsColumn": true,
      "notAsFilter": true,
      "showType": "image",
      "title": "驾驶证图片",
      "group": "证照信息"
    },
    {
      "key": "imgOther",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "notAsColumn": true,
      "notAsFilter": true,
      "showType": "image",
      "title": "其他图片",
      "group": "证照信息"
    },
    {
      "key": "orgId",
      "showType": "autoComplete",
      "title": "所属供应商",
      "group": "基本信息"
    }
  ],
  "key": "driver",
  "title": "司机列表",
  "editorSpan": 8,
  "filterSpan": 6
}