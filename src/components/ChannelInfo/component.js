import React from 'react';
import { connect } from 'react-redux';
import ChannelSpecs from './ChannelSpecs/component';
// import ChannelList from '../ChannelList/component';
import UserList from '../UsersList/channelConnector';
import Api from '../../../client/hypechat';

class ChannelInfo extends React.Component{
  render() {
    return (
      <div>
        <ChannelSpecs 
          channel={this.props.selectedChannel} 
          workspace={this.props.selectedWorkspace}
        />
        <UserList 
          channel={this.props.selectedChannel} 
          workspace={this.props.selectedWorkspace}
        />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    selectedChannel: state.nav.channel,
    selectedWorkspace: state.nav.workspace
  };
};

export default connect(mapStateToProps)(ChannelInfo);
