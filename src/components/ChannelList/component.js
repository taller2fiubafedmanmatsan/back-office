import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MaterialTable from 'material-table';
import { fetchAllChannel, updateChannel, deleteChannel } from './actions';
import { showChannelInfo } from '../Main/actions';
import Api from '../../../client/hypechat';
import { filterFetch, filterNewFields } from './dataFilter'; 

class ChannelList extends React.Component {
  async componentDidMount() {
    const { data: channel } = await Api(this.props.token).get(`/api/channels/workspace/${this.props.workspace.name}`);
    console.log(channel);
    this.props.fetchAllChannel(filterFetch(channel));
  }

  async onRowUpdate(newData, oldData) {
    const ch = channel.data.filter((ch) => ch.name === newData.name);
    this.props.updateChannel({_id: ch._id, ...newData});
    await Api(this.props.token).patch(`/api/channels/${newData.name}/workspace/${this.props.workspace.name}`, filterNewFields(newData, oldData));
  }

  async onRowDelete(chName) {
    const ch = channel.data.filter((ch) => ch.name === newData.name);
    this.props.deleteChannel(ch._id);
    await Api(this.props.token).delete(`/api/channels/${chName}/workspace/${this.props.workspace.name}`);
  }

  async onRowClick(selectedChannel) {
    const response = await Api(this.props.token).get(`/api/channels/${selectedChannel.name}/workspace/${this.props.workspace.name}`);
    const { users, pages } = response.data;
    const channel = {
      ...selectedChannel,
      pages,
      users,
      creator: users.find((u) => u._id === selectedChannel.creator)
    };
    this.props.showChannelInfo(channel);
  }
  
  render() {
    return (
      <MaterialTable
        title="Channels"
        columns={this.props.channel.columns}
        data={this.props.channel.data}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit',
            onClick: (event, rowData) => this.onRowClick(rowData)
          }
        ]}
        editable={{
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.props.channel.data];
                data.splice(data.indexOf(oldData), 1);
                this.onRowDelete(oldData.name);
              }, 600);
            }),
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.channel,
    workspace: state.nav.workspace,
    token: state.login.token
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchAllChannel: (ch) => dispatch(fetchAllChannel(ch)),
  updateChannel: (newData) => dispatch(updateChannel(newData)),
  deleteChannel: (chName) => dispatch(deleteChannel(chName)),
  showChannelInfo: (chName) => dispatch(showChannelInfo(chName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
