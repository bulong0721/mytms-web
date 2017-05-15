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
			key:'cclBusinessType',
			options:[],
			showType:'select',
			title:'业务类型'
		},
		{
			key:'cclCustomerPmCode',
			showType:'input',
			title:'公司PM代码'
		},
		{
			key:'cclDeliveryArea',
			showType:'input',
			title:'配送区域'
		},
		{
			key:'cclDepartureCode',
			showType:'input',
			title:'起运地代码'
		},
		{
			key:'cclDepartureName',
			showType:'input',
			title:'起运地'
		},
		{
			key:'cclDestinationCode',
			showType:'input',
			title:'目的地代码'
		},
		{
			key:'cclDestinationName',
			notAsFilter:true,
			showType:'input',
			title:'目的地'
		},
		{
			key:'cclremark',
			notAsFilter:true,
			showType:'input',
			title:'备注'
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