import React from 'react';
import { connect } from 'react-redux';
import WorkspaceList from '../WorkspaceList/component';
import { showWorkspaces } from '../Main/actions';
import Navbar from '../Nav/component'

class DashboardPage extends React.Component{

  render() {
    return (
      <div>
        <Navbar nav={this.props}/>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  showWorkspaces: () => dispatch(showWorkspaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
