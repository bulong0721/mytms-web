module.exports = module.exports = [
  {
    key: 'dashboard',
    name: '我的主页',
    icon: 'appstore-o',
    child: [
      { key: 'dashboard', name: '监控概览' },
      { key: 'alert', name: '我的告警' },
    ]
  },
  {
    key: 'monitor',
    name: '监控管理',
    icon: 'desktop',
    child: [
      { key: 'device', name: '设备管理' },
      { key: 'item', name: '监控组件' },
      { key: 'website', name: '网站监控' },
      { key: 'template', name: '监控模板' },
    ]
  },
  {
    key: 'report',
    name: '数据&报表',
    icon: 'area-chart',
    child: [
      { key: 'base', name: '基本图表' },
      { key: 'topo', name: '设备拓扑图' },
      { key: 'host', name: '主机图表' },
      { key: 'network', name: '网络图表' },
      { key: 'oracle', name: 'Oracle图表' },
      { key: 'alert', name: '告警分析' },
    ]
  },
  {
    key: 'log',
    name: '日志管理',
    icon: 'exception',
    child: [
      { key: 'database', name: '日志数据库' },
      { key: 'search', name: '日志搜索' },
      { key: 'application', name: '应用日志' },
      { key: 'network', name: '网络流量' },
    ]
  },
  {
    key: 'system',
    name: '系统管理',
    icon: 'setting',
    child: [
      { key: 'agent', name: '代理管理' },
      { key: 'alert', name: '报警配置' },
      { key: 'hostGroup', name: '主机组管理' },
      { key: 'userGroup', name: '用户组管理' },
      { key: 'user', name: '用户管理' },
    ]
  },
  {
    key: 'help',
    name: '系统帮助',
    icon: 'question-circle-o',
    child: [
      { key: 'agent', name: 'Agent安装' },
    ]
  },
]
