import React from 'react';
import CommentForm from './comment_form';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
