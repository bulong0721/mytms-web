import { Tag } from 'antd';

module.exports = {
  actions: [
    { icon: 'plus-circle-o', type: 'primary', title: '新增', action: 'manager/save', popupEditor: true, },
  ],
  fields: [
    {
      title: '基本信息',
      showType: 'collapse',
      child: [
        {
          key: 'loginName',
          title: '车牌号',
          showType: 'ID',
        },
        {
          key: 'userName',
          title: '车型',
          showType: 'select',
          options: [{ key: 1, value: '6T' }, { key: 2, value: '10T' }, { key: 3, value: '12T' }, { key: 4, value: '14T' }, { key: 5, value: '18T' }, { key: 6, value: '22T' }],
          defaultValue: 1,
        },
        {
          key: 'email',
          title: '主驾',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'mobile',
          title: '车辆归属',
          showType: 'select',
          options: [{ key: 1, value: '自有' }, { key: 2, value: '租赁' }, { key: 3, value: '临时' },],
          defaultValue: 1,
          notAsColumn: true,
        },
        {
          key: 'lastLoginTime',
          title: '适用范围',
          showType: 'select',
          options: [{ key: 1, value: '自有' }, { key: 2, value: '上级共享' }, { key: 3, value: '下级共享' }, { key: 4, value: '同级共享' }],
          defaultValue: 1,
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP',
          title: '适运货物',
          showType: 'select',
          options: [{ key: 1, value: '普通货' }, { key: 2, value: '温控货' }, { key: 3, value: '危险品' },],
          defaultValue: 1,
        },
        {
          key: 'userType',
          title: '车辆类型',
          showType: 'select',
          options: [{ key: 1, value: '厢式车' }, { key: 2, value: '敞篷车' }, { key: 3, value: '微型货车' }, { key: 4, value: '面包车' }],
          defaultValue: 1,
          notAsFilter: true,
        },
        {
          key: 'status',
          title: '车辆品牌',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPa',
          title: '车身长（米）',
          showType: 'number',
          max: 60,
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPb',
          title: '车牌颜色',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPc',
          title: '行驶证号',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPd',
          title: '车辆营运证号',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPe',
          title: '注册地点',
          showType: 'cascader',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPf',
          title: '发动机编号',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPg',
          title: '车架号',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPh',
          title: '核载重量（吨）',
          showType: 'number',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPi',
          title: '购车日期',
          showType: 'datetime',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPj',
          title: '燃料类型',
          showType: 'select',
          options: [{ key: 1, value: '汽油' }, { key: 2, value: '柴油' }],
          defaultValue: 1,
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPk',
          title: '额定油耗（L/100Km）',
          showType: 'number',
          notAsColumn: true,
          notAsFilter: true,
        },
      ]
    },
    {
      title: '设备信息',
      showType: 'collapse',
      child: [
        {
          key: 'lastLoginIP',
          title: '设备编号',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP2',
          title: '安装GPS设备',
          showType: 'switch',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP3',
          title: 'GPS厂商',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP4',
          title: '安装尾板',
          showType: 'switch',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP5',
          title: '尾板厂商',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
      ]
    }
  ]
}