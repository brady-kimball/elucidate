import { RECEIVE_USER, RECEIVE_ERRORS, CLEAR_ERRORS }
  from "../actions/session_actions";
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
        defaultState,
        {currentUser: action.currentUser}
      );
    case RECEIVE_ERRORS:
      return merge(
        {},
        defaultState,
        {errors: action.errors}
      );
    case CLEAR_ERRORS:
      return Object.assign(
        {},
        state,
        {errors: []}
      );
    default:
      return state;
  }
};

export default sessionReducer;
