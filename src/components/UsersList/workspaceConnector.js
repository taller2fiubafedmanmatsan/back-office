import { connect } from 'react-redux';
import Api from '../../../client/hypechat';

import UserList from './component';

const mapStateToProps = (state) => {
  return {
    users: state.nav.workspace.users,
    token: state.login.token
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addUser: (ch, ws) => `/api/workspaces/${ws.name}/addUsers`,
  deleteUser: (ch, ws) => `/api/workspaces/${ws.name}/removeUsers`
});


export default connect(mapStateToProps, mapDispatchToProps)(UserList);