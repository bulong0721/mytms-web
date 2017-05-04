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
          title: '登录名',
          showType: 'normal',
        },
        {
          key: 'userName',
          title: '姓名',
          showType: 'normal',
          render: (text) => <Tag color="pink">{text}</Tag>
        },
        {
          key: 'email',
          title: '电子邮件',
          showType: 'normal',
          notAsFilter: true,
        },

        {
          key: 'mobile',
          title: '电话号码',
          showType: 'normal',
          addonBefore: '+86',
          notAsFilter: true,
        },
        {
          key: 'lastLoginTime',
          title: '最后登录时间',
          showType: 'datetime',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP',
          title: '最后登录IP',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'userType',
          title: '用户类型',
          showType: 'select',
          options: [{ key: '1', value: '普通用户' }, { key: '2', value: '管理员' }, { key: '3', value: '超级管理员' }],
          defaultValue: '1',
        },
        {
          key: 'status',
          title: '状态',
          showType: 'switch',
          checkedChildren: '激活',
          unCheckedChildren: '冻结',
          defaultValue: true,
        },
      ]
    }
  ],
}