import { RECEIVE_TRACKS, RECEIVE_TRACK, DESTROY_TRACK, RECEIVE_ERRORS }
  from '../actions/track_actions';
import { fetchTracks, createTrack, updateTrack, deleteTrack }
  from '../actions/track_actions';
import { merge } from 'lodash';
const defaultState = {
  errors: []
};

const tracksReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return Object.assign({}, defaultState, action.tracks);
    case RECEIVE_TRACK:
      let newTrack = {[action.track.id]: action.track};
      return Object.assign({}, state, defaultState, newTrack);
    case DESTROY_TRACK:
      let dupState = merge({}, state);
      delete dupState[action.id];
      return dupState;
    case RECEIVE_ERRORS:
      return Object.assign({}, state, action.errors);
    default:
      return state;
  }
};

export default tracksReducer;
