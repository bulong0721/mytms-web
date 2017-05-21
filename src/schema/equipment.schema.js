import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  "actions": [
    {
      "title": "新增",
      "icon": "plus",
      "type": "primary",
      "action": "equipment/save",
      "popupEditor": true
    },
    {
      "title": "编辑",
      "icon": "edit",
      "target": "row",
      "action": "equipment/save",
      "popupEditor": true
    },
    {
      "title": "删除",
      "icon": "close",
      "target": "rows",
      "action": "equipment/remove"
    },
    {
      "title": "导入",
      "icon": "upload",
      "action": "equipment/import"
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
      "key": "equipmentNo",
      "showType": "input",
      "title": "设备号",
      "group": "基本信息"
    },
    {
      "key": "equipmentName",
      "showType": "input",
      "title": "设备名称",
      "group": "基本信息"
    },
    {
      "key": "serialNo",
      "showType": "input",
      "title": "设备流水号",
      "group": null,
      "notAsEditor": true,
      "notAsFilter": true
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
      "key": "equipmentType",
      "options": [],
      "showType": "select",
      "title": "设备类型",
      "group": "基本信息"
    },
    {
      "key": "manufacturerId",
      "showType": "autoComplete",
      "title": "设备厂商",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "specModel",
      "showType": "input",
      "title": "规格/型号",
      "group": "基本信息",
      "notAsFilter": true
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
      "key": "orgId",
      "showType": "autoComplete",
      "title": "所属供应商",
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