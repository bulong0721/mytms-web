import { Tag } from 'antd';

module.exports = {
  actions: [
    { icon: 'plus-circle-o', type: 'primary', title: '新增', action: 'manager/save', popupEditor: true, },
    { icon: 'edit', title: '修改', target: 'rows', action: 'manager/save', popupEditor: true, },
    { icon: 'delete', title: '删除', target: 'rows', action: 'manager/delete' },
  ],
  fields: [
    {
      key: 'login',
      title: '登录名',
      showType: 'normal',
    },
    {
      key: 'name',
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
      key: 'phoneNumber',
      title: '电话号码',
      showType: 'normal',
      addonBefore: '+86',
      notAsFilter: true,
    },
    {
      key: 'dateLogined',
      title: '最后登录时间',
      showType: 'datetime',
      notAsFilter: true,
    },
    {
      key: 'ipLogined',
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
      key: 'actived',
      title: '状态',
      showType: 'switch',
      checkedChildren: '激活',
      unCheckedChildren: '冻结',
      defaultValue: true,
    },
  ]
}