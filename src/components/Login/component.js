import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';
import User from 'react-svg-loader!../../../public/images/user-solid.svg';
import Lock from 'react-svg-loader!../../../public/images/lock-solid.svg';
import Api from '../../../client/hypechat';

class Login extends React.Component{
  state = {
    email: '',
    password: ''
  }

  handleChangeUser(event) {
    const data = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      email: data
    }));
  }

  handleChangePassword(event) {
    const data = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      password: data
    }));
  }

  async handleLogIn() {
    const { status: status, data: token } = await Api().post(`/api/auth/signin`, this.state);
    // console.log(response.data);
    if (status === 200) {
      this.props.login(token);
    }
  }

  render() {
    console.log(document);
    return (
      <div className="login-box">
        <h1>Login</h1>
        <div className="textbox">
          <User className="log-icon"/>
          <input className="input-text" 
            placeholder="Email" 
            value={this.state.email}
            onChange={e => this.handleChangeUser(e)}
          />
        </div>
        <div className="textbox">
          <Lock className="log-icon"/>
          <input className="input-text"
           placeholder="Password"
           type="password"
           value={this.state.password}
           onChange={e => this.handleChangePassword(e)}
          />
        </div>
        <input className="login-button"
          type="button" 
          value="Sign in"
          onClick={() => this.handleLogIn()}
        />
      </div>
    );
  };
};

// const mapStateToProps = (state) => {
//   return {
//     nav: state.nav
//   };
// };

const mapDispatchToProps = (dispatch, props) => ({
  login: (token) => dispatch(login(token))
});

export default connect(undefined, mapDispatchToProps)(Login);
