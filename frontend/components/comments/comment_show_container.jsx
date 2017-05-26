import React from 'react';
import CommentShow from './comment_show';
import { connect } from 'react-redux';
import { destroyComment, downvoteComment, upvoteComment }
  from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    votes: state.votes.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroyComment: (id) => dispatch(destroyComment(id)),
    downvoteComment: (id) => dispatch(downvoteComment(id)),
    upvoteComment: (id) => dispatch(upvoteComment(id))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentShow);
