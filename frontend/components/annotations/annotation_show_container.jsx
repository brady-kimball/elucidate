import React from 'react';
import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { destroyAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    destroyAnnotation: (id) => dispatch(destroyAnnotation(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationShow);
