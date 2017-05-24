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
      "action": "manager/remove"
    },
    {
      "title": "导入",
      "icon": "upload",
      "action": "manager/import"
    }
  ],
  "fields": [
    {
      "key": "serialNo",
      "showType": "ID",
      "title": "设备流水号",
      "disabled":true,
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "equipmentNo",
      "showType": "input",
      "title": "设备号",
      "validator": [{ "required": true, "whitespace": true, "message": "请输入设备号" }],
      "group": "基本信息"
    },
    {
      "key": "equipmentName",
      "showType": "input",
      "title": "设备名称",
      "validator": [{ "required": true, "whitespace": true, "message": "请输入设备名称" }],
      "group": "基本信息"
    },
    {
      "key": "outNo",
      "showType": "input",
      "title": "外部编号",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "orgId",
      "showType": "autoComplete",
      "title": "所属公司",
      "validator": [{ "required": true, "whitespace": true, "message": "请选择所属公司" }],
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "equipmentType",
      "options": OptionConstants.ceType,
      "showType": "select",
      "title": "设备类型",
      "validator": [{ "required": true, "whitespace": true, "message": "请选择设备类型" }],
      "group": "基本信息"
    },
    {
      "key": "specModel",
      "showType": "input",
      "title": "规格/型号",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "manufacturerId",
      "options":OptionConstants.ceManufacturer,
      "showType": "select",
      "title": "厂商",
      "group": "基本信息",
      "validator": [{ "required": true, "whitespace": true, "message": "请选择厂商" }],
      "notAsFilter": true
    },
    {
      "key": "remark",
      "showType": "input",
      "title": "备注",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    }
  ],
  "key": "equipment",
  "title": "设备列表",
  "editorSpan": 8,
  "filterSpan": 6
}