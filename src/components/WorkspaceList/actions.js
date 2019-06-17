export const fetchAllWorkspace = (
  data = []
) => ({
  type: 'FETCH_All_WORKSPACES',
  data
});

export const updateWorkspace = (
  data
) => ({
  type: 'UPDATE_WORKSPACE',
  data
});

export const deleteWorkspace = (
  wsName
) => ({
  type: 'DELETE_WORKSPACE',
  wsName
});