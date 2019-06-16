// Workspace atributes
// name: ,
// imageUrl: ,
// location: ,
// creator: ,
// description: ,
// welcomeMessage: ,
// channels: ,
// users: ,
// admins:


const listReducerDefaultState = {
  columns: [
    { title: 'Name', field: 'name' },
    { title: 'Description', field: 'description' },
    { title: 'Creator', field: 'creator'},
    { title: 'Welcome Message', field: 'welcomeMessage'},
    { title: 'Channels', field: 'channels', type: 'numeric'},
    { title: 'Users', field: 'users', type: 'numeric'}
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

    default:
      return state;
  }
};
