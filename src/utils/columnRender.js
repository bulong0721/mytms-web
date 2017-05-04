import { Tag } from 'antd';

const ColumnRender = {

    getPriorityEnum(text) {
        switch (text) {
            case 0:
                return <Tag color="#97AAB3">未分类</Tag>;
            case 1:
                return <Tag color="#7499FF">信息</Tag>;
            case 2:
                return <Tag color="#FFC859">警告</Tag>;
            case 3:
                return <Tag color="#FFA059">一般严重</Tag>;
            case 4:
                return <Tag color="#E97659">严重</Tag>;
            case 5:
                return <Tag color="#E45959">灾难</Tag>;
            default:
                return <Tag color="#97AAB3">未分类</Tag>;
        }
    },
    getStatusEnum(text) {
        switch (text) {
            case 0:
                return <Tag color="green">正常</Tag>;
            case 1:
                return <Tag color="red">禁用</Tag>;
            default:
                return <Tag color="#97AAB3">未分类</Tag>;
        }
    },
    getMediaTypeEnum(text) {
        switch (text) {
            case 1:
                return <b>脚本</b>;
            default:
                return <b>脚本</b>;
        }
    },
}

export default ColumnRender;