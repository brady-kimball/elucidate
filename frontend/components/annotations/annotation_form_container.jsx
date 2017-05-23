import React from 'react';
import AnnotationForm from './annotation_form';
import { connect } from 'react-redux';
import { createAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  console.log(createAnnotation)
  return {
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationForm);
