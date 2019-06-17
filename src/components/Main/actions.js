export const showWorkspaces = (
  show = 'workspaces'
) => ({
  type: 'SHOW_WORKSPACES',
  show
});

export const showWorkspaceInfo = (
  workspace
) => ({
  type: 'SHOW_WORKSPACE_INFO',
  show: 'workspace',
  workspace
});

export const showChannels = (
  wsName
) => ({
  type: 'DELETE_WORKSPACE',
  wsName
});