import React from 'react';
import MaterialTable from 'material-table';
import Api from '../../../client/hypechat';

export default class BotTable extends React.Component {
  state = {
    bots: []
  }
  componentDidMount() {
    if (this.props.bots) {
      this.setState(() => ({ 
        bots: [
          ...this.props.bots
        ]
       }));
    }
  }

  async handleRowAdd(data) {
    this.setState((prevState) => ({bots: [...prevState.bots, data]}));
    await Api(this.props.token).patch(`/api/workspaces/${this.props.workspace.name}/bots`, {data});
  }

  render() {
    console.log(this.props.user);
    return (
      <div className="ws-user-list">
        <MaterialTable
          title="Bots"
          columns={this.props.columns}
          data={this.state.bots}
          editable={{
            onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.bots];
                data.push(newData);
                this.handleRowAdd(newData);
              }, 600);
            })
          }}
        />
      </div>
    );
  }
}

BotTable.defaultProps = {
  columns: [
    { title: 'Name', field: 'name' },
    { title: 'Url', field: 'url' }
  ],
}
