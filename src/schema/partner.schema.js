import { Tag } from 'antd';

module.exports = {
  actions: [
    { icon: 'plus-circle-o', type: 'primary', title: '新增', action: 'manager/save', popupEditor: true, },
    { icon: 'edit', title: '修改', target: 'rows', action: 'manager/save', popupEditor: true, },
    { icon: 'delete', title: '删除', target: 'rows', action: 'manager/delete' },
  ],
  fields: [
    {
      title: '基本信息',
      showType: 'collapse',
      child: [
        {
          key: 'id',
          title: '客户代码',
          showType: 'ID',
          notAsFilter: true,
          disabled: true,
        },
        {
          key: 'name',
          title: '客户名称',
          showType: 'input',
        },
        {
          key: 'nature',
          title: '公司性质',
          showType: 'select',
          options: [{ key: '1', value: '国有企业' }, { key: '2', value: '集体企业' }, { key: '3', value: '联营企业' }, { key: '4', value: '私营企业' }, { key: '5', value: '个体企业' },{ key: '6', value: '其他' }],
          defaultValue: '1',
        },
        {
          key: 'city',
          title: '所在城市',
          showType: 'cascader',
          notAsFilter: true,
        },
        {
          key: 'phone',
          title: '电话号码',
          showType: 'input',
          addonBefore: '+86',
          notAsFilter: true,
        },
        {
          key: 'industry',
          title: '行业类型',
          showType: 'select',
          options: [{ key: '1', value: '化工' }, { key: '2', value: '物流' }, { key: '3', value: '仓储' }, { key: '4', value: '商贸' }, { key: '5', value: '制造业' }, { key: '6', value: '运输' }, { key: '7', value: '其他' }],
          defaultValue: '1',
          notAsFilter: true,
        },
        {
          key: 'business',
          title: '主营业务',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
        {
          key: 'address',
          title: '地址',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'contact',
          title: '业务联系人',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
        {
          key: 'contactPhone',
          title: '联系人电话',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
        {
          key: 'contactMail',
          title: '联系人邮箱',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
      ]
    },
    {
      title: '开票信息',
      showType: 'collapse',
      child: [
        {
          key: 'taxPayerCd',
          title: '纳税人识别码',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
        {
          key: 'bankType',
          title: '开户银行',
          showType: 'select',
          options: [{ key: '1', value: '农业银行' }, { key: '2', value: '建设银行' }, { key: '3', value: '工商银行' }, { key: '3', value: '中国银行' }],
          defaultValue: '1',
          notAsFilter: true,
          notAsColumn: true,
        },
        {
          key: 'bankAccount',
          title: '银行账户',
          showType: 'input',
          notAsFilter: true,
          notAsColumn: true,
        },
      ]
    }
  ],
  subTable: {
    key: 'locations',
    title: '收发货地址',
    child: [
      {
        key: 'id',
        title: 'ID',
        showType: 'ID',
      },
      {
        key: 'name',
        title: '地址名称',
        showType: 'input',
      },
      {
        key: 'addrType',
        title: '地址类型',
        showType: 'select',
        options: [{ key: '1', value: '收货人' }, { key: '2', value: '发货人' }, { key: '3', value: '收发货人' }],
        defaultValue: '1',
      },
      {
        key: 'pcc',
        title: '省市区县',
        showType: 'cascader',
      },
      {
        key: 'address',
        title: '详细地址',
        showType: 'input',
      },
      {
        key: 'contact',
        title: '联系人',
        showType: 'input',
      },
      {
        key: 'contactPhone',
        title: '联系电话',
        showType: 'input',
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