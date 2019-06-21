import React from 'react';
import { connect } from 'react-redux';
import WorkspaceList from '../WorkspaceList/component';
import TextFields from '../WorkspaceInfo/component';
// import Navbar from '../Nav/component'

class Main extends React.Component{

  render() {
    const {
      show,
      workspace: workspace = ''
    } = this.props.nav
    console.log(show);
    console.log(workspace);
    console.log((show === 'workspaces' & !workspace));
    console.log((show === 'workspaces' & workspace));
    return (
      <div>
        {(show === 'workspaces') && <WorkspaceList className="workspaceList" />}
        {(show === 'workspaceInfo') && <TextFields />}
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
