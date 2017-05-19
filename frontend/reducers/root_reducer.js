import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import tracksReducer from './tracks_reducer';
import annotationsReducer from './annotations_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  tracks: tracksReducer,
  annotations: annotationsReducer
});

export default rootReducer;
