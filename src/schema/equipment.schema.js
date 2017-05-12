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
			key:'ceAuditStatus',
			showType:'input',
			title:'审核状态'
		},
		{
			key:'ceCustomerCode',
			showType:'input',
			title:'设备所属公司代码'
		},
		{
			key:'ceCustomerName',
			showType:'input',
			title:'设备所属公司名称'
		},
		{
			key:'ceCustomerPmCode',
			showType:'input',
			title:'设备所属公司PM代码'
		},
		{
			key:'ceEquipmentName',
			showType:'input',
			title:'设备名称'
		},
		{
			key:'ceEquipmentNo',
			showType:'input',
			title:'设备号'
		},
		{
			key:'ceManufacturer',
			showType:'input',
			title:'设备厂商'
		},
		{
			key:'ceOutNo',
			notAsFilter:true,
			showType:'input',
			title:'外部编号'
		},
		{
			key:'ceRemark',
			notAsFilter:true,
			showType:'input',
			title:'备注'
		},
		{
			key:'ceSerialNo',
			notAsFilter:true,
			showType:'input',
			title:'设备流水号'
		},
		{
			key:'ceSpecModel',
			notAsFilter:true,
			showType:'input',
			title:'规格/型号'
		},
		{
			key:'ceType',
			notAsColumn:true,
			notAsFilter:true,
			options:[],
			showType:'select',
			title:'设备类型'
		},
		{
			disabled:true,
			key:'id',
			notAsColumn:true,
			notAsFilter:true,
			showType:'ID',
			title:'主键'
		},
		{
			key:'pmCode',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'逻辑主键'
		}
	],
	filterSpan:6
}