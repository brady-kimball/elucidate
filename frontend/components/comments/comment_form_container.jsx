import React from 'react';
import CommentForm from './comment_box';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
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
