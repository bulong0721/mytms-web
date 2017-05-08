import { Button, Popconfirm, notification } from 'antd';
import EditableTable from '../../components/extension/editableTable';

const AddOrder = () => {
  let editable = true;
  let editTable = null;

  const columns = [
    { title: '姓名', dataIndex: 'name', },
    { title: '年龄', dataIndex: 'age', },
  ];

  const dataSource = [
    { name: '徐步龙', age: 30, $editable: false },
    { name: '陈希', age: 29, $editable: true },
  ];

  const handleSumbit = () => {
    if (editTable) {
      const changes = editTable.getChanges();
      console.log('changes', changes);
      notification.info({
        message: '获取修改',
        description: ``,
        duration: 3,
      });
    }
  };

  const handleInit = (table) => {
    if (table) {
      editTable = table;
    }
  };

  return (
    <div>
      <EditableTable ref={handleInit} editable={editable} columns={columns} dataSource={dataSource} />
      <Button onClick={handleSumbit}>提交</Button>
    </div>
  );
};

export default AddOrder;