import { Tag } from 'antd';

module.exports = {
  actions: [
    { icon: 'plus-circle-o', type: 'primary', title: '新增', action: 'manager/save', popupEditor: true, },
  ],
  fields: [
    {
      title: '运单信息',
      showType: 'collapse',
      child: [
        {
          key: 'loginName',
          title: '运单号',
          showType: 'ID',
        },
        {
          key: 'userName',
          title: '客户',
          showType: 'select',
          options: [{ key: '1', value: '6T' }, { key: '2', value: '10T' }, { key: '3', value: '12T' }, { key: '4', value: '14T' }, { key: '5', value: '18T' }, { key: '6', value: '22T' }],
          defaultValue: '1',
        },
        {
          key: 'email',
          title: '运输类型',
          showType: 'select',
          options: [{ key: '1', value: '公路' }, { key: '2', value: '海运' }, { key: '3', value: '空运' }, { key: '4', value: '铁路' },],
          defaultValue: '1',
          notAsFilter: true,
        },
        {
          key: 'mobile',
          title: '运输模式',
          showType: 'select',
          options: [{ key: '1', value: '零担' }, { key: '2', value: '整车' }],
          defaultValue: '1',
          notAsColumn: true,
        },
        {
          key: 'lastLoginTime',
          title: '车辆要求',
          showType: 'select',
          options: [{ key: '1', value: '4.2米' }, { key: '2', value: '6.5米' }, { key: '3', value: '9.6米' }, { key: '4', value: '其他' }],
          defaultValue: '1',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'ph01',
          showType: 'placeholder',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP',
          title: '提货方式',
          showType: 'select',
          options: [{ key: '1', value: '送货上门' }, { key: '2', value: '上门提货' },],
          defaultValue: '1',
        },
        {
          key: 'userType',
          title: '要求提货时间',
          showType: 'datetime',
          notAsFilter: true,
        },
        {
          key: 'status',
          title: '配送方式',
          showType: 'select',
          options: [{ key: '1', value: '自提' }, { key: '2', value: '配送' }, { key: '3', value: '等通知配送' },],
          defaultValue: '1',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPa',
          title: '要求送达时间',
          showType: 'datetime',
          notAsColumn: true,
          notAsFilter: true,
        },]
    },
    {
      title: '收发货信息',
      showType: 'collapse',
      child: [
        {
          key: 'lastLoginIPc',
          title: '发货人',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPd',
          title: '联系方式',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPe',
          title: '发货地址',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPf',
          title: '保存为发货人',
          showType: 'switch',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPg',
          title: '收货人',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPd1',
          title: '联系方式',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPh',
          title: '收货地址',
          showType: 'number',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPf0',
          title: '保存为收货人',
          showType: 'switch',
          notAsColumn: true,
          notAsFilter: true,
        },
      ]
    },
    {
      title: '增值服务',
      showType: 'collapse',
      child: [
        {
          key: 'lastLoginIPi',
          title: '付款方式',
          showType: 'select',
          options: [{ key: '1', value: '现付' }, { key: '2', value: '到付' }, { key: '3', value: '回单付' }, { key: '4', value: '月结' },],
          defaultValue: '1',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPj',
          title: '运费',
          showType: 'number',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIPk',
          title: '现付运费',
          showType: 'number',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP',
          title: '到付运费',
          showType: 'number',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP2',
          title: '代收货款',
          showType: 'switch',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP30',
          title: '代收金额',
          showType: 'number',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP49',
          title: '收款账户',
          showType: 'input',
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP58',
          title: '联系方式',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP57',
          title: '银行账号',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP56',
          title: '开户行',
          showType: 'input',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP55',
          title: '货物保价',
          showType: 'switch',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP54',
          title: '保价声明价值',
          showType: 'number',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP53',
          title: '保价金额',
          showType: 'number',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP52',
          title: '返单类型',
          showType: 'select',
          options: [{ key: '1', value: '电子' }, { key: '2', value: '实物' }, { key: '3', value: '出库单' },],
          defaultValue: '1',
          notAsColumn: true,
          notAsFilter: true,
        },
        {
          key: 'lastLoginIP51',
          title: '增值服务',
          showType: 'select',
          mode: 'multiple',
          options: [{ key: '1', value: '短信通知' }, { key: '2', value: '额外点提货' }, { key: '3', value: '站点卸货' }, { key: '4', value: '签收回单' }, { key: '5', value: '站点装货' }, { key: '6', value: '更换包装' }, { key: '7', value: '额外点配送' }, { key: '8', value: '配送服务' }, { key: '9', value: '接货服务' },],
          notAsColumn: true,
          notAsFilter: true,
        },
      ]
    }
  ],
  subTable: {
    key: 'lines',
    title: '货物信息',
    position: 2,
    child: [
      {
        key: 'id',
        title: '行号',
        showType: 'ID',
      },
      {
        key: 'name',
        title: '货物',
        showType: 'input',
      },
      {
        key: 'addrType',
        title: '包装单位',
        showType: 'select',
        options: [{ key: '1', value: '件' }, { key: '2', value: '包' }, { key: '3', value: '箱' }, { key: '4', value: '托' }],
        defaultValue: '1',
      },
      {
        key: 'pcc',
        title: '件数',
        showType: 'number',
      },
      {
        key: 'address',
        title: '重量(Kg)',
        showType: 'number',
      },
      {
        key: 'contact',
        title: '体积(m³)',
        showType: 'number',
      },
      {
        key: 'contactPhone',
        title: '单价',
        showType: 'number',
      },
      {
        key: 'contactPhone2',
        title: '金额',
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