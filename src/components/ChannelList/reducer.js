const listReducerDefaultState = {
  columns: [
    { title: 'Name', field: 'name' },
    { title: 'Description', field: 'description' },
    { title: 'Welcome Message', field: 'welcomeMessage'},
    { title: 'Type', field: 'channelType' },
    { title: 'Users', field: 'usersAmount', type: 'numeric' },
    { title: 'Bots', field: 'botsAmount', type: 'numeric' },
    { title: 'Private', field: 'isPrivate', type: 'boolean' },
  ],
  data: [],
};

export default (state = listReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_All_CHANNELS':
      console.log(action);
      return {
        ...state,
        data: [
          ...state.data,
          ...action.data
        ]
      };
    case 'UPDATE_CHANNEL':
        console.log(action);
        const newData = state.data.map((ch) => {
          if (ch._id === action.data._id) {
            return action.data;
          } else {
            return ch;
          };
        });
        console.log(newData);
        return {
          ...state,
          data: newData
        }
    case 'DELETE_CHANNEL':
        return {
          ...state,
          data: state.data.filter((ch) => (ch._id !== action.chId))
        }
    
    default:
      return state;
  }
};
