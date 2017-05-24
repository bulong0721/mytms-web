import {
  Formatter,
  Parser
} from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  "actions": [{
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
      "confirm": true,
      "action": "manager/delete"
    },
    {
      "title": "导入",
      "icon": "upload",
      "action": "manager/import"
    }
  ],
  "fields": [{
      "key": "id",
      "showType": "ID",
      "disabled": true,
      "title": "主键",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "orgId",
      "showType": "autoComplete",
      "title": "所属供应商",
      "group": "基本信息"
    },
    {
      "key": "cardNo",
      "showType": "input",
      "title": "车牌号",
      "validator": [{ "required": true, "whitespace": true, "message": "请输入车牌号" }],
      "group": "基本信息"
    },
    {
      "key": "ownerType",
      "options": OptionConstants.ownerType,
      "showType": "select",
      "title": "车辆归属",
      "validator": [{ "required": true, "message": "请选择车辆归属" }],
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "carOwner",
      "showType": "input",
      "title": "行驶证车主",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "brandModel",
      "showType": "input",
      "title": "品牌型号",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "vin",
      "showType": "input",
      "title": "车辆识别码",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "engineNo",
      "showType": "input",
      "title": "发动机号",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "regdate",
      "showType": "datetime",
      "title": "注册日期",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "approedLoad",
      "showType": "number",
      "title": "核定载量",
      "validator": [{ "required": true, "message": "请输入核定载量" }],
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "serviceLife",
      "showType": "number",
      "title": "使用年限",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "operateNo",
      "showType": "input",
      "title": "车辆运营证",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "vehicleLength",
      "showType": "number",
      "title": "车长",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "vehicleType",
      "options": OptionConstants.vehicleType,
      "validator": [{ "required": true, "message": "请选择车辆类型" }],
      "showType": "select",
      "title": "车辆类型",
      "group": "规格信息"
    },
    {
      "key": "carriageFormat",
      "showType": "input",
      "title": "车厢规格",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "maxTemp",
      "showType": "number",
      "title": "最高温",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "minTemp",
      "showType": "number",
      "title": "最低温",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "ph00",
      "showType": "placeholder",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "gps",
      "showType": "switch",
      "title": "定位设备",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "gpsManufacturerId",
      "showType": "autoComplete",
      "title": "定位设备厂商",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "ph01",
      "showType": "placeholder",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasThermostat",
      "showType": "switch",
      "title": "有温度设备",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "thermostatManufacturerId",
      "showType": "autoComplete",
      "title": "温控设备厂商",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "ph02",
      "showType": "placeholder",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasHygroscop",
      "showType": "switch",
      "title": "有湿度设备",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hygroscopeManufacturerId",
      "showType": "autoComplete",
      "title": "湿度设备厂商",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "ph04",
      "showType": "placeholder",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "equipmentNum",
      "showType": "number",
      "title": "温湿度探头数",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "auditor",
      "showType": "input",
      "title": "审核人",
      "group": null,
      "notAsEditor": true,
      "notAsFilter": true
    },
    {
      "key": "auditStatus",
      "options": OptionConstants.auditStatus,
      "showType": "select",
      "title": "审核状态",
      "group": null,
      "notAsEditor": true
    },
    {
      "key": "remark",
      "showType": "input",
      "title": "备注",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgCar",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "车辆照片",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgDriving",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "行驶证扫描件",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgCarOperation",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "车辆运营证",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgWarrant",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "保单扫描件",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
  ],
  "nesteds": [{
    "key": 'insurances',
    "editorSpan": 24,
    "title": '保险信息',
    "fields": [{
        "key": "id",
        "showType": "ID",
        "title": "主键",
        "disabled": true,
        "notAsFilter": true
      },
      {
        "key": "supplier",
        "showType": "input",
        "title": "保险公司",
        "validator": [{ "required": true, "whitespace": true, "message": "请输入保险公司" }],
      },
      {
        "key": "policyType",
        "options": OptionConstants.policyType,
        "showType": "select",
        "validator": [{ "required": true, "message": "请选择保险类型" }],
        "title": "保险类型",
      },
      {
        "key": "policyNo",
        "showType": "input",
        "title": "保险单号",
        "validator": [{ "required": true, "whitespace": true, "message": "请选输入保险单号" }],
      },
      {
        "key": "totalPolicy",
        "showType": "number",
        "title": "总保额",
        "notAsFilter": true
      },
      {
        "key": "temperturePolicy",
        "showType": "number",
        "title": "温控险保额",
        "notAsFilter": true
      },
      {
        "key": "thirdPartyPolicy",
        "showType": "number",
        "title": "第三方险保额",
        "notAsFilter": true
      },
      {
        "key": "driverPolicy",
        "showType": "number",
        "title": "司机险保额",
        "notAsFilter": true
      },
      {
        "key": "passengerPolicy",
        "showType": "number",
        "title": "乘客险保额",
        "notAsFilter": true
      },
      {
        "key": "deadline",
        "showType": "datetime",
        "title": "保险到期日",
        "validator": [{ "required": true, "message": "请输入保险到期日" }],
        "notAsFilter": true
      },
    ],
  }, ],
  "key": "vehicle",
  "title": "车辆列表",
  "nestedIndex": 2,
  "editorSpan": 8,
  "filterSpan": 6
}
