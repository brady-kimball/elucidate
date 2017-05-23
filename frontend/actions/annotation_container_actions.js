import * as APIUtil from "../util/annotation_container_api_util";

// Action Tyes
export const RECEIVE_ANNOTATION_CONTAINERS = "RECEIVE_ANNOTATION_CONTAINERS";
export const RECEIVE_ANNOTATION_CONTAINER = "RECEIVE_ANNOTATION_CONTAINER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DELETE_ANNOTATION_CONTAINER = "DELETE_ANNOTATION_CONTAINER";

// Synchronous Action Creators
export const receiveAnnotationContainer = (annotationContainer) => ({
  type: RECEIVE_ANNOTATION_CONTAINER,
  annotationContainer
});

export const receiveAnnotationContainers = (annotationContainers) => ({
  type: RECEIVE_ANNOTATION_CONTAINERS,
  annotationContainers
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const deleteAnnotationContainer = (id) => ({
  type: DELETE_ANNOTATION_CONTAINER,
  id
});


// Asynchronous Thunk Action Creators

export const fetchAnnotationContainers = (trackId) => dispatch => {
  return APIUtil.fetchAnnotationContainers(trackId).then(
    annotationContainers => dispatch(receiveAnnotationContainers(annotationContainers)),
    errors => dispatch(receiveErrors(errors))
  );
};

export const createAnnotation = (annotationContainer) => dispatch => {
  return APIUtil.createAnnotationContainer(annotationContainer).then(
    returnedAnnotationContainer => dispatch(receiveAnnotationContainer(returnedAnnotationContainer)),
    errors => dispatch(receiveErrors(errors))
  );
};

export const destroyAnnotationContainer = (id) => dispatch => {
  return APIUtil.deleteAnnotationContainer(id).then(
    annotationContainer => dispatch(deleteAnnotationContainer(annotationContainer.id)),
    errors => dispatch(receiveErrors(errors))
  );
};
