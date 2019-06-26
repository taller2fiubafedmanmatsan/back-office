import { connect } from 'react-redux';
import Api from '../../../client/hypechat';

import UserList from './component';

const mapStateToProps = (state) => {
  return {
    users: state.nav.channel.users,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addUser: async (u, ch, ws) => (await Api.patch(`/api/channels/${ch.name}/workspace/${ws.name}/addUsers`, {users: [u.email]})),
  deleteUser: async (email, ch, ws) => (await Api.patch(`/api/channels/${ch.name}/workspace/${ws.name}/users`, {users: [email]}))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserList);