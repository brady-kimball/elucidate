import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import tracksReducer from './tracks_reducer';
import annotationsReducer from './annotations_reducer';
import annotationContainersReducer from './annotation_containers_reducer';
import commentsReducer from './comments_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  tracks: tracksReducer,
  annotations: annotationsReducer,
  annotationContainers: annotationContainersReducer,
  searchResults: searchReducer,
  comments: commentsReducer
});

export default rootReducer;
