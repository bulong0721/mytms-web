import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
	actions:[
		{
			action:'manager/save',
			icon:'plus-circle-o',
			popupEditor:true,
			title:'新增',
			type:'primary'
		}
	],
	editorSpan:8,
	fields:[
		{
			key:'ccgAddress',
			showType:'input',
			title:'办公地址'
		},
		{
			key:'ccgCompany',
			showType:'input',
			title:'公司名称'
		},
		{
			key:'ccgContact',
			showType:'input',
			title:'联系人'
		},
		{
			key:'ccgContactPhone',
			showType:'input',
			title:'联系方式'
		},
		{
			key:'ccgCooperaPeriod',
			showType:'input',
			title:'合作年限'
		},
		{
			key:'ccgCustomerPmCode',
			notAsFilter:true,
			showType:'input',
			title:'客户PM代码'
		},
		{
			key:'ccgManagementIndustry',
			notAsFilter:true,
			showType:'input',
			title:'经营行业'
		},
		{
			key:'ccgPortfolio',
			notAsFilter:true,
			showType:'input',
			title:'业务量'
		},
		{
			key:'ccgRemark',
			notAsFilter:true,
			showType:'input',
			title:'备注'
		},
		{
			key:'ccgType',
			notAsFilter:true,
			options:[],
			showType:'select',
			title:'关系类型'
		},
		{
			disabled:true,
			key:'id',
			notAsFilter:true,
			showType:'ID',
			title:'主键'
		},
		{
			key:'pmCode',
			notAsFilter:true,
			showType:'input',
			title:'逻辑主键'
		}
	],
	filterSpan:6
}