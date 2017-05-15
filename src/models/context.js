class TabCtx {
  key = null;
  title = '';
  currentStep = 0;
  editorSpan = 12;
  filterSpan = 6;
  nested = false;
  fields = [];
  schema = {};
  tabSource = [];
  modalVisible = true;
  modalTitle = '导入字段';
  modalActiveKey = 'field';
  modalAction = 'modalNestedTabs';
  transferSource = [];
  targetSource = [];

  showModal = (action) => {
    this.modalAction = action;
    this.modalVisible = true;
    switch (action) {
      case 'addFieldGroup':
        this.modalTitle = '新增字段组';
        this.modalActiveKey = 'fieldGroup';
        break;
      case 'nestedTabs':
        this.modalTitle = '配置内嵌页';
        this.modalActiveKey = 'transfer';
        break;
      case 'importFields':
        this.modalTitle = '导入字段';
        this.modalActiveKey = 'transfer';
        break;
      case 'newField':
        this.modalTitle = '新增字段';
        this.modalActiveKey = 'field';
        break;
      case 'editField':
        this.modalTitle = '编辑字段';
        this.modalActiveKey = 'field';
        break;
      case 'addFilters':
        this.modalTitle = '配置过滤字段';
        this.modalActiveKey = 'transfer';
        break;
      case 'addColumns':
        this.modalTitle = '配置主表列';
        this.modalActiveKey = 'transfer';
        break;
      case 'addEditors':
        this.modalTitle = '配置编辑字段';
        this.modalActiveKey = 'transfer';
        break;
      case 'addActions':
        this.modalTitle = '添加动作';
        this.modalActiveKey = 'transfer';
        break;
    }
  }

  hideModal = () => {
    this.modalVisible = false;
  }

  handleModalOK = () => {

  }

  transferChange = (targetKeys) => {
    this.targetSource = targetKeys;
  }

  goNext = () => {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  goPrivous = () => {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}

class MgrCtx {
  activeTab = 'list';
  formData = {};
  editComponent = null;
  editAction = 'manager/noops';
  useEditor = true;
  selectedRowKeys = [];
  dataSource = [];
  nestedFields = new Set();
  nestedSources = new Map();
  activedNested = null;
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
    if (this.formData) {
      this.nestedFields.forEach(subField => {
        const dataSource = this.formData[subField];
        this.setNestedSource(subField, dataSource || []);
      });
    }
  };

  goList = () => {
    this.activeTab = 'list';
  };

  newNested = (subField) => {
    const dataSource = this.getNestedSource(subField);
    dataSource.push({ $editable: true });
  };

  activeNestedTab = (subField) => {
    this.activedNested = subField;
  };

  removeNestedAt = (subField, index) => {
    const dataSource = this.getNestedSource(subField);
    dataSource.splice(index, 1);
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

export { MgrCtx, TabCtx }; 