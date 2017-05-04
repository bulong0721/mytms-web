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
          title: '司机编号',
          showType: 'ID',
        },
        {
          key: 'userName',
          title: '司机名称',
          showType: 'input',
        },
        {
          key: 'email',
          title: '人员性质',
          showType: 'select',
          options: [{ key: '1', value: '自有' }, { key: '2', value: '合同' }, { key: '3', value: '临时' }],
          defaultValue: '1',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'mobile',
          title: '身份证号',
          showType: 'input',
          notAsColumn: true,
        },
        {
          key: 'lastLoginTime',
          title: '手机号',
          showType: 'input',
        },
        {
          key: 'lastLoginIP',
          title: '开通APP账号',
          showType: 'switch',
          notAsFilter: true,
        },
        {
          key: 'userType',
          title: '驾驶证类型',
          showType: 'select',
          options: [{ key: '1', value: 'A1' }, { key: '2', value: 'A2' }, { key: '3', value: 'A3' }, { key: '4', value: 'B1' }, { key: '5', value: 'B2' }, { key:'6', value: 'C1' }],
          defaultValue: '1',
        },
        {
          key: 'status',
          title: '驾驶证号',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPa',
          title: '驾龄',
          showType: 'number',
          max: 60,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPb',
          title: '性别',
          showType: 'select',
          options: [{ key: '1', value: '男' }, { key: '2', value: '女' },],
          defaultValue: '1',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPc',
          title: '出生日期',
          showType: 'datetime',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPd',
          title: '婚姻状况',
           showType: 'select',
          options: [{ key: '1', value: '未婚' }, { key: '2', value: '已婚' },],
          defaultValue: '1',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPe',
          title: '民族',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPf',
          title: '籍贯',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPg',
          title: '学历',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
        {
          key: 'lastLoginIPh',
          title: '紧急联系人',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
        {
          key: 'lastLoginIPi',
          title: '紧急电话',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
        {
          key: 'lastLoginIPj',
          title: '户口地址',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPk',
          title: '居住地址',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
      ]
    },
  ]
}