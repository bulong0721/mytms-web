import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';
import ImportTable from '../routes/scaffold/importTable';

module.exports = {
  actions: [
    { icon: 'plus-circle-o', title: '新增', type: 'primary', action: 'manager/save', component: ImportTable, },
  ],
  fields: [
    {
      title: '基本信息',
      showType: 'collapse',
      child: [
        {
          key: 'id',
          title: 'ID',
          showType: 'ID',
          disabled: true,
        },
        {
          key: 'key',
          title: '表名',
          showType: 'input',
          validator: [{ required: true }],
        },
        {
          key: 'title',
          title: '标题',
          showType: 'input',
        },
        {
          key: 'active',
          title: '激活',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          showType: 'actions',
          title: '操作',
          width: 120,
          actions: [
            { icon: 'edit', title: '修改', action: 'manager/save', popupEditor: true },
            { icon: 'delete', title: '删除', action: 'manager/delete' },
          ]
        }
      ]
    }
  ],
  nestedTables: [
    {
      key: 'columns',
      title: '列',
      disableNew: true,
      fields: [
        {
          key: 'id',
          title: 'ID',
          showType: 'ID',
          disabled: true,
        },
        {
          key: 'key',
          title: '列名',
          showType: 'input',
        },
        {
          key: 'title',
          title: '注释',
          showType: 'input',
        },
        {
          key: 'javaType',
          title: '类型',
          showType: 'select',
          options: OptionConstants.showType,
          defaultValue: 'input'
        },
        {
          key: 'size',
          title: '大小',
          showType: 'number',
        },
        {
          key: 'primary',
          title: '主键',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'notNull',
          title: '必需',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'sorter',
          title: '顺序',
          showType: 'number',
        },
      ]
    }
  ]
}