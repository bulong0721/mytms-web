module.exports = [
  {
    key: 'customer',
    name: '客户关系管理',
    icon: 'team',
    child: [
      { key: 'customer', name: '客户管理', icon: 'user' },
      { key: 'group', name: '客户群管理', icon: 'usergroup-add' },
      { key: 'line', name: '线路管理', icon: 'share-alt' },
      { key: 'driver', name: '司机管理', icon: 'idcard' },
      { key: 'equipment', name: '设备管理', icon: 'hdd' },
      { key: 'vehicle', name: '车辆管理', icon: 'car' },
      { key: 'warehouse', name: '仓库管理', icon: 'shop' },
    ]
  },
  {
    key: 'pickup',
    name: '接送货管理',
    icon: 'shopping-cart',
    child: [
      { key: 'add', name: '运单录入', icon: 'file-add' },
      { key: 'order', name: '运单管理', icon: 'book' },
      { key: 'sign', name: '派送签收', icon: 'edit' },
    ]
  },
  {
    key: 'transfer',
    name: '运输中转',
    icon: 'share-alt',
    child: [
      { key: 'load', name: '装车配载', icon: 'hdd' },
      { key: 'depart', name: '发车管理', icon: 'rocket' },
      { key: 'arrive', name: '到达入库', icon: 'shop' },
      { key: 'outsource', name: '中转外包', icon: 'export' },
    ]
  },
  {
    key: 'base',
    name: '营运综合',
    icon: 'compass',
    child: [
      { key: 'partner', name: '客户管理', icon: 'contacts' },
      { key: 'vehicle', name: '车辆管理', icon: 'car' },
      { key: 'driver', name: '司机管理' , icon: 'user'},
      { key: 'track', name: '跟踪管理', icon: 'environment-o' },
      { key: 'receipt', name: '回单管理', icon: 'copy' },
    ]
  },
  {
    key: 'report',
    name: '报表分析',
    icon: 'area-chart',
    child: [
      { key: 'simple', name: '基础报表', icon: 'file-text' },
      { key: 'payment', name: '收支明细', icon: 'calendar' },
      { key: 'waybill', name: '运单指标', icon: 'api' },
      { key: 'transport', name: '运输指标', icon: 'schedule' },
      { key: 'profit', name: '运单损益', icon: 'line-chart' },
    ]
  },
  {
    key: 'settle',
    name: '财务结算',
    icon: 'red-envelope',
    child: [
      { key: 'statement', name: '对账管理', icon: 'laptop' },
      { key: 'cash', name: '现金管理', icon: 'pay-circle-o' },
      { key: 'revenue', name: '收入管理', icon: 'download' },
      { key: 'expense', name: '开支管理', icon: 'upload' },
    ]
  },
  {
    key: 'system',
    name: '系统管理',
    icon: 'setting',
    child: [
      { key: 'client', name: '编辑资料', icon: 'home' },
      { key: 'organization', name: '分站管理', icon: 'shop' },
      { key: 'employee', name: '员工管理', icon: 'user' },
      { key: 'account', name: '账号管理', icon: 'solution' },
    ]
  },
  {
    key: 'scaffold',
    name: '开发工具',
    icon: 'tool',
    child: [
      // { key: 'table', name: '表管理', icon: 'book' },
      { key: 'newTab', name: '新建窗体', icon: 'api' },
      { key: 'tab', name: '窗体管理', icon: 'layout' },
    ]
  },
]