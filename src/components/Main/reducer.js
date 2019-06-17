const showDefaultState = {
  show: 'workspaces'
};

export default (state = showDefaultState, action) => {
  switch (action.type) {
    case 'SHOW_WORKSPACES':
      return {show: action.show};

    case 'SHOW_WORKSPACE_INFO':
        return {
          show: action.show,
          workspace: action.workspace
        };
    
    default:
      return state;
  }
};
