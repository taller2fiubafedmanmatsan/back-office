export default workspace => ({
  name: workspace.name,
  description: workspace.description,
  creator: workspace.creator.name,
  welcomeMessage: workspace.welcomeMessage,
  channels: workspace.channels.length,
  users: workspace.users.length,
});