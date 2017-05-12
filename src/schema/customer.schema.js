import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
	actions: [
		{
			action: 'manager/save',
			icon: 'plus-circle-o',
			popupEditor: true,
			title: '新增',
			type: 'primary'
		}
	],
	editorSpan: 8,
	fields: [
		{
			key: 'ccAbbrev',
			showType: 'input',
			title: '公司简称'
		},
		{
			key: 'ccAreaCode',
			showType: 'input',
			title: '区代码'
		},
		{
			key: 'ccAreaName',
			showType: 'input',
			title: '区名称'
		},
		{
			key: 'ccAuditStatus',
			notAsFilter: true,
			showType: 'input',
			title: '审核状态'
		},
		{
			key: 'ccAuditor',
			notAsFilter: true,
			showType: 'input',
			title: '审核人'
		},
		{
			key: 'ccBankAccount',
			notAsFilter: true,
			showType: 'input',
			title: '公司开户行'
		},
		{
			key: 'ccBankAccountName',
			notAsFilter: true,
			showType: 'input',
			title: '公司银行账户名称'
		},
		{
			key: 'ccBankCardNo',
			notAsFilter: true,
			showType: 'input',
			title: '公司银行卡号'
		},
		{
			key: 'ccBusinessCover',
			notAsFilter: true,
			showType: 'input',
			title: '业务覆盖区域'
		},
		{
			key: 'ccBusinessScope',
			notAsFilter: true,
			showType: 'input',
			title: '经营范围'
		},
		{
			key: 'ccBusinessType',
			notAsColumn: true,
			notAsFilter: true,
			options: [],
			showType: 'select',
			title: '经营类型'
		},
		{
			key: 'ccCityCode',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '市代码'
		},
		{
			key: 'ccCityName',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '市名称'
		},
		{
			key: 'ccCompanyType',
			notAsColumn: true,
			notAsFilter: true,
			options: [],
			showType: 'select',
			title: '企业类型'
		},
		{
			key: 'ccCorporation',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '法定代表人'
		},
		{
			key: 'ccCustomerCode',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '公司编码'
		},
		{
			key: 'ccCustomerName',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '公司名称'
		},
		{
			key: 'ccCustomerType',
			notAsColumn: true,
			notAsFilter: true,
			options: [],
			showType: 'select',
			title: '客户类型'
		},
		{
			key: 'ccDeliveryType',
			notAsColumn: true,
			notAsFilter: true,
			options: [],
			showType: 'select',
			title: '送货方式'
		},
		{
			key: 'ccEmployeeNum',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'number',
			title: '雇员数量'
		},
		{
			key: 'ccFax',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '公司传真'
		},
		{
			key: 'ccFreezerArea',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '冷库总面积'
		},
		{
			key: 'ccFreezerVolume',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '冷库总容积'
		},
		{
			key: 'ccHasCar',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '是否拥有车辆'
		},
		{
			key: 'ccHasQms',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '是否有质量管理系统证书'
		},
		{
			key: 'ccHasWh',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '是否拥有仓库'
		},
		{
			key: 'ccIndustryExperience',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '行业经验'
		},
		{
			key: 'ccInvoiceType',
			notAsColumn: true,
			notAsFilter: true,
			options: [],
			showType: 'select',
			title: '发票类型'
		},
		{
			key: 'ccIsCcir',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '是否提供商品检验报告'
		},
		{
			key: 'ccIsProductProcessing',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '是否进行产品加工'
		},
		{
			key: 'ccLatitude',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '纬度'
		},
		{
			key: 'ccLongitude',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '经度'
		},
		{
			key: 'ccNetworkNum',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'number',
			title: '网点数量'
		},
		{
			key: 'ccOfficeAddress',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '办公地址'
		},
		{
			key: 'ccOrganizationNo',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '组织机构代码'
		},
		{
			key: 'ccOwncarNum',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'number',
			title: '自有车数量'
		},
		{
			key: 'ccPhone',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '公司电话'
		},
		{
			key: 'ccPostalCode',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '公司邮编'
		},
		{
			key: 'ccProductLife',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '产品生产年限'
		},
		{
			key: 'ccProductionLicense',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '生产许可证号'
		},
		{
			key: 'ccProfile',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '公司简介'
		},
		{
			key: 'ccProvinceCode',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '省代码'
		},
		{
			key: 'ccProvinceName',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '省名称'
		},
		{
			key: 'ccProxyArea',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '代理区域'
		},
		{
			key: 'ccProxyDeadline',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'datetime',
			title: '代理有限期截止'
		},
		{
			key: 'ccProxyNo',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '代理授权证书号'
		},
		{
			key: 'ccPyCode',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '拼音编码'
		},
		{
			key: 'ccRefrigeratNum',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'number',
			title: '冷藏'
		},
		{
			key: 'ccRegisterAddress',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '注册地址'
		},
		{
			key: 'ccRegisterCapital',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '注册资本'
		},
		{
			key: 'ccRegisterNo',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '注册号'
		},
		{
			key: 'ccRemark',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '备注'
		},
		{
			key: 'ccSupplyIndustry',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '供应行业'
		},
		{
			key: 'ccTaxrate',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '税率'
		},
		{
			key: 'ccTfnNo',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '税务登记号'
		},
		{
			key: 'ccWebsite',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '公司官网'
		},
		{
			key: 'ccWhArea',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '仓库总面积'
		},
		{
			key: 'ccWhNetworkNum',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'number',
			title: '仓库网点数'
		},
		{
			key: 'ccWhNum',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'number',
			title: '仓库数量'
		},
		{
			key: 'ccWhVolume',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '仓库总容积'
		},
		{
			disabled: true,
			key: 'id',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'ID',
			title: '主键'
		},
		{
			key: 'imageBank',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '银行开户许可'
		},
		{
			key: 'imageCold',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '冷库图片'
		},
		{
			key: 'imageLicense',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '营业执照图片'
		},
		{
			key: 'imageLogo',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '企业logo图片'
		},
		{
			key: 'imageOrgan',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '组织机构图片'
		},
		{
			key: 'imagePolicy',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '保单扫描图片'
		},
		{
			key: 'imageTax',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '税务登记照片'
		},
		{
			key: 'imageTransport',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '道路运输图片'
		},
		{
			key: 'imageWarehouse',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '仓库图片'
		},
		{
			key: 'pmCode',
			notAsColumn: true,
			notAsFilter: true,
			showType: 'input',
			title: '逻辑主键'
		}
	],
	filterSpan: 6
}