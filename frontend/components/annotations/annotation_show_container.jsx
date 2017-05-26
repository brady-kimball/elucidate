import React from 'react';
import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { destroyAnnotation, upvoteAnnotation, downvoteAnnotation }
  from '../../actions/annotation_actions';
import { destroyAnnotationContainer }
  from '../../actions/annotation_container_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    votes: state.votes.annotations,
    annotations: state.annotations
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    destroyAnnotation: (id) => dispatch(destroyAnnotation(id)),
    downvoteAnnotation: (id) => dispatch(downvoteAnnotation(id)),
    upvoteAnnotation: (id) => dispatch(upvoteAnnotation(id)),
    destroyAnnotationContainer: (id) => dispatch(destroyAnnotationContainer(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationShow);
