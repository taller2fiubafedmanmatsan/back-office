import forIn from 'lodash/forIn';

export const filterFetch = workspaces => {
  return workspaces.map((workspace) => {
    return {
      ...workspace,
      creatorName: workspace.creator.name,
      channelsAmount: workspace.channels.length,
      usersAmount: workspace.users.length
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
