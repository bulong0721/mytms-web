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
      "notAsFilter": true
    },
    {
      "key": "nameCn",
      "showType": "input",
      "title": "供应商名称",
      "validator": [{ "required": true, "whitespace": true, "message": "请输入公司名称" }],
      "group": "基本信息"
    },
    {
      "key": "nameEn",
      "showType": "input",
      "title": "供应商英文名称",
      "group": "基本信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "suppilerType",
      "options": [],
      "showType": "select",
      "title": "企业类型",
      "group": "基本信息",
      "notAsColumn": true
    },
    {
      "key": "natureType",
      "options": [],
      "showType": "select",
      "title": "主体性质",
      "group": "基本信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "bizType",
      "options": [],
      "showType": "select",
      "title": "业务类型",
      "group": "基本信息"
    },
    {
      "key": "transportType",
      "options": [],
      "showType": "select",
      "title": "运输业务类型",
      "group": "基本信息"
    },
    {
      "key": "suppilerLevel",
      "options": [],
      "showType": "select",
      "title": "供应商状态",
      "group": "基本信息"
    },
    {
      "key": "ph00",
      "showType": "placeholder",
      "group": "基本信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "phone",
      "showType": "input",
      "title": "企业电话",
      "group": "基本信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "fax",
      "showType": "input",
      "title": "企业传真",
      "group": "基本信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ph01",
      "showType": "placeholder",
      "group": "基本信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "industryType",
      "options": [],
      "showType": "select",
      "title": "经营行业",
      "group": "基本信息"
    },
    {
      "key": "ph02",
      "showType": "placeholder",
      "group": "基本信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "remark",
      "showType": "input",
      "title": "企业简介",
      "group": "基本信息",
      "notAsEditor": true,
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "pcc",
      "showType": "input",
      "title": "区域地址",
      "group": "基本信息",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "address",
      "showType": "input",
      "title": "办公地址",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20,
      },
      "group": "基本信息",
      "notAsColumn": true,
      "notAsFilter": true
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
      "key": "creditDeadline",
      "showType": "datetime",
      "title": "社会信用证到期日",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "licCertBegin",
      "showType": "datetime",
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
      "key": "ph11",
      "group": "资质证照信息",
      "showType": "placeholder",
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
      "key": "legal",
      "showType": "input",
      "title": "法人代表",
      "group": "资质证照信息",
      "notAsColumn": true,
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
      "key": "taxCertCd",
      "showType": "input",
      "title": "税务登记号",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "opCertCd",
      "showType": "input",
      "title": "道路运输许可证号",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "opCertBegin",
      "showType": "datetime",
      "title": "道路运输许可证发证日",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "opCertEnd",
      "showType": "datetime",
      "title": "道路运输许可证到期日",
      "group": "资质证照信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "opCertScope",
      "showType": "input",
      "title": "道路运输许可证经营范围",
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
      "key": "imgOpCert",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "道路运输许可证上传",
      "notAsFilter": true,
      "group": "资质证照信息",
      "notAsColumn": true
    },
    {
      "key": "is01",
      "showType": "isolation",
      "title": "运输能力信息",
      "group": "能力库信息",
      "notAsFilter": true
    },
    {
      "key": "empCount",
      "showType": "number",
      "title": "雇员数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ownCarCount",
      "showType": "input",
      "title": "自有常温车数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "rentCarCount",
      "showType": "number",
      "title": "协议常温车数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ownChillCount",
      "showType": "number",
      "title": "自有冷藏（冻）车数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "rentChillCount",
      "showType": "number",
      "title": "协议冷藏（冻）车数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "bizCover",
      "showType": "input",
      "title": "业务覆盖",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "gpsCount",
      "showType": "number",
      "title": "车辆GPS配置数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "equCount",
      "showType": "number",
      "title": "车辆温湿度配置数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "officeArea",
      "showType": "number",
      "title": "固定办公场所面积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "opArea",
      "showType": "number",
      "title": "营运操作场所面积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "is02",
      "showType": "isolation",
      "title": "仓储能力信息",
      "group": "能力库信息",
      "notAsFilter": true
    },
    {
      "key": "ownWhCount",
      "showType": "number",
      "title": "自有仓库数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ownWhArea",
      "showType": "number",
      "title": "自有仓库总面积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ownWhVol",
      "showType": "number",
      "title": "自有仓库总容积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ownRhArea",
      "showType": "number",
      "title": "自有冷库总面积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ownRhVol",
      "showType": "number",
      "title": "自有冷库总容积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "ph20",
      "showType": "placeholder",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "rentWhCount",
      "showType": "number",
      "title": "外租仓库总数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "rentWhArea",
      "showType": "number",
      "title": "外租仓库总面积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "rentWhVol",
      "showType": "number",
      "title": "外租仓库总容积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "rentRhArea",
      "showType": "number",
      "title": "外租冷库总面积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "rentRhVol",
      "showType": "number",
      "title": "外租冷库总容积",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "is03",
      "showType": "isolation",
      "title": "装卸能力信息",
      "group": "能力库信息",
      "notAsFilter": true
    },
    {
      "key": "dockType",
      "options": [],
      "showType": "select",
      "title": "装卸队伍",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "dockEquCount",
      "showType": "number",
      "title": "装卸设备数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "dockMenCount",
      "showType": "number",
      "title": "装卸人员数量",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "is04",
      "showType": "isolation",
      "title": "系统信息化信息",
      "group": "能力库信息",
      "notAsFilter": true
    },
    {
      "key": "standardIt",
      "showType": "number",
      "title": "上线系统",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
    },
    {
      "key": "otherIt",
      "showType": "input",
      "title": "其他系统",
      "group": "能力库信息",
      "notAsColumn": true,
      "notAsFilter": true
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
  "key": "supplier",
  "title": "供应商",
  "useGroupTab": true,
  "editorSpan": 8,
  "filterSpan": 6
}