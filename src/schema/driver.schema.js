import { Formatter, Parser } from '../utils/columnRender';
import OptionConstants from '../utils/optionConstants';

module.exports = {
  "actions": [],
  "fields": [
    {
      "key": "ID",
      "notAsFilter": true,
      "showType": "input",
      "title": "主键",
      "group": "基本信息"
    },
    {
      "key": "PM_CODE",
      "notAsFilter": true,
      "showType": "input",
      "title": "逻辑主键",
      "group": "基本信息"
    },
    {
      "key": "CCL_CUSTOMER_PM_CODE",
      "notAsFilter": true,
      "showType": "input",
      "title": "公司PM代码",
      "group": "基本信息"
    },
    {
      "key": "CCL_DEPARTURE_CODE",
      "showType": "input",
      "title": "起运地代码",
      "group": "基本信息"
    },
    {
      "key": "CCL_DEPARTURE_NAME",
      "showType": "input",
      "title": "起运地",
      "group": "基本信息"
    },
    {
      "key": "CCL_DESTINATION_CODE",
      "showType": "input",
      "title": "目的地代码",
      "group": "基本信息"
    },
    {
      "key": "CCL_DESTINATION_NAME",
      "showType": "input",
      "title": "目的地",
      "group": "基本信息"
    },
    {
      "key": "CCLREMARK",
      "notAsFilter": true,
      "showType": "input",
      "title": "备注",
      "group": "基本信息"
    },
    {
      "key": "CCL_BUSINESS_TYPE",
      "notAsFilter": true,
      "showType": "input",
      "title": "业务类型",
      "group": "基本信息"
    },
    {
      "key": "CCL_DELIVERY_AREA",
      "notAsFilter": true,
      "showType": "input",
      "title": "配送区域",
      "group": "基本信息"
    }
  ],
  "key": "crm_customer_line",
  "title": "客户",
  "editorSpan": 8,
  "filterSpan": 6
}