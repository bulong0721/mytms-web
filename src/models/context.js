import lodash from 'lodash';

class TabCtx {
  currentStep = 0;
  fieldMap = new Map();
  targetSchema = { actions: [], fields: [], };
  fieldSource = [];
  tabSource = [];
  modalVisible = false;
  modalTitle = '导入字段';
  modalActiveKey = 'field';
  modalAction = 'modalNestedTabs';
  transferSource = [];
  transferMap = new Map();
  targetSource = [];
  currentGroup = null;

  showModal = ({ action, fields, group }) => {
    this.modalAction = action;
    this.modalVisible = true;
    this.transferMap.clear();
    this.transferSource = [];
    this.targetSource = [];
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
        this.transferSource = fields;
        fields.forEach(field => {
          this.transferMap.set(field.key, field);
        });
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
        this.fieldMap.forEach((value, index) => {
          this.transferSource.push(value);
          if (!value.notAsFilter) {
            this.targetSource.push(value.key);
          }
        });
        break;
      case 'addColumns':
        this.modalTitle = '配置主表列';
        this.modalActiveKey = 'transfer';
        this.fieldMap.forEach((value, index) => {
          this.transferSource.push(value);
          if (!value.notAsColumn) {
            this.targetSource.push(value.key);
          }
        });
        break;
      case 'addEditors':
        this.modalTitle = '配置编辑字段';
        this.currentGroup = group;
        this.modalActiveKey = 'transfer';
        this.fieldMap.forEach((value, index) => {
          if (!value.group) {
            this.transferSource.push(value);
          }
          if (value.group == this.currentGroup) {
            this.transferSource.push(value);
            this.targetSource.push(value.key);
          }
        });
        break;
      case 'addActions':
        this.modalTitle = '添加动作';
        this.modalActiveKey = 'action';
        break;
    }
  }

  toTargetSchema = () => {
    const fields = [];
    this.fieldMap.forEach((value, index) => {
      if (value.notAsColumn && value.notAsFilter && value.notAsEditor) {
        return;
      }
      fields.push(value);
    });
    this.targetSchema.fields = fields;
  }

  hideModal = () => {
    this.modalVisible = false;
  }

  handleModalOK = ({ modalValues }) => {
    switch (this.modalAction) {
      case 'addFieldGroup':
        const { key, title } = modalValues;
        this.modalTitle = '新增字段组';
        this.currentGroup = title;
        for (let i = 0; i < this.fieldSource.length; i++) {
          const unGrouped = this.fieldSource[i];
          if (!unGrouped.group) {
            unGrouped.group = title;
            unGrouped.notAsEditor = false;
            break;
          }
        }
        break;
      case 'nestedTabs':
        this.modalTitle = '配置内嵌页';
        break;
      case 'importFields':
        this.modalTitle = '导入字段';
        this.targetSource.forEach(key => {
          const field = this.transferMap.get(key);
          this.fieldMap.set(key, field);
        });
        this.fieldSource = [];
        this.fieldMap.forEach((value, index) => {
          this.fieldSource.push(value);
        });
        break;
      case 'newField':
        this.modalTitle = '新增字段';
        break;
      case 'editField':
        this.modalTitle = '编辑字段';
        break;
      case 'addFilters':
        this.modalTitle = '配置过滤字段';
        this.transferSource.forEach(field => {
          field.notAsFilter = true;
        });
        this.targetSource.forEach(key => {
          const field = this.fieldMap.get(key);
          field.notAsFilter = false;
        });
        break;
      case 'addColumns':
        this.modalTitle = '配置主表列';
        this.transferSource.forEach(field => {
          field.notAsColumn = true;
        });
        this.targetSource.forEach(key => {
          const field = this.fieldMap.get(key);
          field.notAsColumn = false;
        });
        break;
      case 'addEditors':
        this.modalTitle = '配置编辑字段';
        this.transferSource.forEach(field => {
          field.group = null;
          field.notAsEditor = true;
        });
        this.targetSource.forEach(key => {
          const field = this.fieldMap.get(key);
          field.notAsEditor = false;
          field.group = this.currentGroup;
        });
        break;
      case 'addActions':
        this.modalTitle = '添加动作';
        this.targetSchema.actions.push(modalValues);
        break;
    }
    this.toTargetSchema();
    this.hideModal();
  }

  transferChange = (targetKeys) => {
    this.targetSource = targetKeys;
  }

  goNext = ({ basicData }) => {
    if (this.currentStep < 2) {
      if (basicData) {
        const { id, key, title, editorSpan, filterSpan, nested } = basicData;
        this.targetSchema.id = id;
        this.targetSchema.key = key;
        this.targetSchema.title = title;
        this.targetSchema.editorSpan = editorSpan;
        this.targetSchema.filterSpan = filterSpan;
        this.targetSchema.nested = nested;
      }
      this.currentStep++;
    }
  }

  goPrivous = () => {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  updateSchema = (schema) => {

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