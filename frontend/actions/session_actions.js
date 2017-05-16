import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// Synchronous action creators

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


// Asynchronous thunk action creators

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(
    returnedUser => dispatch(receiveCurrentUser(returnedUser)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(
    returnedUser => dispatch(receiveCurrentUser(returnedUser)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
