import * as APIUtil from '../util/session_api_util';
import { clearVotes, fetchVotes } from './vote_actions';
import { receiveLoading } from './loading_actions';
// Action types, implemented so app breaks if misspelled

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// Synchronous action creators

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});


// Asynchronous thunk action creators

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(
    returnedUser => {
      dispatch(receiveCurrentUser(returnedUser));
      dispatch(receiveLoading(false));
    },
    errors => {
      dispatch(receiveErrors(errors.responseJSON));
      dispatch(receiveLoading(false));
    }
  );
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(
    returnedUser => {
      dispatch(receiveCurrentUser(returnedUser));
      dispatch(receiveLoading(false));
    },
    errors => {
      dispatch(receiveErrors(errors.responseJSON));
      dispatch(receiveLoading(false));
    }
  ).then(
    () => dispatch(fetchVotes())
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  ).then(
    () => dispatch(clearVotes())
  );
};
