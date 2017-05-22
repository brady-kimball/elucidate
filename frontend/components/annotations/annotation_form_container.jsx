import React from 'react';
import AnnotationForm from './annotation_form';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationForm);
