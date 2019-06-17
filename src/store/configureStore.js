import { createStore, combineReducers } from 'redux';
import workspaceReducer from '../components/WorkspaceList/reducer';
import navReducer from '../components/Main/reducer';

export default () => {
  const store = createStore(
    combineReducers({
      workspace: workspaceReducer,
      nav: navReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
