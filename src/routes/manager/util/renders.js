import React from 'react';
import CommonUtil from '../../../utils/commonutil';

const ACTION_KEY = 'singleRecordActions';

const Renders = {

  tableNameSet: new Set(),

  reset() {
    this.tableNameSet.clear();
  },

  bindRender(tableName, columns, container) {
    const { handleRowAction, primaryKey, schema } = container;
    if (this.tableNameSet.has(tableName)) {
      return tableSchema;
    }

    columns.forEach(col => {
      const field = col.$field;
      if (!field) {
        return;
      }
      if (field.render) {
        col.render = field.render.bind(container);
      } else if (field.showType === 'image') {
        // col.render = this.getImageRender()(onClickImage);
      } else if (field.showType === 'file') {
        // col.render = this.getFileRender;
      } else if (field.showType === 'actions' && field.actions && field.actions.length > 0) {
        col.render = this.getActionRender(schema, field, primaryKey)(handleRowAction);
      }
    });

    const ignoreCache = true;
    if (!ignoreCache) {
      this.tableNameSet.add(tableName);
    }
    return columns;
  },

  getImageRender() {
    return onClickImagePreview => text => {
      if (CommonUtil.isString(text)) {
        return <img src={text} alt="图片加载失败" style={{ width: '100%' }} onClick={e => onClickImagePreview(text)} />
      } else if (text instanceof Array) {
        return <img src={text[0]} alt="图片加载失败" style={{ width: '100%' }} onClick={e => onClickImagePreview(text)} />
      }
      return null;
    }
  },

  getFileRender(text) {
    if (CommonUtil.isString(text) && text.length > 0) {
      return <a href={text} target="_blank">{text.substr(text.lastIndexOf('/') + 1)}</a>;
    } else if (text instanceof Array) {
      if (text.length === 0) {
        return null;
      }
      const urlArray = [];
      urlArray.push(<a key={0} href={text[0]} target="_blank">{text[0].substr(text[0].lastIndexOf('/') + 1)}</a>);
      for (let i = 1; i < text.length; i++) {
        urlArray.push(<br key={-1 - i} />);
        urlArray.push(<a key={i} href={text[i]} target="_blank">{text[i].substr(text[i].lastIndexOf('/') + 1)}</a>);
      }
      return <div>{urlArray}</div>;
    }
    return null;
  },

  getActionRender(schema, field, primaryKey) {
    return (handleRowAction) => (text, record, index) => {
      const actions = field.actions;
      const elements = [];
      const size = actions.length;
      actions.forEach((action, index) => {
        if (action.type === 'newLine') {
          elements.push(<br key={index} />);
          return;
        }
        action.$schema = schema;
        let elem = <a href="#" key={index} onClick={e => { e.preventDefault(); handleRowAction(action)(text, record, index); }}>
          {action.title}
        </a>;
        elements.push(elem);
        if (index < size - 1) {
          elements.push(<span key={-1 - index} className="ant-divider" />);
        }
      });
      return <span>{elements}</span>
    }
  },
};

export default Renders;
export { ACTION_KEY };