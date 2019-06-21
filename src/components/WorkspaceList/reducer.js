const listReducerDefaultState = {
  columns: [
    { title: 'Name', field: 'name', editable: 'never' },
    { title: 'Description', field: 'description' },
    { title: 'Creator', field: 'creatorName'},
    { title: 'Welcome Message', field: 'welcomeMessage'},
    { title: 'Channels', field: 'channelsAmount', type: 'numeric', editable: 'never' },
    { title: 'Users', field: 'usersAmount', type: 'numeric', editable: 'never' }
  ],
  data: [],
};

export default (state = listReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_All_WORKSPACES':
      console.log(action);
      return {
        ...state,
        data: [
          ...state.data,
          ...action.data
        ]
      };
    case 'UPDATE_WORKSPACE':
        console.log(action);
        const newData = state.data.map((ws) => {
          if (ws.name === action.data.name) {
            return action.data;
          } else {
            return ws;
          };
        });
        console.log(newData);
        return {
          ...state,
          data: newData
        }
    case 'DELETE_WORKSPACE':
        return {
          ...state,
          data: state.data.filter((ws) => (ws.name !== action.wsName))
        }
    
    default:
      return state;
  }
};
