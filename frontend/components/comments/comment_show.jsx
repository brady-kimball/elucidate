import React from 'react';

class CommentShow extends React.Component {
  destroySelf(e) {
    e.preventDefault();
    let answer = confirm(
      "Are you sure? This action can't be undone."
    );
    if (answer) {
      this.props.destroyComment(this.props.comment.id);
    }
  }

  renderDeleteButton() {
    let currentUser = this.props.currentUser || {};
    if (currentUser.id === this.props.comment.user_id) {
      return(
        <button className="delete" onClick={this.destroySelf.bind(this)}>
          Delete
        </button>
      );
    } else {
      return null;
    }
  }

  handleUpvote(e) {
    e.preventDefault();
    this.props.upvoteComment(this.props.comment.id);
  }

  handleDownvote(e) {
    e.preventDefault();
    this.props.downvoteComment(this.props.comment.id);
  }

  render() {
    return(
      <section className="single-comment">
        <section className="single-comment-content">
          <section className="voting-body">
            <section className="voting">
              <button className="downvote" onClick={this.handleDownvote.bind(this)}>
                <i className="fa fa-thumbs-down" aria-hidden="true"></i>
              </button>
              <span className="score">{this.props.comment.score}</span>
              <button className="upvote" onClick={this.handleUpvote.bind(this)}>
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              </button>
            </section>
            <section className="comment-body">
              {this.props.comment.body}
            </section>
          </section>
          {this.renderDeleteButton()}
        </section>
        <section className="author">
          {this.props.comment.user}
        </section>
      </section>
    );
  }
}

export default CommentShow;
