import forIn from 'lodash/forIn';

export const filterFetch = channels => {
  return channels.map((channel) => {
    return {
      ...channel,
      usersAmount: channel.users.length,
      botsAmount: channel.bots.length,
    }
  });
};

export const filterNewFields = (newData, oldData) => {
  const data = {}
  forIn(oldData, (value, key) => {
    if (value !== newData[key]) data[key] = newData[key];
  });

  return data;
};
