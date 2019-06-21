import React from 'react';
import { connect } from 'react-redux';
import WorkspaceSpecs from './WorkspaceSpecs/component';
import ChannelList from '../ChannelList/component';

class WorkspaceInfo extends React.Component{
  render() {
    return (
      <div>
        <WorkspaceSpecs workspace={this.props.selectedWorkspace}/>
        <ChannelList workspace={this.props.selectedWorkspace}/>
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
