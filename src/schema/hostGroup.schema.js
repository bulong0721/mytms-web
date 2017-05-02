module.exports = {
  actions: [
    { icon: 'plus-circle-o', type: 'primary', title: '新增', action: 'manager/save', popupEditor: true },
    { icon: 'edit', title: '修改', action: 'import', target: 'rows', action: 'manager/save', popupEditor: true },
    { icon: 'delete', title: '删除', action: 'import', target: 'rows', action: 'manager/delete', },
  ],
  fields: [
    {
      title: '基本信息',
      showType: 'collapse',
      child: [
        {
          key: 'name',
          title: '主机组名称',
          showType: 'normal',
        },
        {
          key: 'description',
          title: '描述',
          showType: 'input',
          notAsFilter: true,
        },
      ]
    },
    {
      key: 'singleRecordActions',
      showType: 'actions',
      title: '操作',
      notAsFilter: true,
      width: 150,
      actions: [
        { icon: 'edit', title: '修改', action: 'manager/save', popupEditor: true },
        { icon: 'delete', title: '删除', action: 'manager/delete' },
      ]
    }
  ]
}