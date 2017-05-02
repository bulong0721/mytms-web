module.exports = {
  actions: [
    { icon: 'plus-circle-o', title: '新增', type: 'primary', action: 'manager/save', popupEditor: true, },
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
          disabled: false,
        },
        {
          key: 'host',
          title: '主机',
          showType: 'input',
        },
        {
          key: 'ip',
          title: 'IP地址',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'web',
          title: 'WEB名称',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'url',
          title: 'URL',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'status',
          title: '检查状态',
          showType: 'number',
          notAsFilter: true,
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
  subTable: {
    key: 'steps',
    title: '步骤',
    child: [
      {
        key: 'id',
        title: 'ID',
        showType: 'ID',
        disabled: false,
      },
      {
        key: 'name',
        title: '名称',
        showType: 'input',
      },
      {
        key: 'url',
        title: 'URL',
        showType: 'input',
      },
      {
        key: 'post',
        title: 'Post',
        showType: 'input',
      },
      {
        key: 'timeout',
        title: '超时',
        showType: 'number',
      },
      {
        key: 'result',
        title: '返回值',
        showType: 'input',
      },
      {
        key: 'code',
        title: '状态码',
        showType: 'number',
      },
      {
        showType: 'actions',
        title: '操作',
        width: 150,
        actions: [
          { icon: 'edit', title: '修改', action: 'app/handleMgrTest', popupEditor: true },
          { icon: 'delete', title: '删除', action: 'app/handleMgrTest' },
        ]
      }
    ]
  }
}