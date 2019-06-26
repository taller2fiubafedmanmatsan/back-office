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

    case 'SHOW_CHANNEL_INFO':
      return {
        ...state,
        show: action.show,
        channel: action.channel
      };
    
    default:
      return state;
  }
};
