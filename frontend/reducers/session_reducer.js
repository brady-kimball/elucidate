import { RECEIVE_USER, RECEIVE_ERRORS } from "../actions/session_actions";
import { merge } from 'lodash';

const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state); // Ensure previous state does not get mutated

  switch(action.type) {
    case RECEIVE_USER:
      return merge(
        {},
        state,
        {currentUser: action.currentUser},
        {errors: []}
      );
    case RECEIVE_ERRORS:
      return merge(
        {},
        state,
        {currentUser: null},
        {errors: action.errors}
      );
    default:
      return state;
  }
};
