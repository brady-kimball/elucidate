import {  RECEIVE_ANNOTATIONS, RECEIVE_ANNOTATION, RECEIVE_ANNOTATION_ERRORS,
          DELETE_ANNOTATION } from '../actions/annotation_actions';

const defaultState = {
  errors: []
};

const annotationsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANNOTATION:
      let newAnnotation = {[action.annotation.id]: action.annotation};
      return Object.assign({}, state, defaultState, newAnnotation);
    case RECEIVE_ANNOTATIONS:
      return Object.assign({}, defaultState, action.annotations);
    case DELETE_ANNOTATION:
      let newState = Object.assign({}, state, defaultState);
      delete newState[action.id];
      return newState;
    case RECEIVE_ANNOTATION_ERRORS:
      return Object.assign({}, defaultState, {errors: action.errors});
    default:
      return state;
  }
};


export default annotationsReducer;
