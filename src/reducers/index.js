import { combineReducers } from 'redux';

import global from './global';
import nav from './nav';

const appReducer = combineReducers({
  global,
  nav
});

export default appReducer;
