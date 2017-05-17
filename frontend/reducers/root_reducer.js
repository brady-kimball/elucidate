import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import tracksReducer from './tracks_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  tracks: tracksReducer
});

export default rootReducer;
