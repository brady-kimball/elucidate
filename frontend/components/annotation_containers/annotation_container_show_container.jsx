import React from 'react';
import { connect } from 'react-redux';
import AnnotationContainerShow from './annotation_container_show';
import { annotationsByContainer } from '../../reducers/selectors';
import { destroyAnnotationContainer } from '../../actions/annotation_container_actions';

export const mapStateToProps = (state, ownProps) => {
  return ({
    annotations: annotationsByContainer(state.annotations, ownProps.container.id)
  });
};


export const mapDispatchToProps = dispatch => {
  return ({
    destroyAnnotationContainer: (id) => dispatch(destroyAnnotationContainer(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationContainerShow);
