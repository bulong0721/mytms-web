module.exports = {
  actions: [
    { icon: 'plus-circle-o', title: '新增', type: 'primary', action: 'app/handleMgrTest', popupEditor: true, },
  ],
  fields: [
    {
      title: '基本信息',
      showType: 'collapse',
      child: [
        {
          key: 'name',
          title: '名称',
          showType: 'input',
        },
        {
          key: 'ip',
          title: 'IP地址',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'port',
          title: '端口',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'hosts',
          title: '主机数',
          showType: 'number',
          disabled: true,
          notAsFilter: true,
        },
        {
          key: 'items',
          title: '监控数',
          disabled: true,
          showType: 'number',
          notAsFilter: true,
        },
        {
          key: 'description',
          title: '描述',
          showType: 'input',
          rows: 3,
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