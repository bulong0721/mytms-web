import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  "actions": [
    {
      "title": "新增",
      "icon": "plus",
      "type": "primary",
      "action": "warehouse/save",
      "popupEditor": true
    },
    {
      "title": "编辑",
      "icon": "edit",
      "target": "row",
      "action": "warehouse/house",
      "popupEditor": true
    },
    {
      "title": "删除",
      "icon": "close",
      "target": "rows",
      "action": "warehouse/remove"
    },
    {
      "title": "导入",
      "icon": "upload",
      "action": "warehouse/import",
      "component": "xxxx"
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
      "key": "code",
      "showType": "input",
      "title": "仓库编码",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "name",
      "showType": "input",
      "title": "仓库名称",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "warehouseType",
      "options": [],
      "showType": "select",
      "title": "仓库类型",
      "group": "基本信息"
    },
    {
      "key": "area",
      "showType": "number",
      "title": "仓库面积",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "cubage",
      "showType": "number",
      "title": "仓库容积",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "operate",
      "showType": "switch",
      "title": "仓内运营",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "heightLevel",
      "options": [],
      "showType": "select",
      "title": "仓内高度",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "groundType",
      "options": [],
      "showType": "select",
      "title": "仓内地面",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "struct",
      "showType": "input",
      "title": "主体结构",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "gradeLabel",
      "showType": "input",
      "title": "等级标签",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "firefight",
      "showType": "input",
      "title": "消防",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "matchEquipment",
      "showType": "input",
      "title": "配套设备",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "security",
      "showType": "input",
      "title": "安保",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "cityCode",
      "showType": "input",
      "title": "市代码",
      "group": null,
      "notAsEditor": true,
      "notAsColumn": true
    },
    {
      "key": "areaCode",
      "showType": "input",
      "title": "区代码",
      "group": null,
      "notAsEditor": true,
      "notAsFilter": true
    },
    {
      "key": "address",
      "showType": "input",
      "title": "地址",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgProperty",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "产权证明",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgRentalAgreement",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "仓库租赁协议",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgFireAccept",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "消防验收证明",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgOperatePermit",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "仓库经营许可证",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgPlan",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "仓库平面",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgWarehouse",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "仓库照片",
      "group": "附件信息",
      "notAsFilter": true,
      "notAsColumn": true
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
      "group": "基本信息"
    }
  ],
  "key": "warehouse",
  "title": "仓库列表",
  "editorSpan": 8,
  "filterSpan": 6
}