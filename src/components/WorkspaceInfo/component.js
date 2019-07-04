import React from 'react';
import { connect } from 'react-redux';
import WorkspaceSpecs from './WorkspaceStats/component';
import ChannelList from '../ChannelList/component';
import UserList from '../UsersList/workspaceConnector';
import BotTable from '../BotTable/component';

class WorkspaceInfo extends React.Component{
  render() {
    return (
      <div>
        <WorkspaceSpecs workspace={this.props.selectedWorkspace}/>
        <ChannelList workspace={this.props.selectedWorkspace}/>
        <UserList workspace={this.props.selectedWorkspace}/>
        <BotTable workspace={this.props.selectedWorkspace} bots={this.props.selectedWorkspace.bots}/>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    selectedWorkspace: state.nav.workspace
  };
};

export default connect(mapStateToProps)(WorkspaceInfo);
