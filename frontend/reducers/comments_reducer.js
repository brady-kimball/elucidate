import {  RECEIVE_COMMENTS, RECEIVE_COMMENT, RECEIVE_ERRORS,
          DELETE_COMMENT } from '../actions/comment_actions';

const defaultState = {
  errors: []
};

const commentsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENT:
      let newComment = {[action.comment.id]: action.comment};
      return Object.assign({}, state, defaultState, newComment);
    case RECEIVE_COMMENTS:
      return Object.assign({}, defaultState, action.comments);
    case DELETE_COMMENT:
      let newState = Object.assign({}, state, defaultState);
      delete newState[action.id];
      return newState;
    case RECEIVE_ERRORS:
      return Object.assign({}, defaultState, action.errors);
    default:
      return state;
  }
};


export default commentsReducer;
