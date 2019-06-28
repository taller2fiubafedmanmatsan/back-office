import _ from 'lodash';

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
      let newWorspaces = action.data;
      if (state.data) {
        const names = state.data.map((ws) => ws.name);
        newWorspaces = action.data.filter((ws) => {
          return !names.includes(ws.name);
        });
      }
      return {
        ...state,
        data: [
          ...state.data,
          ...newWorspaces
        ]
      };
    case 'UPDATE_WORKSPACE':
        const newData = state.data.map((ws) => {
          if (ws.name === action.data.name) {
            return action.data;
          } else {
            return ws;
          };
        });
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
