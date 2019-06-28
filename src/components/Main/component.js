import React from 'react';
import { connect } from 'react-redux';
import WorkspaceList from '../WorkspaceList/component';
import WorkspaceInfo from '../WorkspaceInfo/component';
import ChannelInfo from '../ChannelInfo/component';

class Main extends React.Component{

  render() {
    const {
      show
    } = this.props.nav
    return (
      <div>
        {(show === 'workspaces') && <WorkspaceList className="workspaceList" />}
        {(show === 'workspaceInfo') && <WorkspaceInfo />}
        {(show === 'channelInfo') && <ChannelInfo />}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  };
};

export default connect(mapStateToProps)(Main);
