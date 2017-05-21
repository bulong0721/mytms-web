import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  "actions": [
    {
      "title": "新增",
      "icon": "plus",
      "type": "primary",
      "action": "vechile/save",
      "popupEditor": true
    },
    {
      "title": "编辑",
      "icon": "edit",
      "target": "row",
      "action": "vehicle/save",
      "popupEditor": true
    },
    {
      "title": "删除",
      "icon": "close",
      "target": "rows",
      "action": "vehicle/remove"
    },
    {
      "title": "导入",
      "icon": "upload",
      "action": "vehicle/import"
    }
  ],
  "fields": [
    {
      "key": "id",
      "showType": "ID",
      "title": "主键",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "cardNo",
      "showType": "input",
      "title": "车牌号",
      "group": "基本信息"
    },
    {
      "key": "ownerType",
      "options": [],
      "showType": "select",
      "title": "车辆归属",
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
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "company",
      "showType": "input",
      "title": "所属公司",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "loan",
      "showType": "switch",
      "title": "是否贷款",
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
      "key": "strongPolicy",
      "showType": "input",
      "title": "交强险保单",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "businessPolicy",
      "showType": "input",
      "title": "商业险保单",
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
      "options": [],
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
      "key": "gps",
      "showType": "switch",
      "title": "GPS",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "gpsManufacturerId",
      "showType": "autoComplete",
      "title": "GPS厂商",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "equipmentNum",
      "showType": "number",
      "title": "温湿度探头个数",
      "group": "规格信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasThermostat",
      "showType": "switch",
      "title": "是否有温度设备",
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
      "key": "hasHygroscop",
      "showType": "switch",
      "title": "是否有湿度设备",
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
      "key": "auditor",
      "showType": "input",
      "title": "审核人",
      "group": null,
      "notAsEditor": true,
      "notAsFilter": true
    },
    {
      "key": "auditStatus",
      "options": [],
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
    {
      "key": "orgId",
      "showType": "autoComplete",
      "title": "所属供应商",
      "group": "基本信息"
    }
  ],
  "nesteds": [
    {
      "key": 'contacts',
      "title": '保险信息',
      "fields": [
        {
          "key": "id",
          "showType": "ID",
          "title": "主键",
          "group": "基本信息"
        },
        {
          "key": "contactName",
          "showType": "input",
          "title": "姓名",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "isDefault",
          "showType": "switch",
          "title": "是否默认",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "mobile",
          "showType": "input",
          "title": "联系手机",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "tel",
          "showType": "input",
          "title": "联系电话",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "tax",
          "showType": "input",
          "title": "联系传真",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "post",
          "showType": "input",
          "title": "职务",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "email",
          "showType": "input",
          "title": "邮箱",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "address",
          "showType": "input",
          "title": "地址",
          "group": "基本信息",
          "notAsFilter": true
        }
      ],
    },
  ],
  "key": "vehicle",
  "title": "车辆列表",
  "nestedIndex": 2,
  "editorSpan": 8,
  "filterSpan": 6
}