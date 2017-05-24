import React from 'react';

class CommentShow extends React.Component {
  destroySelf(e) {
    e.preventDefault();
    this.destroyComment(this.props.comment.id);
  }

  renderDeleteButton() {
    let currentUser = this.props.currentUser || {};
    if (currentUser.id === this.props.comment.user_id) {
      return(
        <button className="delete" onChange={this.destroySelf.bind(this)}>
          Delete
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <section className="single-comment">
        <section className="voting-body">
          <section className="voting">
            <button className="downvote"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
            <span className="score">12</span>
            <button className="upvote"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
          </section>
          <section className="comment-body">
            {this.props.comment.body}
          </section>
        </section>
        {this.renderDeleteButton()}
      </section>
    );
  }
}

export default CommentShow;
