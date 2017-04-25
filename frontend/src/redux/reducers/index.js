import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import buttonReducer from './buttonReducer';

export default combineReducers({
  filter: filterReducer,
  upload: buttonReducer,
});