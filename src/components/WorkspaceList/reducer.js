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
  ],
  data: [
    { name: 'El de aca', description: 'aca para los pibes', creator: 'Messi' },
    {
      name: 'Otro ws',
      description: 'Mati esta re duro',
      creator: 'Diegote' 
    },
  ],
};

export default (state = listReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_All_WORKSPACES':
      console.log(action)
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
