import React from 'react';
import { connect } from 'react-redux';
import WorkspaceList from '../WorkspaceList/component';
// import Navbar from '../Nav/component'

class Main extends React.Component{

  render() {
    const {
      show,
      workspace: workspace = ''
    } = this.props.nav
    return (
      <div>
        {(show === 'workspaces' && !workspace) && <WorkspaceList className="workspaceList" />}
        {(show === 'workspaces' && workspace) && <p>Cambie loco</p>}
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
