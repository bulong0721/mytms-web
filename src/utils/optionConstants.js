const OptionConstants = {
  showType: [
    { key: 'input', value: 'input' },
    { key: 'radio', value: 'radio' },
    { key: 'number', value: 'number' },
    { key: 'datetime', value: 'datetime' },
    { key: 'switch', value: 'switch' },
    { key: 'select', value: 'select' },
    { key: 'cascader', value: 'cascader' },
    { key: 'actions', value: 'actions' },
    { key: 'placeholder', value: 'placeholder' },
  ],

  ownerType: [
    { key: '1', value: '自有' },
    { key: '2', value: '外包' },
  ],

  auditStatus: [
    { key: '1', value: '草稿' },
    { key: '2', value: '待审核' },
    { key: '3', value: '审核通过' },
    { key: '4', value: '驳回' },
    { key: '5', value: '已到期' },
    { key: '6', value: '即将过期' },
  ],

  vehicleType: [
    { key: '1', value: "平板车" },
    { key: '2', value: "冷藏车" },
  ],

  policyType: [
    { key: 1, value: "商业险" },
    { key: 2, value: "交强险" },
    { key: 3, value: "物流责任险" },
  ],

  bandType: [
    { key: "庆铃", value: "庆铃" },
    { key: "长安", value: "长安" },
    { key: "东风", value: "东风" },
    { key: "依维柯", value: "依维柯" },
    { key: "金杯", value: "金杯" },
    { key: "日产", value: "日产" },
    { key: "全顺", value: "全顺" },
    { key: "长安", value: "长安" },
    { key: "五菱", value: "五菱" },
    { key: "江淮", value: "江淮" },
    { key: "上汽大通", value: "上汽大通" },
    { key: "福田", value: "福田" },
    { key: "解放", value: "解放" },
    { key: "欧曼", value: "欧曼" },
    { key: "奔驰凌特", value: "奔驰凌特" },
    { key: "重汽", value: "重汽" },
    { key: "广汽", value: "广汽" },
    { key: "斯堪尼亚", value: "斯堪尼亚" },
    { key: "沃尔沃", value: "沃尔沃" },
    { key: "奔驰", value: "奔驰" },
    { key: "信源", value: "信源" },
    { key: "通华", value: "通华" },
    { key: "鲁岳牌", value: "鲁岳牌" },
    { key: "晟通", value: "晟通" },
    { key: "江铃", value: "江铃" },
    { key: "TOYOTA", value: "TOYOTA" },
    { key: "NISSAN", value: "NISSAN" },
    { key: "SUZUKI", value: "SUZUKI" },
    { key: "三菱", value: "三菱" },
    { key: "中華", value: "中華" },
    { key: "ISUZU", value: "ISUZU" },
    { key: "HONDA", value: "HONDA" },
    { key: "东南", value: "东南" },
    { key: "其他", value: "其他" },
  ],

  chillLogsType: [
    { key: '医药', value: '01' },
    { key: '餐饮', value: '02' },
    { key: '农批', value: '03' },
    { key: '生鲜', value: '04' },
  ],

  commonLogsType: [
    { value: '01', key: '商超' },
    { value: '02', key: '家电' },
    { value: '03', key: '落地配' },
    { value: '04', key: '餐饮' },
    { value: '05', key: '普货行业' },
    { value: '06', key: '家具' },
    { value: '07', key: '酒水饮料' },
    { value: '08', key: '生鲜' },
    { value: '09', key: '餐饮' },
    { value: '10', key: '印刷品' },
    { value: '11', key: '汽配' },
    { value: '12', key: '建材' },
    { value: '13', key: '服装' },
    { value: '14', key: '快递' },
    { value: '15', key: '医药' },
    { value: '16', key: '洗涤' },
  ],

  industryType: [
    { key: '1', value: '果蔬' },
    { key: '2', value: '海鲜' },
    { key: '3', value: '乳制品' },
    { key: '4', value: '餐饮' },
    { key: '5', value: '医药' },
    { key: '6', value: '肉类' },
    { key: '7', value: '冷冻食品' },
  ],

  suppilerType: [
    { key: '内资企业', value: '10' },
    { key: '国有企业', value: '20' },
    { key: '集体企业', value: '30' },
    { key: '股份合作企业', value: '40' },
    { key: '联营企业', value: '50' },
    { key: '有限责任公司', value: '60' },
    { key: '私营企业', value: '70' },
    { key: '其他企业', value: '80' },
    { key: '港、澳、台商投资企业', value: '90' },
    { key: '合资经营企业(港或澳、台资)', value: '100' },
    { key: '合作经营企业(港或澳、台资)', value: '110' },
    { key: '港、澳、台商独资经营企业', value: '120' },
    { key: '港、澳、台商投资股份有限公司', value: '130' },
    { key: '外商投资企业', value: '140' },
    { key: '中外合资经营企业', value: '150' },
    { key: '中外合作经营企业', value: '160' },
    { key: '外资企业', value: '170' },
  ],

  shipType: [
    { key: '1', value: '上游' },
    { key: '2', value: '下游' },
  ],

  ceType: [
    { key: '1', value: '视频设备' },
    { key: '2', value: '温度设备' },
    { key: '3', value: '湿度设备' },
    { key: '4', value: '温湿度设备' },
  ],

  ceManufacturer: [
    { key: '1', value: 'G7' },
    { key: '2', value: '易流' },
  ],

  sex: [
    { key: '0', value: '男' },
    { key: '1', value: '女' },
  ],

  drivingType: [
    { key: '', value: '' },
    { key: '1', value: 'A1' },
    { key: '2', value: 'B1' },
    { key: '3', value: 'C1' },
  ],

  businessType: [
    { key: '1', value: '整车' },
    { key: '2', value: '零担' },
  ],

  yesOrNo: [
    { key: 'Y', value: '是' },
    { key: 'N', value: '否' },
  ],

  chargeWay: [
    { key: '1', value: '按吨' },
    { key: '2', value: '按方' },
    { key: '3', value: '按单' },
  ],

  warehouseHeightLevel: [
    { key: '1', value: '3M以内' },
    { key: '2', value: '3-5M' },
    { key: '3', value: '5-10M' },
    { key: '4', value: '10M以上' },
  ],

  groundType: [
    { key: '1', value: '防尘' },
    { key: '2', value: '高标水泥' },
    { key: '3', value: '地砖' },
    { key: '4', value: '环氧' },
    { key: '5', value: '防潮' },
    { key: '6', value: '防静电' },
    { key: '7', value: '金刚砂' },
    { key: '8', value: '其他' },
  ],

  struct: [
    { key: '1', value: '钢混结构' },
    { key: '2', value: '彩钢结构' },
    { key: '3', value: '砖混结构' },
    { key: '4', value: '其他' },
  ],

  gradeLabel: [
    { key: '1', value: '三星' },
    { key: '2', value: '四星' },
    { key: '3', value: '五星' },
    { key: '4', value: '无' },
  ],

  firefight: [
    { key: '1', value: '喷淋' },
    { key: '2', value: '烟感' },
    { key: '3', value: '沙桶' },
    { key: '4', value: '消防栓' },
    { key: '5', value: '灭火器' },
    { key: '6', value: '消防毛毯' },
    { key: '7', value: '隔热层' },
    { key: '8', value: '消防警钟' },
    { key: '9', value: '其他' },
  ],

  matchEquipment: [
    { key: '1', value: '办公' },
    { key: '2', value: '住宿' },
    { key: '3', value: '食堂' },
    { key: '4', value: '其他' },
  ],

  security: [
    { key: '1', value: '中央监控' },
    { key: '2', value: '保安人员' },
    { key: '3', value: '警钟' },
    { key: '4', value: '全球定位' },
    { key: '5', value: '红外线' },
    { key: '6', value: '连线警报' },
    { key: '7', value: '园区安保' },
    { key: '8', value: '其他' },
  ],

  refrigerationPlant: [
    { key: '1', value: '风冷' },
    { key: '2', value: '管冷' },
    { key: '3', value: '急冻库' },
  ],

  distributionAbility: [
    { key: '1', value: '有，仅市内' },
    { key: '2', value: '有，可商讨' },
    { key: '3', value: '无' },
  ],

  cooperateVehicleType: [
    { key: '1', value: '自建车队' },
    { key: '2', value: '临时外请' },
    { key: '3', value: '固定车队' },
  ],

  hasWms: [
    { key: '1', value: '有' },
    { key: '2', value: '无，有系统需求' },
    { key: '3', value: '无，无需求' },
  ],

  balanceType: [
    { key: '1', value: '打包计费' },
    { key: '2', value: '分别计费' },
    { key: '3', value: '其他' },
  ],

  storageBalanceType: [
    { key: '1', value: '按天' },
    { key: '2', value: '按月' },
    { key: '3', value: '按季' },
    { key: '4', value: '按年' },
  ],

  storageChargeWay: [
    { key: '1', value: '按板计' },
    { key: '2', value: '按件计' },
    { key: '3', value: '按面积计' },
    { key: '4', value: '仓储打包计' },
    { key: '5', value: '其他' },
  ],

  balancePeriod: [
    { key: '1', value: '月结' },
    { key: '2', value: '季度结' },
    { key: '3', value: '现付' },
    { key: '4', value: '到付' },
  ],

  actionTarget: [
    { key: 'rows', value: '多行动作' },
    { key: 'row', value: '单行动作' },
  ],

  javaType: [
    { key: 'input', value: 'input' },
    { key: 'radio', value: 'radio' },
    { key: 'number', value: 'number' },
    { key: 'datetime', value: 'datetime' },
    { key: 'switch', value: 'switch' },
    { key: 'select', value: 'select' },
    { key: 'cascader', value: 'cascader' },
    { key: 'actions', value: 'actions' },
    { key: 'placeholder', value: 'placeholder' },
  ],
}

export default OptionConstants;