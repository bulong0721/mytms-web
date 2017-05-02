module.exports = {
  actions: [
    { icon: 'plus-circle-o', title: '新增主机', type: 'primary', action: 'manager/save', popupEditor: true, },
    { icon: 'plus-circle-o', title: '新增主机组', action: 'monitor/toHostGroup' },
  ],
  fields: [
    {
      title: '基本信息',
      showType: 'collapse',
      child: [
        {
          key: 'host',
          title: '主机',
          showType: 'input',
        },
        {
          key: 'ip',
          title: 'IP地址',
          showType: 'input',
        },
        {
          key: 'port',
          title: '端口',
          showType: 'number',
          notAsFilter: true,
        },]
    },
    {
      title: '详细信息',
      showType: 'collapse',
      activeKey: 'none',
      child: [
        {
          key: 'enabled',
          title: '可用项',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'items',
          title: '监控项数',
          showType: 'number',
          notAsFilter: true,
        },
        {
          key: 'triggers',
          title: '触发器数',
          showType: 'number',
          notAsFilter: true,
        },
        {
          key: 'actived',
          title: '状态',
          showType: 'switch',
          checkedChildren: '激活',
          unCheckedChildren: '冻结',
          defaultValue: true,
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