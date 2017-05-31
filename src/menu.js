module.exports = [
  {
    key: 'customer',
    name: '客户管理',
    icon: 'team',
    child: [
      { key: 'group', name: '客户群管理', icon: 'usergroup-add' },
      { key: 'customer', name: '客户管理', icon: 'user' },
    ]
  },
  {
    key: 'suppiler',
    name: '供应商管理',
    icon: 'contacts',
    child: [
      { key: 'thridly', name: '三方供应商', icon: 'skin' },
      { key: 'fleet', name: '车队供应商', icon: 'car' },
      { key: 'private', name: '个体供应商', icon: 'compass' },
    ]
  },
  {
    key: 'assets',
    name: '资源管理',
    icon: 'wallet',
    child: [
      { key: 'vehicle', name: '车辆管理', icon: 'car' },
      { key: 'warehouse', name: '仓库管理', icon: 'shop' },
      { key: 'equipment', name: '设备管理', icon: 'hdd' },
      { key: 'driver', name: '司机管理', icon: 'idcard' },
      { key: 'line', name: '线路管理', icon: 'share-alt' },
    ]
  },
  {
    key: 'develop',
    name: '开发工具',
    icon: 'tool',
    child: [
      { key: 'newTab', name: '新建窗体', icon: 'api' },
      { key: 'tab', name: '窗体管理', icon: 'layout' },
    ]
  },
]