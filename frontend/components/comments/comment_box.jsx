import React from 'react';
import CommentShow from './comment_show';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreComments: false
    };
  }
  renderComments() {
    let allComments = this.props.comments.map( (comment) => {
      return(
        <CommentShow key={comment.id} comment={comment} />
      )
    });

    if (this.state.moreComments) {
      return allComments;
    } else {
      return allComments[0];
    }
  }

  toggleMoreComments() {
    let currentState = this.state.moreComments;
    this.setState({moreComments: !currentState});
  }

  renderButton() {
    if (this.props.comments.length > 1) {
      return(
        <button onClick={this.toggleMoreComments.bind(this)}>
          {this.buttonText()};
        </button>
      );
    } else {
      return null;
    }
  }

  buttonText() {
    return this.state.moreComments ?
      "Hide" :
      `${this.props.comments.length - 1 } More comments...`
  }
  render() {
    return(
      <section className="comment-box">
        {this.renderComments()}
        {this.renderButton()}
      </section>
    );
  }
}

export default CommentBox;
