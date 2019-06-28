import { connect } from 'react-redux';

import UserList from './component';

const mapStateToProps = (state) => {
  return {
    users: state.nav.channel.users,
    token: state.login.token
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addUser: (ch, ws) => `/api/channels/${ch.name}/workspace/${ws.name}/addUsers`,
  deleteUser: (ch, ws) => `/api/channels/${ch.name}/workspace/${ws.name}/users`
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
