export const fetchAllChannel = (
  data = []
) => ({
  type: 'FETCH_All_CHANNELS',
  data
});

export const updateChannel = (
  data
) => ({
  type: 'UPDATE_CHANNEL',
  data
});

export const deleteChannel = (
  chId
) => ({
  type: 'DELETE_CHANNEL',
  chId
});

export const clearChannelTable = () => ({
  type: 'CLEAR_TABLE'
});
