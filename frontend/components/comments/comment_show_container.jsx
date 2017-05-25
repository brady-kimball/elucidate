import React from 'react';
import CommentShow from './comment_show';
import { connect } from 'react-redux';
import { destroyComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroyComment: (id) => dispatch(destroyComment(id))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentShow);
