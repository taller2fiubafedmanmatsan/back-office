import React from 'react';
import { connect } from 'react-redux';
import Login from '../Login/component';
import { showWorkspaces } from '../Main/actions';
import { logout } from '../Login/actions';
import Navbar from '../Nav/component'

class DashboardPage extends React.Component{
  render() {
    return (
      <div>
        {this.props.login === true ? <Navbar nav={this.props}/> : <Login className="login"/> }
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
    login: state.login.login
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  showWorkspaces: () => dispatch(showWorkspaces()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
