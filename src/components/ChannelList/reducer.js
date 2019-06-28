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
        let newChannels = action.data;
        if (state.data) {
          const ids = state.data.map((ch) => ch._id);
          newChannels = action.data.filter((ch) => {
            return !ids.includes(ch._id);
          });
        }
      return {
        ...state,
        data: [
          ...state.data,
          ...newChannels
        ]
      };
    case 'UPDATE_CHANNEL':
        const newData = state.data.map((ch) => {
          if (ch._id === action.data._id) {
            return action.data;
          } else {
            return ch;
          };
        });
        return {
          ...state,
          data: newData
        }
    case 'DELETE_CHANNEL':
        return {
          ...state,
          data: state.data.filter((ch) => (ch._id !== action.chId))
        }
    case 'CLEAR_TABLE':
        return {
          ...state,
          data: []
        }
    
    default:
      return state;
  }
};
