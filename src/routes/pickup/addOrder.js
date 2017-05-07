import { Button, notification } from 'antd';
import EditTable from '../../components/extension/editTable';

const AddOrder = () => {
  let editable = true;
  let editTable = null;

  const columns = [
    { title: '姓名', dataIndex: 'name', },
    { title: '年龄', dataIndex: 'age', },
  ];

  const dataSource = [
    { name: '徐步龙', age: 30 },
    { name: '陈希', age: 29 },
  ];

  const changeEdit = () => {
    editable = !editable;
  };

  const handleSumbit = () => {
    console.log('changes');
    if (editTable) {
      const changes = editTable.getChanges();
      notification.info({
        message: '获取修改',
        description: ``,
        duration: 3,
      });
    }
  };

  const handleInit = (table) => {
    console.log('init', table);
    if (table) {
      editTable = table;
    }
  };

  return (
    <div>
      <EditTable ref={handleInit} editable={editable} columns={columns} dataSource={dataSource} />
      <Button type="primary" onClick={changeEdit}>切换</Button>
      <Button onClick={handleSumbit}>提交</Button>
    </div>
  );
};

export default AddOrder;