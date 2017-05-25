import * as APIUtil from "../util/comment_api_util";

// Action Tyes
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
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
  type: RECEIVE_ERRORS,
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
    errors => dispatch(receiveErrors(errors))
  );
};

export const createComment = (comment) => dispatch => {
  return APIUtil.createComment(comment).then(
    returnedComment => dispatch(receiveComment(returnedComment)),
    errors => dispatch(receiveErrors(errors))
  );
};

export const updateComment = (comment) => dispatch => {
  return APIUtil.updateComment(comment).then(
    returnedComment => dispatch(receiveComment(returnedComment)),
    errors => dispatch(receiveErrors(errors))
  );
};

export const destroyComment = (id) => dispatch => {
  return APIUtil.deleteComment(id).then(
    comment => dispatch(deleteComment(comment.id)),
    errors => dispatch(receiveErrors(errors))
  );
};
