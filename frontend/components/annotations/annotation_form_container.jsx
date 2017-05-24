import React from 'react';
import AnnotationForm from './annotation_form';
import { connect } from 'react-redux';
import { createAnnotation } from '../../actions/annotation_actions';
import { createAnnotationContainer } from '../../actions/annotation_container_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createAnnotationContainer: (annotationContainer) => dispatch(createAnnotationContainer(annotationContainer)),
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationForm);
