const LoginDefaultState = {
  login: false,
  token: ''
};

export default (state = LoginDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { 
        login: true,
        token: action.token
      };
    case 'LOGOUT':
      return { 
        login: false,
        token: ''
      };
    
    default:
      return state;
  }
};
