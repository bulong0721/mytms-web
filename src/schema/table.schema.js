import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  actions: [
    { icon: 'plus-circle-o', title: '新增', type: 'primary', action: 'manager/save', popupEditor: true, },
    { icon: 'upload', title: '导入字段', action: 'manager/save', popupEditor: true, },
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
          key: 'tableName',
          title: '表名',
          showType: 'input',
          validator: [{ required: true }],
        },
        {
          key: 'useFor',
          title: '用于',
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
      key: 'fields',
      tableName: 'field',
      title: '字段',
      fields: [
        {
          key: 'id',
          title: 'ID',
          showType: 'ID',
          disabled: true,
        },
        {
          key: 'name',
          title: '字段名',
          showType: 'input',
        },
        {
          key: 'title',
          title: '标题',
          showType: 'input',
        },
        {
          key: 'showType',
          title: '显示类型',
          showType: 'select',
          options: OptionConstants.showType,
          defaultValue: 'input'
        },
        {
          key: 'notAsFilter',
          title: '过滤条件',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'notAsColumn',
          title: '主表列',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'notAsEditor',
          title: '编辑字段',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'disabled',
          title: '只读字段',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
      ]
    }
  ]
}