import { Transfer, Button } from 'antd';

class ImportTable extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  }
  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }

  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }

  renderFooter = () => {
    return (
      <Button size="small" style={{ float: 'right', margin: 5 }}
        onClick={this.getMock}
      >
        reload
      </Button>
    );
  }

  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        listStyle={{
          width: 300,
          height: 500,
        }}
        operations={['to right', 'to left']}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={item => `${item.title}-${item.description}`}
        footer={this.renderFooter}
      />
    );
  }
}

export default ImportTable;