import { Tag } from 'antd';

const ColumnRender = {

  renderLevel(text) {
    switch (text) {
      case '1':
        return <Tag color="pink">信息</Tag>;
      case '2':
        return <Tag color="pink">警告</Tag>;
      default:
        return <Tag color="red">未分类</Tag>;
    }
  },
}

export default ColumnRender;