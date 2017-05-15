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
			key:'cwAddress',
			showType:'input',
			title:'地址'
		},
		{
			key:'cwAreaCode',
			showType:'input',
			title:'区代码'
		},
		{
			key:'cwAreaName',
			showType:'input',
			title:'区名称'
		},
		{
			key:'cwCityCode',
			notAsFilter:true,
			showType:'input',
			title:'市代码'
		},
		{
			key:'cwCityName',
			notAsFilter:true,
			showType:'input',
			title:'市名称'
		},
		{
			key:'cwCustomerCode',
			notAsFilter:true,
			showType:'input',
			title:'供应商代码'
		},
		{
			key:'cwCustomerName',
			notAsFilter:true,
			showType:'input',
			title:'供应商名称'
		},
		{
			key:'cwCustomerPmCode',
			notAsFilter:true,
			showType:'input',
			title:'供应商PM代码'
		},
		{
			key:'cwFireAccept',
			notAsFilter:true,
			showType:'input',
			title:'消防验收证明图片'
		},
		{
			key:'cwFirefight',
			notAsFilter:true,
			showType:'input',
			title:'消防'
		},
		{
			key:'cwGradeLabel',
			notAsFilter:true,
			showType:'input',
			title:'等级标签'
		},
		{
			key:'cwLatitude',
			notAsFilter:true,
			showType:'input',
			title:'cwLatitude'
		},
		{
			key:'cwLongitude',
			notAsFilter:true,
			showType:'input',
			title:'cwLongitude'
		},
		{
			key:'cwMatchEquipment',
			notAsFilter:true,
			showType:'input',
			title:'配套设备'
		},
		{
			key:'cwOperatePermit',
			notAsFilter:true,
			showType:'input',
			title:'仓库经营许可证图'
		},
		{
			key:'cwPropertyPhoto',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'产权证明图片'
		},
		{
			key:'cwProvinceCode',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'省代码'
		},
		{
			key:'cwProvinceName',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'省名称'
		},
		{
			key:'cwRemark',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'备注'
		},
		{
			key:'cwRentalAgreement',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓库租赁协议图片'
		},
		{
			key:'cwSecurity',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'安保'
		},
		{
			key:'cwWhArea',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓库面积'
		},
		{
			key:'cwWhCubage',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓库容积'
		},
		{
			key:'cwWhGround',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓内地面'
		},
		{
			key:'cwWhHeight',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓内高度'
		},
		{
			key:'cwWhName',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓库名称'
		},
		{
			key:'cwWhNo',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓库编码'
		},
		{
			key:'cwWhOperate',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓内运营'
		},
		{
			key:'cwWhPhoto',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓库照片'
		},
		{
			key:'cwWhPlan',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'仓库平面图'
		},
		{
			key:'cwWhStructure',
			notAsColumn:true,
			notAsFilter:true,
			showType:'input',
			title:'主体结构'
		},
		{
			key:'cwWhType',
			notAsColumn:true,
			notAsFilter:true,
			options:[],
			showType:'select',
			title:'仓库类型'
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