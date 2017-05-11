export default class MgrCtx {
  activeTab = 'list';
  formData = {};
  editComponent = null;
  editAction = 'manager/noops';
  useEditor = true;
  selectedRowKeys = [];
  dataSource = [];
  nestedFields = [];
  nestedSources = new Map();
  expandAll = false;
  pagination = {
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: total => `共 ${total} 条`,
    current: 1,
    total: null,
  };

  toggleFilter = () => {
    this.expandAll = !this.expandAll;
  };

  selectedChange = (rowKeys) => {
    this.selectedRowKeys = rowKeys;
  };

  goEditor = (params) => {
    const { popupEditor, action, payload, record, component } = params;
    this.activeTab = 'edit';
    this.useEditor = popupEditor;
    this.formData = payload || record;
    this.editComponent = component;
    this.editAction = action;
  };

  goList = () => {
    this.activeTab = 'list';
  };

  newNested = (subField) => {
    const dataSource = this.getNestedSource(subField);
    dataSource.push({ $editable: true });
  };

  setMainSource = (result) => {
    const { list, total, current } = result;
    this.dataSource = list;
    this.pagination.total = total;
    this.pagination.current = current || 1;
  };

  getNestedSource = (subField) => {
    let data = this.nestedSources.get(subField);
    if (null == data) {
      data = [];
      this.nestedSources.set(subField, data);
    }
    return data;
  };

  setNestedSource = (subField, dataSoure) => {
    this.nestedSources.set(subField, dataSoure);
  };
};