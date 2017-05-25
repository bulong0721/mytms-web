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
      "key": "id",
      "showType": "ID",
      "disabled": true,
      "title": "主键",
      "group": "仓库基本信息",
      "notAsFilter": true
    },
    {
      "key": "code",
      "showType": "input",
      "title": "仓库编码",
      "group": "仓库基本信息",
      "validator": [{ "required": true, "whitespace": true, "message": "请输入仓库编码" }],
      "notAsFilter": true
    },
    {
      "key": "name",
      "showType": "input",
      "title": "仓库名称",
      "validator": [{ "required": true, "whitespace": true, "message": "请输入仓库名称" }],
      "group": "仓库基本信息",
      "notAsFilter": true
    },
    {
      "key": "hasAllocation",
      "showType": "switch",
      "title": "是否仓配一体",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "warehouseType",
      "options": [],
      "showType": "select",
      "title": "仓库类型",
      "group": "仓库基本信息"
    },
    {
      "key": "area",
      "showType": "number",
      "title": "仓库面积",
      "group": "仓库基本信息",
      "notAsFilter": true
    },
    {
      "key": "cubage",
      "showType": "number",
      "title": "仓库容积",
      "group": "仓库基本信息",
      "notAsFilter": true
    },
    {
      "key": "operate",
      "showType": "switch",
      "title": "仓内运营",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "heightLevel",
      "options": OptionConstants.warehouseHeightLevel,
      "showType": "select",
      "title": "仓内高度",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "groundType",
      "options": OptionConstants.groundType,
      "showType": "select",
      "title": "库内地面",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "struct",
      "showType": "select",
      "options": OptionConstants.struct,
      "title": "主体结构",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "gradeLabel",
      "showType": "select",
      "options": OptionConstants.gradeLabel,
      "title": "星级认证",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "firefight",
      "showType": "select",
      "options": OptionConstants.firefight,
      "title": "消防",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "matchEquipment",
      "showType": "select",
      "options": OptionConstants.matchEquipment,
      "title": "配套设备",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "security",
      "showType": "select",
      "options": OptionConstants.security,
      "title": "安保",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasFoodLicense",
      "showType": "switch",
      "title": "有无食品流通许可证",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasGsp",
      "showType": "switch",
      "title": "有无GSP",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasPlatform",
      "showType": "switch",
      "title": "有无月台",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasLoad",
      "showType": "switch",
      "title": "有无装卸设备",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasTemperature",
      "showType": "switch",
      "title": "有无温控设备",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasDampness",
      "showType": "switch",
      "title": "有无湿控设备",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasVideo",
      "showType": "switch",
      "title": "有无视频设备",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasRack",
      "showType": "switch",
      "title": "有无货架设备",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "refrigerationPlant",
      "showType": "select",
      "options": OptionConstants.refrigerationPlant,
      "title": "制冷设备",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "provinceCode",
      "showType": "input",
      "title": "省代码",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "provinceName",
      "showType": "input",
      "title": "省名称",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "cityCode",
      "showType": "input",
      "title": "市代码",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "cityName",
      "showType": "input",
      "title": "市名称",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "areaCode",
      "showType": "input",
      "title": "区代码",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "areaName",
      "showType": "input",
      "title": "区名称",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "address",
      "showType": "input",
      "title": "地址",
      "group": "仓库基本信息"
    },
    {
      "key": "longitude",
      "showType": "number",
      "title": "经度",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "latitude",
      "showType": "number",
      "title": "纬度",
      "group": "仓库基本信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "distributionAbility",
      "showType": "select",
      "options": OptionConstants.distributionAbility,
      "title": "有无配送能力",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "pickupArea",
      "showType": "input",
      "title": "接送业务范围",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "cooperateVehicleType",
      "options": OptionConstants.cooperateVehicleType,
      "showType": "select",
      "title": "合作车辆类型",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "teamName",
      "showType": "input",
      "title": "车队名称",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "vehicles",
      "showType": "number",
      "title": "车辆数量",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "refrigeratedVehicles",
      "showType": "number",
      "title": "冷藏车数量",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "hasWms",
      "showType": "select",
      "options": OptionConstants.hasWms,
      "title": "WMS系统",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "balanceType",
      "options": OptionConstants.balanceType,
      "showType": "select",
      "title": "结算类型",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "storageBalanceType",
      "options": OptionConstants.storageBalanceType,
      "showType": "select",
      "title": "仓储费结算类型",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "storageChargeWay",
      "showType": "select",
      "options": OptionConstants.storageChargeWay,
      "title": "仓储费计费方式",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "storageChargeOtherWay",
      "showType": "input",
      "title": "仓储费计费其他方式",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "storagePriceDetail",
      "showType": "number",
      "title": "仓储单价明细",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "operationFeeType",
      "options": [],
      "showType": "select",
      "title": "操作费结算分类",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "operationOtherFee",
      "showType": "number",
      "title": "其他操作费用",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "operationFeeDetail",
      "showType": "number",
      "title": "操作费明细",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "minCharge",
      "showType": "number",
      "title": "最低收费",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "balancePeriod",
      "showType": "select",
      "options": OptionConstants.balancePeriod,
      "title": "结算周期",
      "group": "仓库业务及报价信息",
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "imgProperty",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "产权证明",
      "notAsFilter": true,
      "notAsColumn": true,
      "group": "仓库资质信息"
    },
    {
      "key": "imgRentalAgreement",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "仓库租赁协议",
      "notAsFilter": true,
      "notAsColumn": true,
      "group": "仓库资质信息"
    },
    {
      "key": "imgFireAccept",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "消防验收证明",
      "notAsFilter": true,
      "notAsColumn": true,
      "group": "仓库资质信息"
    },
    {
      "key": "imgOperatePermit",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "仓库经营许可证",
      "notAsFilter": true,
      "notAsColumn": true,
      "group": "仓库资质信息"
    },
    {
      "key": "imgPlan",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "仓库平面图",
      "notAsFilter": true,
      "notAsColumn": true,
      "group": "仓库资质信息"
    },
    {
      "key": "imgWarehouse",
      "layout": {
        "colSpan": 16,
        "labelSpan": 4,
        "wrapperSpan": 20
      },
      "showType": "image",
      "title": "仓库照片",
      "notAsFilter": true,
      "notAsColumn": true,
      "group": "仓库资质信息"
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
      "notAsEditor": true,
      "notAsFilter": true
    },
    {
      "key": "remark",
      "showType": "input",
      "title": "备注",
      "group": null,
      "notAsFilter": true,
      "notAsColumn": true
    },
    {
      "key": "orgId",
      "showType": "autoComplete",
      "title": "所属供应商",
      "group": "仓库基本信息",
      "notAsFilter": true
    }
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
        "key": "policyType",
        "options": OptionConstants.policyType,
        "showType": "select",
        "validator": [{ "required": true, "message": "请选择保险类型" }],
        "title": "保险类型",
      },
      {
        "key": "supplier",
        "showType": "input",
        "title": "保险公司",
        "validator": [{ "required": true, "whitespace": true, "message": "请输入保险公司" }],
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
        "title": "货物温度险保额",
        "notAsFilter": true
      },
      {
        "key": "thirdPartyPolicy",
        "showType": "number",
        "title": "第三者责任险保额",
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
  "key": "warehouse",
  "title": "仓库管理",
  "nestedIndex": 1,
  "editorSpan": 8,
  "filterSpan": 6
}