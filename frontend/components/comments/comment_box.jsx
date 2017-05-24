import React from 'react';
import CommentShowContainer from './comment_show_container';
import CommentFormContainer from './comment_form_container';

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
        <CommentShowContainer key={comment.id} comment={comment} />
      )
    });

    if (this.state.moreComments) {
      return allComments;
    } else {
      return null;
    }
  }

  toggleMoreComments() {
    let currentState = this.state.moreComments;
    this.setState({moreComments: !currentState});
  }

  renderButton() {
    if (this.props.comments.length > 1) {
      return(
        <button className="comment-button"
                onClick={this.toggleMoreComments.bind(this)}>
          {this.buttonText()}
        </button>
      );
    } else {
      return null;
    }
  }

  renderForm() {
    let currentUser = this.props.currentUser || {};
    if (this.state.moreComments) {
      if (this.props.currentUser) {
        return <CommentFormContainer annotationId={this.props.annotation.id} />;
      }
    }
  }

  buttonText() {
    return this.state.moreComments ?
      "Hide" :
      `Expand ${this.props.comments.length} comments...`;
  }
  render() {
    return(
      <section className="comment-box">
        {this.renderComments()}
        {this.renderForm()}
        {this.renderButton()}
      </section>
    );
  }
}

export default CommentBox;
