import * as APIUtil from "../util/annotation_api_util";

// Action Tyes
export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNOTATION_ERRORS = "RECEIVE_ANNOTATION_ERRORS";
export const DELETE_ANNOTATION = "DELETE_ANNOTATION";

// Synchronous Action Creators
export const receiveAnnotation = (annotation) => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const receiveAnnotations = (annotations) => ({
  type: RECEIVE_ANNOTATIONS,
  annotations
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ANNOTATION_ERRORS,
  errors
});

export const deleteAnnotation = (id) => ({
  type: DELETE_ANNOTATION,
  id
});


// Asynchronous Thunk Action Creators

export const fetchAnnotations = (trackId) => dispatch => {
  return APIUtil.fetchAnnotations(trackId).then(
    annotations => dispatch(receiveAnnotations(annotations)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createAnnotation = (annotation) => dispatch => {
  return APIUtil.createAnnotation(annotation).then(
    returnedAnnotation => dispatch(receiveAnnotation(returnedAnnotation)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateAnnotation = (annotation) => dispatch => {
  return APIUtil.updateAnnotation(annotation).then(
    returnedAnnotation => dispatch(receiveAnnotation(returnedAnnotation)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const destroyAnnotation = (id) => dispatch => {
  return APIUtil.deleteAnnotation(id).then(
    annotation => dispatch(deleteAnnotation(annotation.id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const upvoteAnnotation = (id) => dispatch => {
  return APIUtil.upvoteAnnotation(id).then(
    annotation => dispatch(receiveAnnotation(annotation)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const downvoteAnnotation = (id) => dispatch => {
  return APIUtil.downvoteAnnotation(id).then(
    annotation => dispatch(receiveAnnotation(annotation)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
