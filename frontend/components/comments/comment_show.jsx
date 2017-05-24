import React from 'react';

class CommentShow extends React.Component {
  render() {
    return(
      <section className="single-comment">
        <section className="voting">
          <button className="downvote"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
          <span className="score">12</span>
          <button className="upvote"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
        </section>
        <section className="comment-body">
          {this.props.comment.body}
        </section>
      </section>
    );
  }
}

export default CommentShow;
