import React from 'react';
import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { destroyAnnotation, upvoteAnnotation, downvoteAnnotation }
  from '../../actions/annotation_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    votes: state.votes.annotations
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    destroyAnnotation: (id) => dispatch(destroyAnnotation(id)),
    downvoteAnnotation: (id) => dispatch(downvoteAnnotation(id)),
    upvoteAnnotation: (id) => dispatch(upvoteAnnotation(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationShow);
