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
      "key": "departureCode",
      "showType": "input",
      "title": "始发地代码",
      "group": "线路信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "departureName",
      "showType": "input",
      "title": "始发地",
      "group": "线路信息",
      "validator": [{ "required": true, "whitespace": true, "message": "请输入始发地" }] 
    },
    {
      "key": "destinationCode",
      "showType": "input",
      "title": "目的地代码",
      "group": "线路信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "destinationName",
      "showType": "input",
      "title": "目的地",
      "group": "线路信息",
      "validator": [{ "required": true, "whitespace": true, "message": "请输入目的地" }] 
    },
    {
      "key": "businessType",
      "options": OptionConstants.businessType,
      "showType": "select",
      "title": "业务类型",
      "group": "线路信息",
      "validator": [{ "required": true, "message": "请选择业务类型" }] 
    },
    {
      "key": "vehicleType",
      "options": OptionConstants.vehicleType,
      "showType": "select",
      "title": "车辆类型",
      "group": "车辆信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请选择车辆类型" }] 
    },
    {
      "key": "vehicleSpec",
      "showType": "input",
      "title": "车厢规格(毫米)",
      "group": "车辆信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "whitespace": true, "message": "请输入车辆规格" }] 
    },
    {
      "key": "loadageTons",
      "showType": "number",
      "title": "车辆装载量(吨)",
      "group": "车辆信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请输入车辆装载量(吨)" }] 
    },
    {
      "key": "loadageCubes",
      "showType": "number",
      "title": "车辆装载量(m³)",
      "group": "车辆信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请输入车辆装载量(m³)" }] 
    },
    {
      "key": "isTemperatureControl",
      "showType": "select",
      "options": OptionConstants.yesOrNo,
      "title": "是否温控",
      "group": "车辆信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请选择是否温控" }] 
    },
    {
      "key": "highestTemp",
      "showType": "number",
      "title": "最高温",
      "group": "车辆信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请输入最高温" }] 
    },
    {
      "key": "lowestTemp",
      "showType": "number",
      "title": "最低温",
      "group": "车辆信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请输入最低温" }] 
    },
    {
      "key": "transitTime",
      "showType": "number",
      "title": "运输时效(小时)",
      "group": "服务价格信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请输入运输时效" }] 
    },
    {
      "key": "transitPrice",
      "showType": "number",
      "title": "运输价格",
      "group": "服务价格信息",
      "validator": [{ "required": true, "message": "请输入运输价格" }] 
    },
    {
      "key": "hasLoad",
      "showType": "select",
      "options": OptionConstants.yesOrNo,
      "title": "是否含装车",
      "group": "服务价格信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请选择是否含装车" }] 
    },
    {
      "key": "hasLoadService",
      "showType": "select",
      "options": OptionConstants.yesOrNo,
      "title": "是否提供装车服务",
      "group": "服务价格信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "loadChargeWay",
      "showType": "select",
      "options": OptionConstants.chargeWay,
      "title": "装车计费方式",
      "group": "服务价格信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "loadPrice",
      "showType": "number",
      "title": "单价（元）",
      "group": "服务价格信息",
      "notAsFilter": true
    },
    {
      "key": "hasUnload",
      "showType": "select",
      "options": OptionConstants.yesOrNo,
      "title": "是否含卸车",
      "group": "服务价格信息",
      "notAsFilter": true,
      "validator": [{ "required": true, "message": "请选择是否含卸车" }] 
    },
    {
      "key": "hasUnloadService",
      "showType": "select",
      "options": OptionConstants.yesOrNo,
      "title": "是否提供卸车服务",
      "group": "服务价格信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "unloadChargeWay",
      "showType": "select",
      "options": OptionConstants.chargeWay,
      "title": "卸车计费方式",
      "group": "服务价格信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "unloadPrice",
      "showType": "number",
      "title": "单价（元）",
      "group": "服务价格信息",
      "notAsFilter": true
    }
  ],
  "key": "line",
  "title": "线路列表",
  "editorSpan": 8,
  "filterSpan": 6
}