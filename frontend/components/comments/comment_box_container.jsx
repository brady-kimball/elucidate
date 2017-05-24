import React from 'react';
import CommentBox from './comment_box';
import { connect } from 'react-redux';
import { commentsByAnnotation } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: commentsByAnnotation(state.comments, ownProps.annotation.id),
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);
