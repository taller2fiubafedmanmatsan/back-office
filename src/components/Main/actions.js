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
  show: 'workspaceInfo',
  workspace
});

export const showChannelInfo = (
  channel
) => ({
  type: 'SHOW_CHANNEL_INFO',
  show: 'channelInfo',
  channel
});