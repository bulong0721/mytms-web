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
    "target": "rows",
    "icon": "close"
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
    "key": "company",
    "showType": "input",
    "title": "公司名称",
    "validator": [{ "required": true, "whitespace": true, "message": "请输入公司名称" }],
    "group": "基本信息"
  },
  {
    "key": "groupType",
    "options": OptionConstants.shipType,
    "showType": "select",
    "title": "关系类型",
    "validator": [{ "required": true, "whitespace": true, "message": "请选择关系类型" }],
    "group": "基本信息"
  },
  {
    "key": "industryType",
    "options": OptionConstants.industryType,
    "validator": [{ "required": true, "whitespace": true, "message": "请选择经营行业" }],
    "showType": "select",
    "title": "经营行业",
    "notAsFilter": true,
    "group": "基本信息"
  },
  {
    "key": "portfolio",
    "showType": "input",
    "title": "业务量",
    "group": "基本信息",
    "notAsFilter": true
  },
  {
    "key": "cooperaPeriod",
    "showType": "number",
    "title": "合作年限",
    "group": "基本信息",
    "notAsFilter": true
  },
  {
    "key": "contact",
    "showType": "input",
    "title": "联系人",
    "group": "基本信息",
    "notAsFilter": true
  },
  {
    "key": "contactPhone",
    "showType": "input",
    "title": "联系方式",
    "group": "基本信息",
    "notAsFilter": true
  },
  {
    "key": "address",
    "showType": "input",
    "title": "办公地址",
    "group": "基本信息",
    "layout": {
      "colSpan": 16,
      "labelSpan": 4,
      "wrapperSpan": 20
    },
    "notAsFilter": true,
    "notAsColumn": true
  },
  {
    "key": "remark",
    "showType": "input",
    "title": "备注",
    "group": "基本信息",
    "type": 'textarea',
    "rows": 4,
    "layout": {
      "colSpan": 16,
      "labelSpan": 4,
      "wrapperSpan": 20
    },
    "notAsFilter": true
  }
  ],
  "key": "customer_group",
  "title": "客户群维护",
  "editorSpan": 8,
  "filterSpan": 8
}
