import { createStore, combineReducers } from 'redux';
import workspaceReducer from '../components/WorkspaceList/reducer'

export default () => {
  const store = createStore(
    combineReducers({
      workspace: workspaceReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
