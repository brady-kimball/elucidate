import * as APIUtil from '../util/track_api_util';
import { receiveLoading } from './loading_actions';

// Action types

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const DESTROY_TRACK = "DESTROY_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

// Synchronous action creators

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const destroyTrack = (id) => ({
  type: DESTROY_TRACK,
  id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

// Asynchronous thunk action creators

export const fetchTracks = () => dispatch => {
  return APIUtil.fetchTracks().then(
    tracks => {
      dispatch(receiveTracks(tracks));
      dispatch(receiveLoading(false));
    }
  );
};

export const fetchSingleTrack = (id) => dispatch => {
  return APIUtil.fetchSingleTrack(id).then(
    track => {
      dispatch(receiveTrack(track));
      dispatch(receiveLoading(false));
    }
  );
};

export const createTrack = (track) => dispatch => {
  return APIUtil.createTrack(track).then(
    returnedTrack => {
      dispatch(receiveLoading(false));
      return dispatch(receiveTrack(returnedTrack));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateTrack = track => dispatch => {
  return APIUtil.updateTrack(track).then(
    returnedTrack => {
      dispatch(receiveLoading(false));
      return dispatch(receiveTrack(returnedTrack));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteTrack = id => dispatch => {
  return APIUtil.deleteTrack(id).then(
    track => {
      dispatch(receiveLoading(false));
      return dispatch(destroyTrack(track.id));
    }
  );
};
