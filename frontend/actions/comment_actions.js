import * as APIUtil from "../util/comment_api_util";
import { receiveVote } from './vote_actions';

// Action Types
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const DELETE_COMMENT = "DELETE_COMMENT";

// Synchronous Action Creators
export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
});


// Asynchronous Thunk Action Creators

export const fetchComments = (trackId) => dispatch => {
  return APIUtil.fetchComments(trackId).then(
    comments => dispatch(receiveComments(comments)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createComment = (comment) => dispatch => {
  return APIUtil.createComment(comment).then(
    returnedComment => dispatch(receiveComment(returnedComment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateComment = (comment) => dispatch => {
  return APIUtil.updateComment(comment).then(
    returnedComment => dispatch(receiveComment(returnedComment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const destroyComment = (id) => dispatch => {
  return APIUtil.deleteComment(id).then(
    comment => dispatch(deleteComment(comment.id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const upvoteComment = (id) => dispatch => {
  return APIUtil.upvoteComment(id).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  ).then(
    (action) => {
      dispatch(receiveVote({
        type: "Comment",
        id: action.comment.id,
        value: action.comment.lastValue
      }));
    }
  );
};

export const downvoteComment = (id) => dispatch => {
  return APIUtil.downvoteComment(id).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  ).then(
    (action) => {
      dispatch(receiveVote({
        type: "Comment",
        id: action.comment.id,
        value: action.comment.lastValue
      }));
    }
  );
};
