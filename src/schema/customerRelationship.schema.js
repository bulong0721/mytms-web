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
			key:'ccrCustomerCode',
			showType:'input',
			title:'客户代码'
		},
		{
			key:'ccrCustomerName',
			showType:'input',
			title:'客户名称'
		},
		{
			key:'ccrCustomerPmCode',
			showType:'input',
			title:'客户PM_CODE'
		},
		{
			key:'ccrParentPmCode',
			notAsFilter:true,
			showType:'input',
			title:'父节点客户代码'
		},
		{
			key:'ccrRemark',
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