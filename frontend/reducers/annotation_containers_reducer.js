import {  RECEIVE_ANNOTATION_CONTAINERS, RECEIVE_ANNOTATION_CONTAINER,
  RECEIVE_ERRORS, DELETE_ANNOTATION_CONTAINER } from
  '../actions/annotation_container_actions';

const defaultState = {
  errors: []
};

const annotationContainersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANNOTATION_CONTAINER:
      let newAnnotationContainer =
        {[action.annotationContainer.id]: action.annotationContainer};
      return Object.assign({}, state, defaultState, newAnnotationContainer);
    case RECEIVE_ANNOTATION_CONTAINERS:
      return Object.assign({}, defaultState, action.annotationContainers);
    case DELETE_ANNOTATION_CONTAINER:
      let newState = Object.assign({}, state, defaultState);
      delete newState[action.id];
      return newState;
    case RECEIVE_ERRORS:
      return Object.assign({}, defaultState, action.errors);
    default:
      return state;
  }
};


export default annotationContainersReducer;
