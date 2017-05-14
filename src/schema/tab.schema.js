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
          key: 'title',
          title: '窗体名',
          showType: 'input',
          validator: [{ required: true }],
        },
        {
          key: 'key',
          title: '映射表名',
          showType: 'input',
          validator: [{ required: true }],
        },
        {
          key: 'p01',
          notAsFilter: true,
          showType: 'placeholder',
        },
        {
          key: 'filterSpan',
          title: '过滤字段列宽',
          showType: 'number',
          defaultValue: 6,
          min: 4,
          max: 24
        },
        {
          key: 'editorSpan',
          title: '编辑字段列宽',
          showType: 'number',
          defaultValue: 8,
          min: 4,
          max: 24
        },
        {
          key: 'nested',
          title: '内嵌窗体',
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
      title: '表字段',
      fields: [
        {
          key: 'id',
          title: 'ID',
          showType: 'ID',
          disabled: true,
        },
        {
          key: 'key',
          title: '字段',
          showType: 'input',
        },
        {
          key: 'title',
          title: '名称',
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
          title: '非过滤条件',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'notAsColumn',
          title: '非主表字段',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'notAsEditor',
          title: '非编辑字段',
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
    },
    {
      key: 'fieldGroups',
      title: '字段组',
      fields: [
        {
          key: 'id',
          title: 'ID',
          showType: 'ID',
          disabled: true,
        },
        {
          key: 'title',
          title: '字段组名',
          showType: 'input',
        },
        {
          key: 'sorter',
          title: '顺序',
          showType: 'number',
          disabled: true
        },
      ]
    },
    {
      key: 'nesteds',
      title: '内嵌表',
      fields: [
        {
          key: 'id',
          title: 'ID',
          showType: 'ID',
          disabled: true,
        },
        {
          key: 'title',
          title: '窗体名',
          showType: 'input',
        },
        {
          key: 'key',
          title: '父表字段',
          showType: 'input',
        },
        {
          key: 'actualTab',
          title: '引用窗体',
          showType: 'select',
          options: [],
        },
        {
          key: 'disableNew',
          title: '禁用新增',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'disableEdit',
          title: '禁用编辑',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'disableRemove',
          title: '禁用删除',
          showType: 'switch',
          render: Formatter.yesOrNo
        },
        {
          key: 'sorter',
          title: '顺序',
          showType: 'number',
          disabled: true
        },
      ]
    }
  ]
}