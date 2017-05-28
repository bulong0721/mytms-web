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
      "target": "rows",
      "action": "manager/save",
      "popupEditor": true
    },
    {
      "title": "删除",
      "icon": "close",
      "target": "rows",
      "action": "manager/delete",
      "component": ""
    }
  ],
  "fields": [
    {
      "key": "id",
      "showType": "ID",
      "disabled": true,
      "title": "主键",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "customerCode",
      "showType": "input",
      "title": "客户编码",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "customerName",
      "showType": "input",
      "title": "客户名称",
      "group": "基本信息"
    },
    {
      "key": "customerEnglishName",
      "showType": "input",
      "title": "客户英文名称",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "companyType",
      "options": [],
      "showType": "select",
      "title": "企业类型",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "phone",
      "showType": "input",
      "title": "企业电话",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "fax",
      "showType": "input",
      "title": "企业传真",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "settlingTime",
      "showType": "datetime",
      "title": "入驻时间",
      "group": "基本信息"
    },
    {
      "key": "businessScope",
      "showType": "input",
      "title": "经营行业",
      "group": "基本信息"
    },
    {
      "key": "profile",
      "showType": "input",
      "title": "企业简介",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "area",
      "showType": "input",
      "title": "区域地址",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "officeAddress",
      "showType": "input",
      "title": "办公地址",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "licenseCombine",
      "showType": "switch",
      "title": "是否三证合一",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "creditCd",
      "showType": "input",
      "title": "社会信用代码",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "registerDate",
      "showType": "datetime",
      "title": "注册日期",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "registerNo",
      "showType": "input",
      "title": "营业执照注册号",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "licCertEnd",
      "showType": "datetime",
      "title": "营业执照到期日",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "legal",
      "showType": "input",
      "title": "法人代表",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },    
    {
      "key": "registerCapital",
      "showType": "number",
      "title": "注册资本（万元）",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "taxCertCd",
      "showType": "input",
      "title": "税务登记号",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ph11",
      "group": "资质证照信息",
      "showType": "placeholder",
      "notAsFilter": true
    },
    {
      "key": "ph11",
      "group": "资质证照信息",
      "showType": "placeholder",
      "notAsFilter": true
    },
    {
      "key": "bizScope",
      "showType": "input",
      "title": "营业执照经营范围",
      "group": "资质证照信息",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ph02",
      "group": "资质证照信息",
      "showType": "placeholder",
      "notAsFilter": true
    },
    {
      "key": "orgCertCd",
      "showType": "input",
      "title": "组织机构代码证号",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "orgCertBegin",
      "showType": "datetime",
      "title": "组织机构代码证起始日",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "orgCertEnd",
      "showType": "datetime",
      "title": "组织机构代码证起到期日",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "imgLicCert",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "营业执照附件上传",
      "notAsFilter": true,
      "group": "资质证照信息",
      "notAsColumn": true
    },
    {
      "key": "imgOrgCert",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "组织机构代码证上传",
      "notAsFilter": true,
      "group": "资质证照信息",
      "notAsColumn": true
    },
    {
      "key": "imgTaxCert",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "税务登记证上传",
      "notAsFilter": true,
      "group": "资质证照信息",
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
    }
  ],
  "nesteds": [
    {
      "key": 'contacts',
      "title": '联系人信息',
      "editorSpan": 24,
      "fields": [
        {
          "key": "id",
          "showType": "ID",
          "title": "主键",
        },
        {
          "key": "contactName",
          "showType": "input",
          "title": "姓名",
          "notAsFilter": true
        },
        {
          "key": "isDefault",
          "showType": "switch",
          "title": "是否默认",
          "notAsFilter": true
        },
        {
          "key": "mobile",
          "showType": "input",
          "title": "联系手机",
          "notAsFilter": true
        },
        {
          "key": "tel",
          "showType": "input",
          "title": "联系电话",
          "notAsFilter": true
        },
        {
          "key": "tax",
          "showType": "input",
          "title": "联系传真",
          "notAsFilter": true
        },
        {
          "key": "post",
          "showType": "input",
          "title": "职务",
          "notAsFilter": true
        },
        {
          "key": "email",
          "showType": "input",
          "title": "邮箱",
          "notAsFilter": true
        },
        {
          "key": "address",
          "showType": "input",
          "title": "地址",
          "notAsFilter": true
        }
      ],
    },
    {
      "key": 'finances',
      "title": '财务信息',
      "fields": [
        {
          "key": "id",
          "showType": "ID",
          "title": "主键",
          "group": "基本信息"
        },
        {
          "key": "bankAccountName",
          "showType": "input",
          "title": "收款方名称",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "bankCardNo",
          "showType": "input",
          "title": "收款方账号",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "bankName",
          "showType": "input",
          "title": "开户行名称（支行）",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "invoiceType",
          "options": [],
          "showType": "select",
          "title": "发票类型",
          "group": "基本信息",
          "notAsFilter": true
        },
        {
          "key": "taxrate",
          "showType": "number",
          "title": "税率",
          "group": "基本信息"
        },
        {
          "key": "imgBank",
          "showType": "image",
          "title": "附件",
          "group": "基本信息",
          "notAsFilter": true
        },
      ],
    },
  ],
  "key": "customer",
  "title": "客户管理",
  "useGroupTab": true,
  "editorSpan": 8,
  "filterSpan": 6
}