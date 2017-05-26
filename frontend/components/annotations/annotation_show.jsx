import React from 'react';
import CommentBoxContainer from '../comments/comment_box_container';

class AnnotationShow extends React.Component {

  destroySelf(e) {
    e.preventDefault();
    let answer = confirm(
      "Are you sure?  This action can't be undone"
    );
    if (answer) {
      this.props.destroyAnnotation(this.props.annotation.id);
    }
  }

  renderButton() {
    let currentUser = this.props.currentUser || {};
    if (currentUser.username === this.props.annotation.user) {
      return <button onClick={this.destroySelf.bind(this)}>Delete</button>;
    } else {
      return null;
    }
  }

  handleUpvote(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.upvoteAnnotation(this.props.annotation.id);
    } else {
      alert("You must be signed in to do that!");
    }
  }

  handleDownvote(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.downvoteAnnotation(this.props.annotation.id);
    } else {
      alert("You must be signed in to do that!");
    }
  }

  setStyle() {
    this.downvoteStyle = {};
    this.upvoteStyle = {};
    let votes = this.props.votes || {};
    if (votes[this.props.annotation.id] === -1) {
      this.downvoteStyle['color'] = "red";
    } else if (votes[this.props.annotation.id] === 1) {
      this.upvoteStyle['color'] = "green";
    }

  }

  render() {
    let annotation = this.props.annotation;
    this.setStyle();
    return(
      <section className="annotation-detail">
        <section className="body">
          <section className="voting">
            <button className="downvote"
                    style={this.downvoteStyle}
                    onClick={this.handleDownvote.bind(this)}>
              <i className="fa fa-thumbs-down" aria-hidden="true"></i>
            </button>
            <span className="score">{this.props.annotation.score}</span>
            <button className="upvote"
                    style={this.upvoteStyle}
                    onClick={this.handleUpvote.bind(this)}>
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </button>
        </section>
        <p>{annotation.body}</p>
      </section>
        <section className="annotation-extras">
          <h5 className='annotation-author'>{annotation.user}</h5>
          {this.renderButton()}
        </section>
        <CommentBoxContainer annotation={annotation} />
      </section>
    );
  }
}



export default AnnotationShow;
