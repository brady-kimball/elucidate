import React from 'react';
import { connect } from 'react-redux';
import AnnotationContainerShow from './annotation_container_show';
import { annotationsByContainer } from '../../reducers/selectors'

export const mapStateToProps = (state, ownProps) => {
  return ({
    annotations: annotationsByContainer(state.annotations, ownProps.container.id)
  });
};


export const mapDispatchToProps = dispatch => {
  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationContainerShow);
