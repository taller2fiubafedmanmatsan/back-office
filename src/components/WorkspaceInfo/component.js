import React from 'react';
import { connect } from 'react-redux';
import WorkspaceSpecs from './WorkspaceSpecs/component';
import WorkspaceList from '../WorkspaceList/component';

class WorkspaceInfo extends React.Component{
  render() {
    return (
      <div>
        <WorkspaceSpecs workspace={this.props.selectedWorkspace}/>
        <WorkspaceList />
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
