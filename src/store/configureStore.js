import { createStore, combineReducers } from 'redux';
import workspaceReducer from '../components/WorkspaceList/reducer';
import navReducer from '../components/Main/reducer';
import logReducer from '../components/Login/reducer';
import channelReducer from '../components/ChannelList/reducer';

export default () => {
  const store = createStore(
    combineReducers({
      workspace: workspaceReducer,
      nav: navReducer,
      channel: channelReducer,
      login: logReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
