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
          key: 'name',
          title: '实例名',
          showType: 'input',
        },
        {
          key: 'type',
          title: '类型',
          showType: 'select',
          options: [{ key: '1', value: 'nginx' }, { key: '2', value: 'mongodb' }, { key: '3', value: 'redis' }, { key: '4', value: 'kafka' }],
          defaultValue: '1',
        },
        {
          key: 'creator',
          title: '创建人',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'ref',
          title: '关联应用',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'indicator',
          title: '关联指标',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'warnings',
          title: '告警数',
          showType: 'number',
          notAsFilter: true,
        },
      ]
    }
  ]
}