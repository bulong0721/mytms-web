import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  "actions": [
    {
      "title": "新增",
      "icon": "plus",
      "type": "primary",
      "action": "customer/save",
      "popupEditor": true
    },
    {
      "title": "编辑",
      "icon": "edit",
      "action": "customer/save",
      "target": "row",
      "popupEditor": true
    },
    {
      "title": "删除",
      "icon": "close",
      "target": "rows",
      "action": "customer/remove"
    },
    {
      "title": "绑定关系",
      "icon": "link",
      "target": "row",
      "action": "customer/bind"
    }
  ],
  "fields": [
    {
      "key": "id",
      "showType": "ID",
      "title": "主键",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "customerCode",
      "showType": "input",
      "title": "公司编码",
      "group": "基本信息",
      "notAsFilter": true
    },
    {
      "key": "customerName",
      "showType": "input",
      "title": "公司名称",
      "group": "基本信息"
    },
    {
      "key": "abbrev",
      "showType": "input",
      "title": "公司简称",
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
      "notAsColumn": true
    },
    {
      "key": "customerType",
      "options": [],
      "showType": "select",
      "title": "客户类型",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "corporation",
      "showType": "input",
      "title": "法定代表人",
      "group": "证照信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "registerCapital",
      "showType": "input",
      "title": "注册资本",
      "group": "证照信息",
      "notAsFilter": true
    },
    {
      "key": "registerNo",
      "showType": "input",
      "title": "注册号",
      "group": "证照信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "phone",
      "showType": "input",
      "title": "公司电话",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "fax",
      "showType": "input",
      "title": "公司传真",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "pyCode",
      "showType": "input",
      "title": "拼音编码",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "organizationNo",
      "showType": "input",
      "title": "组织机构代码",
      "group": "证照信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "website",
      "showType": "input",
      "title": "公司官网",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "registerAddress",
      "showType": "input",
      "title": "注册地址",
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
      "key": "businessScope",
      "showType": "input",
      "title": "经营范围",
      "group": "证照信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "profile",
      "showType": "input",
      "title": "公司简介",
      "group": "基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "tfnNo",
      "showType": "input",
      "title": "税务登记号",
      "group": "证照信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "businessType",
      "options": [],
      "showType": "select",
      "title": "经营类型",
      "group": "基本信息"
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
      "key": "imgLogo",
      "layout": {
        "colSpan": 24,
        "labelSpan": 2,
        "wrapperSpan": 22
      },
      "showType": "image",
      "title": "企业logo图片",
      "group": "证照信息",
      "notAsFilter": true,
      "notAsColumn": true
    }
  ],
  "nesteds": [
    {
      "key": 'contacts',
      "title": '联系人信息',
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
    {
      "key": 'vehicles',
      "title": '车辆信息',
      "fields": [
        {
          "key": "id",
          "showType": "ID",
          "title": "主键",
          "group": "xxxx"
        },
        {
          "key": "cardNo",
          "showType": "input",
          "title": "车牌号",
          "notAsFilter": true
        },
        {
          "key": "ownerType",
          "options": [],
          "showType": "select",
          "title": "车辆归属",
          "notAsFilter": true
        },
        {
          "key": "brandModel",
          "showType": "input",
          "title": "品牌型号",
          "notAsFilter": true
        },
        {
          "key": "approedLoad",
          "showType": "number",
          "title": "核定载量",
          "notAsFilter": true
        },
        {
          "key": "serviceLife",
          "showType": "number",
          "title": "使用年限",
          "notAsFilter": true
        },
        {
          "key": "strongPolicy",
          "showType": "input",
          "title": "交强险保单",
          "notAsFilter": true
        },
        {
          "key": "businessPolicy",
          "showType": "input",
          "title": "商业险保单",
          "notAsFilter": true
        },
        {
          "key": "vehicleType",
          "options": [],
          "showType": "select",
          "title": "车辆类型",
          "notAsFilter": true
        },
        {
          "key": "carriageFormat",
          "showType": "input",
          "title": "车厢规格",
          "notAsFilter": true
        },
        {
          "key": "gps",
          "showType": "switch",
          "title": "GPS",
          "notAsFilter": true
        },
        {
          "key": "auditStatus",
          "options": [],
          "showType": "select",
          "title": "审核状态",
          "notAsFilter": true
        }
      ]
    },
    {
      "key": 'drivers',
      "title": '司机信息',
      "fields": [
        {
          "key": "id",
          "showType": "ID",
          "title": "主键",
          "group": "eeee"
        },
        {
          "key": "driverName",
          "showType": "input",
          "title": "司机姓名",
          "notAsFilter": true
        },
        {
          "key": "driverNo",
          "showType": "input",
          "title": "行驶证号",
          "notAsFilter": true
        },
        {
          "key": "mobile",
          "showType": "input",
          "title": "手机号码",
          "notAsFilter": true
        },
        {
          "key": "drivingType",
          "options": [],
          "showType": "select",
          "title": "准驾车型",
          "notAsFilter": true
        },
        {
          "key": "licensePeriodType",
          "options": [],
          "showType": "select",
          "title": "驾驶证有效期",
          "notAsFilter": true
        },
        {
          "key": "auditStatus",
          "options": [],
          "showType": "select",
          "title": "审核状态",
          "notAsFilter": true
        }
      ],
    },
    {
      "key": 'lines',
      "title": '线路信息',
      "fields": [
        {
          "key": "departureName",
          "showType": "input",
          "title": "起运地",
          "group": "eee",
          "notAsFilter": true
        },
        {
          "key": "destinationName",
          "showType": "input",
          "title": "目的地",
          "notAsFilter": true
        },
        {
          "key": "businessType",
          "options": [],
          "showType": "select",
          "title": "业务类型",
          "notAsFilter": true
        },
        {
          "key": "deliveryArea",
          "showType": "input",
          "title": "配送区域",
          "notAsFilter": true
        },
        {
          "key": "id",
          "showType": "ID",
          "title": "主键"
        }
      ]
    }
  ],
  "key": "customer",
  "title": "三方供应商",
  "editorSpan": 8,
  "filterSpan": 8
}