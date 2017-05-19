import * as APIUtil from "../util/annotation_api_util";

// Action Tyes
export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// Synchronous Action Creators
export const receiveAnnotation = (annotation) => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const receiveAnnotations = (annotations) => ({
  type: RECEIVE_ANNOTATIONS,
  annotations
});

export const receiveErrors = (error) => ({
  type: RECEIVE_ERRORS
});


// Asynchronous Thunk Action Creators

export const fetchAnnotations = (trackId = null) => dispatch => {
  return APIUtil.fetchAnnotations(trackId).then(
    annotations => receiveAnnotations(annotations),
    errors => receiveErrors(errors)
  );
};

export const createAnnotation = (annotation) => dispatch => {
  return APIUtil.createAnnotation(annotation).then(
    returnedAnnotation => receiveAnnotation(returnedAnnotation),
    errors =>receiveErrors(errors)
  );
};

export const updateAnnotation = (annotation) => dispatch => {
  return APIUtil.updateAnnotation(annotation).then(
    returnedAnnotation => receiveAnnotation(returnedAnnotation),
    errors => receiveErrors(errors)
  );
};
