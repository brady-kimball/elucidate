import * as APIUtil from '../util/track_api_util';

// Action types

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const DESTROY_TRACK = "DESTROY_TRACK";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

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
  type: RECEIVE_ERRORS,
  errors
});

// Asynchronous thunk action creators

export const fetchTracks = () => dispatch => {
  return APIUtil.fetchTracks().then(
    tracks => dispatch(receiveTracks(tracks))
  );
};

export const fetchSingleTrack = (id) => dispatch => {
  return APIUtil.fetchSingleTrack(id).then(
    track => dispatch(receiveTrack(track))
  );
};

export const createTrack = (track) => dispatch => {
  return APIUtil.createTrack(track).then(
    returnedTrack => dispatch(receiveTrack(returnedTrack)),
    err => dispatch(receiveErrors(track))
  );
};

export const updateTrack = track => dispatch => {
  return APIUtil.updateTrack(track).then(
    returnedTrack => dispatch(receiveTrack(returnedTrack)),
    err => dispatch(receiveErrors(track))
  );
};

export const deleteTrack = id => dispatch => {
  return APIUtil.deleteTrack(id).then(
    track => dispatch(destroyTrack(track.id))
  );
};
